import React, { Component } from "react";

export default function ProductListItem(props) {
  return (
    <div className="product-list-item">
      <h5>{props.product.name}</h5>
      <img
        height={100}
        src={`/products/${props.product.image}`}
        alt="product image"
      />
      <div className="description">{props.product.description}</div>
      <div className="price"> ${props.product.price}</div>
      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
