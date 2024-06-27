import React from "react";

const HeroSection: React.FC = () => {
  const ctaText = "Get Started";
  const demoVideoUrl = "https://www.w3schools.com/html/mov_bbb.mp4";

  return (
    <section className="bg-white pb-10 pt-28 md:pt-40 px-4 md:px-8">
      <div className="container mx-auto flex flex-col items-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold md:w-2/3 mb-3 md:mb-5 text-black">
          Lorem ipsum dolor sit.
        </h1>
        <p className="text-md md:text-xl text-[#71717A] text-center md:w-4/6 mb-3 md:mb-5">
          Discover amazing features and great user experience. Lorem ipsum dolor
          sit amet consectetur adipisicing elit. Consectetur, eius?
        </p>
        <button className="bg-[#FF033E] text-white rounded-md text-lg font-medium flex items-center justify-center h-10 px-16">
          {ctaText}
        </button>
        <video className="w-full md:w-3/4 rounded-lg shadow-lg mt-8 md:mt-12" controls>
          <source src={demoVideoUrl} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default HeroSection;
