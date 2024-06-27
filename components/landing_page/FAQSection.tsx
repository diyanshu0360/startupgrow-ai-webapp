"use client";
import React, { useState } from "react";

const FAQSection: React.FC = () => {
  const faqs = [
    {
      question: "What is Lorem Ipsum?",
      answer:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.",
    },
    {
      question: "Why do we use it?",
      answer:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      question: "Where does it come from?",
      answer:
        "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    if (activeIndex === index) {
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  };

  return (
    <section className="py-8 md:py-16 bg-white">
      <div className="container mx-auto">
        {/* <div className="flex flex-row justify-center items-center md:mb-4">
          <span className="text-xs font-medium text-black bg-[#F4F4F5] flex flex-row justify-center items-center border-gray-300 h-6 border px-5 rounded-full">
            FAQ's
          </span>
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-8">
          {/* Box 1: Title, Subtitle, CTA Button */}
          <div className=" p-4 md:p-6">
            <div className="text-center mb-4">
              <h2 className="text-3xl md:text-4xl font-semibold text-black">
                Frequently Asked Questions
              </h2>
              <p className="text-md md:text-lg text-[#71717A] mt-2">
                Here are some common questions about our product.
              </p>
            </div>
            {/* CTA Button */}
            <div className="flex flex-col items-center">
              <button className="bg-[#FF033E] text-white rounded-md text-md font-medium flex items-center justify-center h-9 w-40">
                Contact Us
              </button>
            </div>
          </div>

          {/* Box 2: FAQ Items */}
          <div className="space-y-4 px-4 pt-6 md:pt-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={`px-3 sm:px-4 py-2 sm:py-3 flex ${
                  activeIndex === index
                    ? "flex-col"
                    : "flex-row justify-between items-center"
                } cursor-pointer bg-[#F4F4F5] rounded-md border border-gray-300`}
              >
                {/* Question and Toggle */}
                <div
                  className="flex flex-grow items-center justify-between cursor-pointer mb-1"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-sm sm:text-md text-black font-medium">
                    {faq.question}
                  </h3>
                  {activeIndex === index ? (
                    <svg
                      className="w-5 h-5 text-[#71717A] transform rotate-180 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  ) : (
                    <svg
                      className="w-5 h-5 text-[#71717A]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  )}
                </div>
                {/* Answer */}
                {activeIndex === index && (
                  <div className="text-sm sm:text-md text-[#71717A] font-normal">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
