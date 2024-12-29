import React from "react";
import ProductHero from "./components/ProductHero";
import AllProduct from "./components/AllProduct";
import CallToAction from "../home/components/CallToAction";

const Product = () => {
  return (
    <div>
      <ProductHero />
      <AllProduct/>
      <CallToAction/>
    </div>
  );
};

export default Product;
