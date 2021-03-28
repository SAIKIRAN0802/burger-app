import React, { Component } from "react";
import Aux from "../../hoc/Auxillary";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";
const INGREDIENT_PRICES = {
  cheese: 20,
  salad: 10,
  patty: 10,
  bacon: 5,
};
class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      cheese: 0,
      patty: 0,
    },
    totalPrice: 30,
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState(ingredients) {
    //   const ingredients = {
    //       ...this.state.ingredients
    //   };
    //   console.log(ingredients)
    const sum = Object.keys(ingredients)
      .map((igKey) => {
        return ingredients[igKey];
      })
      .reduce((sum, el) => {
        return (sum += el);
      }, 0);
    this.setState({ purchasable: sum > 0 });
  }
  addIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceAddition = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  removeIngredientHandler = (type) => {
    const oldCount = this.state.ingredients[type];
    const updatedCount = Math.max(oldCount - 1, 0);
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = updatedCount;
    const priceDeduction = INGREDIENT_PRICES[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceDeduction;
    this.setState({ totalPrice: newPrice, ingredients: updatedIngredients });
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = ()=> {
    this.setState({purchasing: true});
  }

  purchaseCancelHandler = ()=> {
    this.setState({purchasing: false});
  }
  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0; //boolean to check if quantity less than or equal to zero
    }
    return (
      <Aux>
        <Modal show = {this.state.purchasing } modalClosed={this.purchaseCancelHandler}>
          <OrderSummary ingredients={this.state.ingredients} />
        </Modal>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          ingredientAdded={this.addIngredientHandler}
          ingredientRemoved={this.removeIngredientHandler}
          disabled={disabledInfo}
          price={this.state.totalPrice}
          disabledorder={!this.state.purchasable}
          ordered = {this.purchaseHandler}
        />
      </Aux>
    );
  }
}
export default BurgerBuilder;
