import React from "react";
import data from "../data/products.json";
import ProductListing from "../features/product-listing";
export default function HomePage() {
  return (
    <div>
      <h2>
        <ProductListing products={data.products} />
      </h2>
    </div>
  );
}
