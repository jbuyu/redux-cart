import React from "react";
import ProductListItem from "./product-list-item";
export default function ProductListing(props) {
  let { products } = props;
  return <div className="product-listing" >
    {products.map((product) => {
      return <ProductListItem key={product.id} product={product} />;
    })}
  </div>
}
