import React from "react";

const FeatureSection: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto text-center mb-12">
        <div className="flex flex-col items-center mb-4">
          <h2 className="text-3xl md:text-4xl font-semibold text-black">
            Our Features
          </h2>
          <p className="text-md md:text-lg text-[#71717A] mt-2">
            Your Startup&apos;s Marketing Efforts with Precision and Efficiency
          </p>
        </div>
      </div>

      <div className="container mx-auto grid gap-8 md:grid-cols-2 px-4">
        <div className="bg-[#F4F4F5] border border-gray-300 p-6 rounded-md flex flex-col items-center text-center">
          <img
            src="https://picsum.photos/400/300?random=1"
            alt="Feature 1"
            className="w-full h-60 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-semibold text-black mt-4">
            Content Creation
          </h3>
          <p className="text-md text-[#71717A] mt-2">
            Personalized marketing content designed for your specific needs.
          </p>
        </div>
        <div className="bg-[#F4F4F5] border border-gray-300 p-6 rounded-md flex flex-col items-center text-center">
          <img
            src="https://picsum.photos/400/300?random=2"
            alt="Feature 2"
            className="w-full h-60 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-semibold text-black mt-4">
            Multi-Platform Compatibility
          </h3>
          <p className="text-md text-[#71717A] mt-2">
            Content optimized for platforms like Twitter, Reddit, LinkedIn, and
            more.
          </p>
        </div>
        <div className="bg-[#F4F4F5] border border-gray-300 p-6 rounded-md flex flex-col items-center text-center">
          <img
            src="https://picsum.photos/400/300?random=3"
            alt="Feature 3"
            className="w-full h-60 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-semibold text-black mt-4">
            Time-Saving Automation
          </h3>
          <p className="text-md text-[#71717A] mt-2">
            Instantly generate 30 days of content with minimal effort.
          </p>
        </div>
        <div className="bg-[#F4F4F5] border border-gray-300 p-6 rounded-md flex flex-col items-center text-center">
          <img
            src="https://picsum.photos/400/300?random=4"
            alt="Feature 4"
            className="w-full h-60 object-cover mb-4 rounded"
          />
          <h3 className="text-xl font-semibold text-black mt-4">
            Engagement Optimization
          </h3>
          <p className="text-md text-[#71717A] mt-2">
            Content that enhances visibility and connects with your target
            audience.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
