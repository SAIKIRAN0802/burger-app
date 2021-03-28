import React from "react";
import Aux from "../../hoc/Auxillary";
import classes from "./Layout.module.css";
import Toolbar from "../Navigation/Toolbar/Toolbar"
const Layout = (props) => {
  return (
    <Aux>
      <Toolbar />
      <div>ToolBar, SideDrawer, Backdrop</div>
      <main className={classes.Content}>
        {props.children}
      </main>
    </Aux>
  );
};
export default Layout;
