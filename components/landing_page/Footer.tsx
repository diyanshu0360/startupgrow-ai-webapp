import Image from "next/image";
import React from "react";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logoImg from "@/public/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 border-t-[1px] border-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Left Part */}
          <div className="flex flex-col items-start space-y-4 max-w-xs">
            {/* Logo and Name */}
            <div className="flex flex-row items-center gap-1 cursor-pointer">
              <Image
                className="object-contain w-8 md:w-9 rounded-md"
                src={logoImg}
                alt="Logo"
              />
              <span className="font-semibold text-lg md:text-xl">
                StartupGrow AI
              </span>
            </div>
            {/* Description */}
            <p className="text-black font-normal text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
              mollis turpis id nibh bibendum, in tempor libero suscipit.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-[#71717A] w-8 h-8 border-[1px] border-gray-300 rounded-md justify-center items-center flex flex-col"
              >
                <FaTwitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[#71717A] w-8 h-8 border-[1px] border-gray-300 rounded-md justify-center items-center flex flex-col"
              >
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-[#71717A] w-8 h-8 border-[1px] border-gray-300 rounded-md justify-center items-center flex flex-col"
              >
                <FaEnvelope className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Right Part */}
          <div className="flex flex-row space-x-8 md:space-x-12">
            {/* Privacy, Terms, Refund */}
            <div className="space-y-2 flex flex-col">
              <h3 className="text-md text-black font-medium">Legal</h3>
              <a href="#" className="text-sm text-black font-normal">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-black font-normal">
                Terms of Service
              </a>
              <a href="#" className="text-sm text-black font-normal">
                Refund Policy
              </a>
            </div>

            {/* About, Developer, Blog, Contact Us */}
            <div className="space-y-2 flex flex-col">
              <h3 className="text-md text-black font-medium">Company</h3>
              <a href="#" className="text-sm text-black font-normal">
                About Us
              </a>
              <a href="#" className="text-sm text-black font-normal">
                Developer
              </a>
              <a href="#" className="text-sm text-black font-normal">
                Blog
              </a>
              <a href="#" className="text-sm text-black font-normal">
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Your Company. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
