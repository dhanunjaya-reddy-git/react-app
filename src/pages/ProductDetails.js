import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../products";
import "../index.css";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === id);

  if (!product) return <h2>Product not found</h2>;

  return (
    <div className="container">
      <h2>{product.name}</h2>
      <img src={product.image} alt={product.name} />
      <p>${product.price}</p>
      <p>{product.description}</p>
      <button onClick={() => navigate(-1)}>Back</button>
    </div>
  );
};

export default ProductDetails;
