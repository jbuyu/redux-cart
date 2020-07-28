import React, { useState } from "react";
import Router from "./Router";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/cart">Cart</NavLink>
        </li>
      </ul>
    </nav>
  );
};

function App() {
  return (
    <div>
      <Navigation />
      <Router />
    </div>
  );
}

export default App;
