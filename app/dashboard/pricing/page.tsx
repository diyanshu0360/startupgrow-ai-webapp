"use client";
import Header from "@/components/Header";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";
import { IoMdCheckmark } from "react-icons/io";

export default function Pricing() {
  const [isProSelected, setIsProSelected] = useState(false);
  const { data: session }: any = useSession();

  const userEmail = session?.user?.email;
  const userName = session?.user?.name;

  let paymentUrlStarter = `https://billing-startupgrowai.lemonsqueezy.com/checkout/buy/72ffdb9c-4dc3-475a-bd8e-35a40cf7bfeb?checkout[email]=${userEmail}&checkout[name]=${userName}&checkout[discount_code]=FIRST100`;
  let paymentUrlPro = `https://billing-startupgrowai.lemonsqueezy.com/checkout/buy/b1712dd0-05d3-4185-9339-e8f5c23beabc?checkout[email]=${userEmail}&checkout[name]=${userName}&checkout[discount_code]=FIRST100`;

  const cards = [
    {
      title: "Starter Plan",
      subtitle: "Great for Launch",
      price: "$15.99",
      discounted: "$7.99",
      features: [
        "1 Credit (1 credit = 30 days of content)",
        "30 days Marketing Content",
        "24/7 Support",
        "Upcoming Features",
      ],
      button: "Buy Now",
      onPressLink: paymentUrlStarter,
    },
    {
      title: "Pro Plan",
      subtitle: "Perfect for Growth",
      price: "$39.99",
      discounted: "$19.99",
      features: [
        "3 Credits (1 credit = 30 days of content)",
        "30 days Marketing Content",
        "24/7 Support",
        "Upcoming Features",
      ],
      button: "Buy Now",
      popular: true,
      onPressLink: paymentUrlPro,
    },
  ];

  const renderCard = (card: any, index: number) => (
    <div className="relative py-2 bg-white" key={index}>
      <div className="overflow-hidden shadow-lg p-4 border rounded-md w-64 sm:w-72">
        {card.popular && (
          <span className="bg-[#F4F4F5] text-[#FF033E] text-[11px] font-bold px-3 py-1 rounded-full absolute top-[-6px] border border-[#FF033E]">
            Most Popular
          </span>
        )}
        <div className="px-4 py-2">
          <div className="font-semibold text-md mb-3 text-[#71717A]">
            {card.title}
          </div>
          <div className="text-[#FF033E] text-3xl font-bold mb-3">
            {card.discounted}{" "}
            <span className="text-[#71717A] line-through text-3xl font-medium">
              {card.price}
            </span>{" "}
            <span className="text-[#71717A] font-medium text-sm">
              /one time
            </span>
          </div>
          <div className="text-black text-sm font-normal mb-2">
            {card.subtitle}
          </div>
          <div className="flex flex-col gap-1 mb-5">
            {card.features.map((feature: any, i: number) => (
              <div className="flex flex-row gap-1 items-center" key={i}>
                <IoMdCheckmark size={16} />
                <p className="font-medium text-sm text-black">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        <a href={card.onPressLink} target={"_blank"}>
          <div className="bg-[#FF033E] h-10 text-white rounded-md font-medium text-md w-full flex flex-col justify-center items-center">
            {card.button}
          </div>
        </a>
      </div>
    </div>
  );

  return (
    <div className="h-screen relative">
      <Header />
      <div className="absolute inset-x-0 top-16 h-[700px] rotate-180 text-gray-500/20 opacity-70  [mask-image:linear-gradient(to_bottom,transparent,white)] -z-20">
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
      <div className="min-h-[calc(100%_-_4rem)] flex items-center justify-center flex-col">
        <div className="border bg-white border-[#F4F4F5] rounded-lg py-4 px-4 md:px-20 flex flex-col gap-2">
          <div className="text-center my-4 flex flex-col items-center justify-center">
            <h1 className="text-md font-semibold text-[#FF033E]">
              Pricing Plans
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-black mt-1">
              Lorem ipsum dolor sit amet.
            </h2>
            <p className="text-sm sm:text-md font-normal text-[#71717A] mt-2 max-w-[500px] text-center">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo
              magnam adipisci quibusdam.
            </p>
          </div>

          {/* Toogle Button */}
          <div className="flex flex-row items-center justify-center md:hidden">
            <div className="bg-[#F4F4F5] h-10 rounded-md border border-gray-300 flex flex-row justify-center items-center">
              <button
                onClick={() => setIsProSelected(false)}
                className={`text-sm font-medium h-8 w-24 rounded-[4px] mx-1 ${
                  isProSelected ? "text-black" : "text-white bg-[#FF033E]"
                }`}
              >
                Starter
              </button>
              <button
                onClick={() => setIsProSelected(true)}
                className={`text-sm font-medium h-8 w-24 rounded-sm mx-1 ${
                  !isProSelected ? "text-black" : "text-white bg-[#FF033E]"
                }`}
              >
                Pro
              </button>
            </div>
          </div>

          {/* Mobile Card */}
          <div className="flex md:hidden flex-col md:flex-row justify-center items-center gap-4 mb-2 mt-3">
            {isProSelected ? renderCard(cards[1], 1) : renderCard(cards[0], 0)}
          </div>

          {/* Desktop Card */}
          <div className="hidden md:flex md:flex-row justify-center items-center gap-6 mb-6">
            {cards.map((card, index) => renderCard(card, index))}
          </div>
        </div>
      </div>
    </div>
  );
}
