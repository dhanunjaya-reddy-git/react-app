import React from "react";
import ProductList from "../components/ProductList";

const Home = ({ products }) => {
  return (
    <div>
      <h1>Product Management</h1>
      <ProductList products={products} />
    </div>
  );
};

export default Home;