import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import MainLayout from "../shared/MainLayout";
import Home from "../pages/home/Home";
import Orders from "../pages/orders/Orders";
import Product from "../pages/products/Product";
import Cart from "../pages/cart/Cart";


const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Navigate replace to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="products" element={<Product />} />
        <Route path="orders" element={<Orders />} />
        <Route path="cart" element={<Cart />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
