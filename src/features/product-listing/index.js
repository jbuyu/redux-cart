import React from "react";
// const products = "../../data/products.json";
const ProductListing = (props) => {
  return;
  <div>
    {props.products.map((product) => {
      <ProductListItem product={product} />;
    })}
  </div>;
};

export default ProductListing;
