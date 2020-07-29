import React from "react";
import ProductListItem from "./product-list-item";
import { connect } from "react-redux";
import { cartItemsWithQuantity } from "../cart";

function ProductListing(props) {
  let { products } = props;
  return (
    <div className="product-listing">
      {products.map((product) => {
        return (
          <ProductListItem
            addToCart={props.addToCart}
            key={product.id}
            product={product}
            cart={cartItemsWithQuantity(props.cart)}
          />
        );
      })}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => {
      dispatch({ type: "ADD", payload: item });
    },
    removeFromCart: (item) => {
      dispatch({ type: "REMOVE", payload: item });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductListing);
