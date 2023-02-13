import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/home";
import ContactPage from "./pages/contact";
import NewPage from "./pages/new";
import ProductPage from "./pages/product";
import FormContextProvider from "./components/context/context-form";
import { v4 as uuidv4 } from "uuid";
import "./sass/index.css";

const App = () => {
  return (
    <div className="container">
      <div className="header">
        <nav>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/new">New</a>
            </li>
            <li>
              <a href="/product">Product</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/new" element={<NewPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </div>
  );
};

export default App;
