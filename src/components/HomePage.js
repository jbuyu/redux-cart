import React from "react";
import data from "../data/products.json";
import ProductListing from "../features/product-listing";
export default function HomePage() {
  return (
    <ProductListing products={data.products} />
  );
}
