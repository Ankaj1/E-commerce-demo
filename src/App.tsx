import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import User from "./pages/User";

function App() {
  return (
    <>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/user" element={<User />} />
            <Route path="/products" element={<Products />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
