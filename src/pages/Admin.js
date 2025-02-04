import React, { useState } from "react";
import { Link } from "react-router-dom";
import productsData from "../products";
import "../Admin.css";

const Admin = () => {
  const [products, setProducts] = useState(productsData);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({ id: "", name: "", price: "", description: "" });

  const handleEdit = (product) => {
    setEditingProduct(product);
    setFormData(product);
  };

  const handleDelete = (id) => {
    setProducts(products.filter((p) => p.id !== id));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      setProducts(products.map((p) => (p.id === editingProduct.id ? formData : p)));
      setEditingProduct(null);
    } else {
      setProducts([...products, { ...formData, id: Date.now().toString() }]);
    }
    setFormData({ id: "", name: "", price: "", description: "" });
  };

  return (
    <div className="container">
      <nav className="navbar">
        <Link to="/" className="nav-link">Products</Link>
        <Link to="/admin" className="nav-link active">Admin</Link>
      </nav>

      <h1>Admin</h1>
      <button className="btn new" onClick={() => setEditingProduct(null)}>NEW</button>

      <form onSubmit={handleSubmit} className="admin-form">
        <input type="text" placeholder="ID" value={formData.id} onChange={(e) => setFormData({ ...formData, id: e.target.value })} />
        <input type="text" placeholder="Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
        <input type="number" placeholder="Price" value={formData.price} onChange={(e) => setFormData({ ...formData, price: e.target.value })} />
        <textarea placeholder="Description" value={formData.description} onChange={(e) => setFormData({ ...formData, description: e.target.value })}></textarea>
        <button type="submit" className="btn btn-outline no-bg">UPDATE</button>
      </form>

      <div className="product-list">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <input value={product.id} readOnly />
            <input value={product.name} readOnly />
            <input value={product.price} readOnly />
            <textarea value={product.description} readOnly></textarea>
            <div className="button-group">
              <button onClick={() => handleEdit(product)} className="btn btn-outline no-bg">UPDATE</button>
              <button onClick={() => handleDelete(product.id)} className="btn btn-outline delete no-bg">DELETE</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Admin;
