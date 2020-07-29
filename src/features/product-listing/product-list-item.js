import React, { Component } from "react";
import { connect } from "react-redux";
function ProductListItem(props) {
  let { product } = props;
  let { addToCart } = props;
  let { removeFromCart } = props;
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
          <i className="fas fa-cart-plus"></i>
          {props.cartItem && (
            <span className="items-added">{props.cartItem.quantity || 0}</span>
          )}
        </button>

        {props.cartItem && (
          <button
            className="add-btn"
            onClick={() => removeFromCart(props.cartItem)}
          >
            <i className="fas fa-minus"></i>
          </button>
        )}
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
