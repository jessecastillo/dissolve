import React from "react";
import "./font-styles.css";

const Navbar = () => {
  return (
    <div className="bg-gray-400 p-4">
      <div className="flex justify-between items-center mb-4">
        <ul className="flex">
          <li className="mr-4">Home</li>
          <li className="mr-4">Apparel</li>
          <li>Our Blog</li>
        </ul>
        <div className="text-white font-bold text-3xl ml-4">Wisdom Wear</div>
      </div>
    </div>
  );
};

export default Navbar;
