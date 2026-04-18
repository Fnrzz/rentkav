"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex sticky top-0 flex-wrap items-center justify-between py-5 px-6 lg:px-10 bg-white z-50">
      <div className="flex items-center gap-3">
        <Image
          src="/kavdra-logo.avif"
          alt="logo"
          width={50}
          height={50}
          className="w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] object-contain"
        />
        <h6 className="text-lg lg:text-xl font-bold">RentKav</h6>
      </div>

      <button
        onClick={toggleMenu}
        className="lg:hidden block focus:outline-none p-2"
        aria-label="Toggle Menu"
      >
        {isOpen ? (
          <svg
            className="w-7 h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-7 h-7 text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>

      <div
        className={`
          w-full lg:w-auto lg:flex-1 lg:ml-12 
          flex flex-col lg:flex-row lg:items-center lg:justify-between
          transition-all duration-500 ease-in-out overflow-hidden
          ${isOpen ? "max-h-[500px] opacity-100 mt-4" : "max-h-0 opacity-0"} 
          lg:max-h-none lg:opacity-100 lg:mt-0 lg:overflow-visible
        `}
      >
        <div className="flex flex-col lg:flex-row lg:mx-auto items-center gap-6 lg:gap-8 pt-4 lg:pt-0">
          <Link
            href="/"
            className="font-medium text-sm hover:text-[#C9A66B] transition-colors w-full lg:w-auto text-center"
          >
            Home
          </Link>
          <Link
            href="/"
            className="font-medium text-sm hover:text-[#C9A66B] transition-colors w-full lg:w-auto text-center"
          >
            Vehicles
          </Link>
          <Link
            href="/"
            className="font-medium text-sm hover:text-[#C9A66B] transition-colors w-full lg:w-auto text-center"
          >
            Offers
          </Link>
          <Link
            href="/"
            className="font-medium text-sm hover:text-[#C9A66B] transition-colors w-full lg:w-auto text-center"
          >
            About Us
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-3 lg:gap-4 w-full lg:w-auto mt-6 lg:mt-0 pb-4 lg:pb-0">
          <Link
            href="/"
            className="px-6 py-2.5 text-sm font-bold w-full lg:w-auto text-center hover:text-[#C9A66B] transition-colors"
          >
            Login
          </Link>
          <Link
            href="/"
            className="px-6 py-2.5 text-sm bg-[#C9A66B] hover:bg-[#b08e55] rounded-xl text-white font-bold w-full lg:w-auto text-center transition-colors"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
