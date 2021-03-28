import React from "react";
import classes from "./BurgerIngredient.module.css";
import PropTypes from "prop-types";
const burgerIngredient = (props) => {
  let ingredient = null;
  switch (props.type) {
    case "bread-bottom":
      ingredient = <div className={classes.BreadBottom} title="bread-bottom" ></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className={classes.BreadTop} title="bread-top" >
          <div className={classes.Seeds1}></div>
          <div className={classes.Seeds2}></div>
        </div>
      );
      break;
    case "patty":
      ingredient = <div className={classes.Meat} title="patty" ></div>;
      break;
    case "cheese":
      ingredient = <div className={classes.Cheese} title="cheese" ></div>;
      break;
    case "salad":
      ingredient = <div className={classes.Salad} title="salad"  ></div>;
      break;
    case "bacon":
      ingredient = <div className={classes.Bacon} title="bacon" ></div>;
      break;
    default:
      ingredient = null;
      break;
  }
  return ingredient;
};
burgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};
export default burgerIngredient;
