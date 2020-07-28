import React from "react";
import HomePage from "./components/HomePage";
import CartPage from "./components/CartPage";

import { Switch, Route } from "react-router-dom";

const Router = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/cart" component={CartPage} />
    </Switch>
  );
};
export default Router;
