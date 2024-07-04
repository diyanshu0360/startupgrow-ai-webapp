import { IoMdCheckmark } from "react-icons/io";
import { useRouter } from "next/navigation";
import { trackBtnEvent } from "@/lib/mixpanel";

export default function Pricing() {
  const router = useRouter();

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
      onPressLink: "/dashboard",
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
      onPressLink: "/dashboard",
    },
  ];

  const renderCard = (card, index) => (
    <div
      className={`relative py-8 px-4 flex flex-row justify-center items-center ${
        index == 0 ? "md:justify-end" : "md:justify-start"
      }`}
      key={index}
    >
      <div className="overflow-hidden shadow-lg p-4 border rounded-md w-full sm:w-96">
        {card.popular && (
          <span className="bg-[#F4F4F5] text-[#FF033E] text-[11px] font-bold px-3 py-1 rounded-full absolute top-[18px] border border-[#FF033E]">
            Most Popular
          </span>
        )}
        <div className="px-4 py-2">
          <div className="font-semibold text-md mb-1 md:mb-3 text-[#71717A]">
            {card.title}
          </div>
          <div className="text-[#FF033E] text-3xl font-bold mb-2 md:mb-4">
            {card.discounted}{" "}
            <span className="text-[#71717A] line-through text-3xl font-medium">
              {card.price}
            </span>{" "}
            <span className="text-[#71717A] font-medium text-sm">
              /one time
            </span>
          </div>
          <div className="text-black text-sm font-normal mb-2 md:mb-4">
            {card.subtitle}
          </div>
          <div className="flex flex-col gap-1 md:gap-2 md:mb-5">
            {card.features.map((feature, i) => (
              <div className="flex flex-row gap-1 items-center" key={i}>
                <IoMdCheckmark size={16} />
                <p className="font-medium text-sm text-black">{feature}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          className="bg-[#FF033E] h-10 text-white rounded-md font-medium text-md w-full flex justify-center items-center mt-2 md:mt-4 cursor-pointer"
          onClick={() => {
            trackBtnEvent("Pricing");
            router.replace(card.onPressLink);
          }}
        >
          {card.button}
        </button>
      </div>
    </div>
  );

  return (
    <div
      className="bg-white flex items-center justify-center py-8"
      id="pricing"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-4 md:mb-8">
          {/* <div className="flex flex-row justify-center items-center mb-4">
            <span className="text-xs font-medium text-black bg-[#F4F4F5] flex flex-row justify-center items-center border-gray-300 h-6 border px-5 rounded-full">
              Pricing
            </span>
          </div> */}
          <h2 className="text-3xl md:text-4xl font-semibold text-black mt-4">
            Choose a Plan That Suits You
          </h2>
          <p className="text-md md:text-lg text-[#71717A] mt-2">
            Select the Perfect Package for Your Startup&apos;s Marketing Needs
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
          {cards.map((card, index) => renderCard(card, index))}
        </div>
      </div>
    </div>
  );
}
