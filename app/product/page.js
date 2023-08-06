import React from "react";
import Navbar from "../Components/NavBar";
import {ProductBroswer} from '@ecwid/nextjs-ecwid-plugin'
import dynamic from "next/dynamic";

function Product() {
  return (
    <div id="product-section" className="flex items-center justify-center min-h-screen bg-gray-800 text-white">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Product</h1>
        <p className="mt-4 text-lg">My hero section content goes here</p>
      </div>
    </div>
  );
}

export default Product;
