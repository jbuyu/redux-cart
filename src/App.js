import React, { useState } from "react";
import Router from "./Router";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
const Navigation = (props) => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">
            <i className="fas fa-home"></i>
          </NavLink>
        </li>
        <li>
          <NavLink to="/cart">
            <i className="fas fa-cart-arrow-down"></i>
            {props.cart && (
              <span className="total-added">{props.cart.length}</span>
            )}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

function App(props) {
  return (
    <div>
      <Navigation {...props} />
      <Router />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps)(App);
