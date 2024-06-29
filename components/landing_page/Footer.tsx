import Image from "next/image";
import React from "react";
import { FaTwitter, FaLinkedin, FaEnvelope } from "react-icons/fa";
import logoImg from "@/public/logo.png";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer className="bg-white py-8 border-t-[1px] border-gray-300">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-start gap-8">
          {/* Left Part */}
          <div className="flex flex-col items-start space-y-4 max-w-xs">
            {/* Logo and Name */}
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
            {/* Description */}
            <p className="text-black font-normal text-sm">
              Simplifies your marketing strategy by generating 30 days of
              product launch and marketing content.
            </p>
            {/* Social Links */}
            <div className="flex space-x-4">
              <Link
                target={"_blank"}
                href="https://x.com/diyanshu0360"
                className="text-[#71717A] w-8 h-8 border-[1px] border-gray-300 rounded-md justify-center items-center flex flex-col"
              >
                <FaTwitter className="h-5 w-5" />
              </Link>
              <Link
                target={"_blank"}
                href="https://www.linkedin.com/in/diyanshu-patel-24520522a/"
                className="text-[#71717A] w-8 h-8 border-[1px] border-gray-300 rounded-md justify-center items-center flex flex-col"
              >
                <FaLinkedin className="h-5 w-5" />
              </Link>
              <Link
                target={"_blank"}
                href="mailto:diyanshu0360@gmail.com"
                className="text-[#71717A] w-8 h-8 border-[1px] border-gray-300 rounded-md justify-center items-center flex flex-col"
              >
                <FaEnvelope className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Right Part */}
          <div className="flex flex-row space-x-8 md:space-x-12">
            {/* Privacy, Terms, Refund */}
            <div className="space-y-2 flex flex-col">
              <h3 className="text-md text-black font-medium">Legal</h3>
              <Link href="/privacy" className="text-sm text-black font-normal">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-black font-normal">
                Terms of Service
              </Link>
              <Link href="/refund" className="text-sm text-black font-normal">
                Refund Policy
              </Link>
            </div>

            {/* About, Developer, Blog, Contact Us */}
            <div className="space-y-2 flex flex-col">
              <h3 className="text-md text-black font-medium">Company</h3>
              <Link
                target={"_self"}
                href="https://x.com/diyanshu0360"
                className="text-sm text-black font-normal"
              >
                Developer
              </Link>

              <Link
                target={"_self"}
                href="mailto:diyanshu0360@gmail.com"
                className="text-sm text-black font-normal"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-8">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} StartupGrow AI. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
