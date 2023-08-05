import React from "react"
import "./font-styles.css"

const Navbar = () => {
  return (
    <div className="bg-gray-400 p-4">
      <div className="flex justify-between mb-4">
        <ul className="flex">
          <li className="mr-4">Home</li>
          <li className="mr-4">Apparel</li>
          <li>Our Blog</li>
        </ul>
      </div>
    </div>
    
  );
};

export default Navbar;