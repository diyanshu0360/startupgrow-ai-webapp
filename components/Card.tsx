"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface CardProps {
  cardNo?: number;
  productName?: string;
  productUrl?: string;
  isAddCard?: boolean;
  creditLeft?: any;
}

const Card: React.FC<CardProps> = ({
  productName,
  productUrl,
  isAddCard,
  creditLeft,
  cardNo,
}) => {
  const router = useRouter();

  const handleAddCardClick = () => {
    if (isAddCard) {
      if (creditLeft > 0) {
        router.push("/dashboard/create");
      } else {
        router.push("/dashboard/pricing");
      }
    } else {
      router.push(`/dashboard/result/${cardNo}`);
    }
  };

  return (
    <div
      className={`border z-0 bg-[#F4F4F5] border-gray-300 min-h-32 p-4 rounded transition cursor-pointer ${
        isAddCard ? "bg-[#F4F4F5] flex items-center justify-center" : ""
      }`}
      onClick={() => handleAddCardClick()}
    >
      {isAddCard ? (
        <p className="text-md font-medium ">+ New Product</p>
      ) : (
        <div>
          <p className="text-md font-medium mb-1">{productName}</p>
          {/* <p className="text-sm font-normal mb-3"> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum
            dolor sit.
          </p>*/}
          <Link href={`${productUrl}`} target={"_blank"}>
            <span className="font-medium flex flex-col justify-center items-center z-10 text-sm text-white h-6 w-16 bg-[#FF033E] rounded-md">
              Visit
            </span>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Card;
