import React from "react";
import data from "../data/products.json";
import ProductListing from "../features/product-listing";
export default function HomePage() {
  return (
    <div className="page-container">
      <ProductListing products={data.products} />
    </div>
  );
}
