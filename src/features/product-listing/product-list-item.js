import React, { Component } from "react";
import { connect } from "react-redux";
function ProductListItem(props) {
  let { product } = props;
  let { addToCart } = props;
  const thisItemInCart = props.cart.filter((item) => item.id === product.id);
  console.log(thisItemInCart);
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
          {thisItemInCart && (
            <span className="items-added">{thisItemInCart.length || 0}</span>
          )}
        </button>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
  };
}

export default connect(mapStateToProps)(ProductListItem);
