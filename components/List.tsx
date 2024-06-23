"use client";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { ImSpinner8 } from "react-icons/im";
import Image from "next/image";

export default function List({
  name,
  status,
  subtitle,
  logo,
  isOpen,
  onClick,
}: any) {
  const getStatusIcon = () => {
    if (status === "loading") {
      return (
        <ImSpinner8
          size={16}
          className="animate-spin text-[#71717A] mr-[2px]"
        />
      );
    } else if (status == "") {
      return null;
    }
    return <IoCheckmarkCircleOutline color="#FF033E" size={20} />;
  };

  const getLogo = () => {
    if (logo) {
      return <Image src={logo} alt="" className="w-8 h-8 rounded-full" />;
    }
    return (
      <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
        <span>{name.charAt(0)}</span>
      </div>
    );
  };

  return (
    <div className="">
      <div
        className="px-3 sm:px-4 py-2 sm:py-3 flex justify-between items-center cursor-pointer bg-[#F4F4F5] rounded-md"
        onClick={onClick}
      >
        <div className="flex items-center">
          <div>{getLogo()}</div>
          <div className="ml-3 sm:ml-4">
            <span className="text-sm sm:text-md text-black font-medium">
              {name}
            </span>
            <div className="text-xs sm:text-sm text-[#71717A]">{subtitle}</div>
          </div>
        </div>
        <div>{getStatusIcon()}</div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
        </div>
      )}
    </div>
  );
}
