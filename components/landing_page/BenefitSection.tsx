import React from "react";
import { FaCheckCircle, FaChartLine, FaShieldAlt } from "react-icons/fa";

const BenefitSection: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto text-center mb-12">
        <div className="flex flex-col items-center mb-4">
          {/* <div>
            <span className="text-xs font-medium text-black bg-[#F4F4F5] flex flex-row justify-center items-center border-gray-300 h-6 border px-5 rounded-full">
              Pricing
            </span>
          </div> */}
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Our Process
          </h2>
          <p className="text-md md:text-lg text-[#71717A] mt-2">
            Transparent Process for Impactful Marketing Content
          </p>
        </div>
      </div>

      <div className="container mx-auto flex flex-col md:flex-row justify-center items-stretch space-y-4 md:space-y-0 md:space-x-4 px-4">
        <div className="bg-[#F4F4F5] border border-gray-300 py-8 px-4 rounded-md flex flex-col items-center text-center">
          <FaChartLine className="text-[#FF033E] w-12 h-12 mb-4" />
          <h3 className="text-xl font-semibold text-black mt-4">Scrape</h3>
          <p className="text-md text-[#71717A] mt-2">
            Begin by extracting relevant information from your landing page URL.
          </p>
        </div>

        <div className="bg-[#F4F4F5] border border-gray-300 py-8 px-4 rounded-md flex flex-col items-center text-center">
          <FaShieldAlt className="text-[#FF033E] w-12 h-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">Analyze & Create</h3>
          <p className="text-md text-[#71717A] mt-2">
            Our AI analyzes the extracted data to generate tailored marketing
            content.
          </p>
        </div>

        <div className="bg-[#F4F4F5] border border-gray-300 py-8 px-4 rounded-md flex flex-col items-center text-center">
          <FaChartLine className="text-[#FF033E] w-12 h-12 mb-4" />
          <h3 className="text-xl font-bold mb-2">Publish & Grow</h3>
          <p className="text-md text-[#71717A] mt-2">
            Publish the created content across platforms to enhance visibility
            and foster growth for your startup.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BenefitSection;
