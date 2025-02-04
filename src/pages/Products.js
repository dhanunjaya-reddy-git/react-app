import React, { useState } from "react";
import { Link } from "react-router-dom";
import products from "../products";

const Products = () => {
  const [sortBy, setSortBy] = useState("name");
  const [order, setOrder] = useState("asc");

  const sortedProducts = [...products].sort((a, b) => {
    if (sortBy === "name") {
      return order === "asc"
        ? a.name.localeCompare(b.name)
        : b.name.localeCompare(a.name);
    } else {
      return order === "asc" ? a.price - b.price : b.price - a.price;
    }
  });

  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/" className="nav-link active">Products</Link>
        <Link to="/admin" className="nav-link">Admin</Link>
      </nav>

      <div className="logo">ULTIMATE BURGERS</div>

      <div className="filters">
        <div>
          <span>Sort:</span>
          <label><input type="radio" name="sort" checked={sortBy === "name"} onChange={() => setSortBy("name")} /> Name</label>
          <label><input type="radio" name="sort" checked={sortBy === "price"} onChange={() => setSortBy("price")} /> Price</label>
        </div>
        <div>
          <span>Order:</span>
          <label><input type="radio" name="order" checked={order === "asc"} onChange={() => setOrder("asc")} /> Ascending</label>
          <label><input type="radio" name="order" checked={order === "desc"} onChange={() => setOrder("desc")} /> Descending</label>
        </div>
      </div>

      <div className="product-grid">
        {sortedProducts.map((product) => (
          <div key={product.id} className="product-card">
            <img src={product.image} alt={product.name} />
            <h2>{product.name}</h2>
            <p>${product.price.toFixed(2)}</p>
            <Link to={`/product/${product.id}`} className="btn">View Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
