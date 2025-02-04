import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route, NavLink } from "react-router-dom";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Admin from "./pages/Admin"; // Only one import for Admin
import "./index.css";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <div className="logo">🛒 MyStore</div>
        <div>
          <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Products</NavLink>
          <NavLink to="/admin" className={({ isActive }) => (isActive ? "active" : "")}>Admin</NavLink>
        </div>
      </nav>

      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;
