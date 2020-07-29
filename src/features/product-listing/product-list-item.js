import React, { Component } from "react";
import { connect } from "react-redux";
function ProductListItem(props) {
  let { product } = props;
  let { addToCart } = props;
  return (
    <div className="product-list-item">
      <h5>{product.name}</h5>
      <img
        height={100}
        src={`/products/${product.image}`}
        alt="product image"
      />
      <div className="description">{product.description}</div>
      <div className="price"> ${product.price}</div>
      <div>
        <button className="add-btn" onClick={() => addToCart(props.product)}>
          Add
          {props.cartItem && (
            <span className="items-added">{props.cartItem.quantity || 0}</span>
          )}
        </button>
      </div>
    </div>
  );
}

// function mapStateToProps(state) {
//   return {
//     cart: state.cart,
//   };
// }

export default ProductListItem;
