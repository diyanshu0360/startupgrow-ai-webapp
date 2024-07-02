"use client";
import { useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import dashboardImg from "@/public/dashboard-img.png";

const HeroSection = () => {
  const ctaText = "Get Started";
  const demoVideoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

  const { data: session } = useSession();

  return (
    <section className="relative pb-10 pt-28 md:pt-40 px-4 md:px-8">
      <div className="absolute inset-x-0 top-16 h-[700px] rotate-180 text-gray-500/20 opacity-70  [mask-image:linear-gradient(to_bottom,transparent,white)] -z-10">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="100%"
              patternTransform="translate(0 -1)"
            >
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
        </svg>
      </div>
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1
          style={{ lineHeight: "66px" }}
          className="text-4xl sm:text-5xl md:text-6xl font-bold md:w-2/3 mb-3 md:mb-5 text-black"
        >
          <span className="bg-[#FF033E] text-white px-3 text-center items-center justify-center">
            30 Days
          </span>
          of Marketing Content Instantly
        </h1>
        <p className="text-md md:text-xl text-[#71717A] text-center md:w-3/6 mb-3 md:mb-5">
          Input website URL, our AI will create marketing content for multiple
          socials and platforms instantly.
        </p>
        <Link
          href={session ? "/dashboard" : "/login"}
          className="bg-[#FF033E] text-white rounded-md text-lg font-medium flex items-center justify-center h-10 px-16"
        >
          {ctaText}
        </Link>
        {/* <video
          className="w-full md:w-3/4 rounded-lg shadow-lg mt-8 md:mt-12"
          controls
        >
          <source src={demoVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <img
          className="w-full md:w-3/4 rounded-lg shadow-lg mt-8 md:mt-12"
          src={dashboardImg}
        />
      </div>
    </section>
  );
};

export default HeroSection;
