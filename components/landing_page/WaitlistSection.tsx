import React from "react";

const WaitlistSection: React.FC = () => {
  return (
    <section className="pt-8 pb-12 md:pt-20 md:pb-20 bg-white">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-4 flex flex-col items-center">
            {/* <span className="text-xs font-medium text-black bg-[#F4F4F5] flex flex-row justify-center items-center border-gray-300 h-6 border px-5 rounded-full">
              Waitlist
            </span> */}
            <h2 className="text-3xl md:text-4xl font-semibold text-black mt-4 w-3/4">
              Launch Marketing Content & Growth Marketing Content for 30 Days
            </h2>
            <p className="text-md md:text-lg text-[#71717A] mt-2">
              Create and publish marketing content for your startup with our
              easy.
            </p>
          </div>

          {/* <div className="flex flex-wrap gap-3 justify-center">
            <div className="text-sm font-normal text-black flex flex-row justify-center items-center h-9 border w-32 rounded-md">
              Feature 1
            </div>
            <div className="text-sm font-normal text-black flex flex-row justify-center items-center h-9 border w-32 rounded-md">
              Feature 2
            </div>
            <div className="text-sm font-normal text-black flex flex-row justify-center items-center h-9 border w-32 rounded-md">
              Feature 3
            </div>
          </div> */}

          {/* Button Section */}
          <div className="flex flex-row justify-center items-center mt-6 md:mt-8">
            <button className="bg-[#FF033E] text-white rounded-md text-md font-medium flex items-center justify-center h-9 w-48">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WaitlistSection;
