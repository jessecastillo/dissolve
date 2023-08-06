import React from "react";
import Link from "next/link"; // Import the Link component
import "../font-styles.css";
import Image from "next/image";


const HomeIcon = () => (

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>

)

const Navbar = () => {
  return (
    <div className="max-w-6x1 mx-auto border-gradient bg-slate-600 p-4 sticky top-0 drop-shadow-xl z-10">
      <div className="flex justify-between items-center mb-4">
        <ul className="flex">
          {/* Use Link component to create linked pages */}
          <li className="flex space-x-4 mr-4">
            <Link href="/">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="text-blue-400 flex w-6 h-6 mr-2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
                Home
            </Link>
          </li>
          <li className="flex items-center space-x-1 mr-4">
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