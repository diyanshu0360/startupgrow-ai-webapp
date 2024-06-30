"use client";
import { useState } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import Image from "next/image";
import logoImg from "@/public/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: session } = useSession();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white bg-opacity-20 backdrop-blur-md fixed w-full top-0 left-0 z-10 h-16 border-b-[1px] border-gray-100">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo and App Name */}
        <Link
          href={"/"}
          className="flex flex-row items-center gap-1 cursor-pointer"
        >
          <Image
            className="object-contain w-8 md:w-9 rounded-md"
            src={logoImg}
            alt="Logo"
          />
          <span className="font-semibold text-lg md:text-xl">
            StartupGrow AI
          </span>
        </Link>

        {/* Menu for large screens */}
        <div className="hidden md:flex space-x-6 items-center">
          <div className="md:flex space-x-4 items-center">
            <Link href="/usecase" className="font-medium text-md text-black">
              Features
            </Link>
            <Link href="#pricing" className="font-medium text-md text-black">
              Pricing
            </Link>
            <Link href="/affiliate" className="font-medium text-md text-black">
              FAQ's
            </Link>
          </div>
          <div className="md:flex space-x-3 items-center">
            {session ? (
              <Link
                href="/dashboard"
                className="bg-[#FF033E] text-white rounded-md text-md font-medium flex items-center justify-center h-9 px-4"
              >
                Dashboard
              </Link>
            ) : (
              <>
                <Link
                  href="/login"
                  className="bg-[#FF033E] text-white rounded-md text-md font-medium flex items-center justify-center h-9 px-4"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
        </div>

        {/* Hamburger menu for mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="text-black focus:outline-none"
          >
            {isOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white px-6 pt-2 pb-6 space-y-2 border-b-[1px] border-gray-300">
          <Link
            href="#pricing"
            className="block font-medium text-md text-black"
          >
            Pricing
          </Link>
          <Link
            href="/usecase"
            className="block font-medium text-md text-black"
          >
            Use Case
          </Link>
          <Link
            href="/affiliate"
            className="block font-medium text-md text-black"
          >
            Affiliate
          </Link>
          <div className="pt-3">
            {session ? (
              <Link
                href="/dashboard"
                className="bg-[#FF033E] text-white flex-grow rounded-md text-md font-medium flex items-center justify-center h-9 px-4"
              >
                Dashboard
              </Link>
            ) : (
              <div className="flex flex-row items-center space-x-3">
                <Link
                  href="/login"
                  className="bg-[#FF033E] text-white w-[50%] rounded-md text-md font-medium flex items-center justify-center h-9 px-4"
                >
                  Log In
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
