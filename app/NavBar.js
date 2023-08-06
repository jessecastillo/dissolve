import React from "react";
import Link from "next/link"; // Import the Link component
import "./font-styles.css";
import Image from "next/image";

const Navbar = () => {
  return (
    <div className="bg-gray-500 p-4">
      <div className="flex justify-between items-center mb-4">
        <ul className="flex">
          {/* Use Link component to create linked pages */}
          <li className="mr-4">
            <Link href="/">Home</Link>
          </li>
          <li className="mr-4">
            <Link href="/product">Apparel</Link>
          </li>
          <li>
            <Link href="/blog">Our Blog</Link>
            {/* Use the correct href for the blog page */}
          </li>
          {/* Add more li elements for other pages */}
          <li className="ml-4">
            <Link href="/contact">Contact</Link>
          </li>
          <li className="ml-4">
            <Link href="/checkout">Checkout</Link>
          </li>
          <li className="ml-4">
            <Link href="/search">SearchTest</Link>
          </li>
        </ul>
        <div className="flex items-center">
          <Image
            src="/wisdomwearlogo.png"
            alt="Wisdom Wear Logo"
            width={60} // Set your desired width here
            height={60} // Set your desired height here
          />
          <div className="text-white font-bold text-2xl mr-2 pl-2">Wisdom Wear</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
