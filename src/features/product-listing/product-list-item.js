import React, { Component } from "react";

export default function ProductListItem(props) {
  return (
    <div>
      <h3>{props.name}</h3>
      <img
        height={100}
        src="{`/products/${props.image}`}"
        alt="product image"
      />
      <div>{props.description}</div>
      <div> ${props.price}</div>
      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
