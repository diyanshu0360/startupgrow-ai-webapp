"use client";
import React, { useState, useEffect } from "react";
import Card from "@/components/Card";
import Header from "@/components/Header";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Dashboard = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const [userData, setUserData] = useState<any>(null);
  const [allProduct, setAllProduct] = useState<any>(null);

  const fetchUserData = async () => {
    const userEmail = session?.user?.email;
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail: userEmail }),
      });

      if (response.ok) {
        const { userData } = await response.json();
        setUserData(userData);
      } else {
        console.error("Failed to save product");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  const fetchProductData = async () => {
    const userEmail = session?.user?.email;
    try {
      const response = await fetch("/api/history/allproducts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userEmail: userEmail }),
      });

      if (response.ok) {
        const { allProductArray } = await response.json();
        setAllProduct(allProductArray);
      } else {
        console.error("Failed to save product");
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    if (session?.user?.email) {
      fetchUserData();
      fetchProductData();
    }
  }, [session]);

  return (
    <div>
      <Header />
      <div className="flex flow-row justify-end mx-4 md:mx-10 mt-4 gap-2">
        <div className="h-8 flex-grow sm:flex-grow-0 sm:px-3 bg-white flex flex-row rounded-md border border-gray-300 justify-center items-center">
          {userData ? (
            <p className="text-black font-medium text-sm">
              {userData.productCredits} credit
              {userData.productCredits !== 1 ? "s" : ""} Left
            </p>
          ) : (
            <p className="text-black font-medium text-sm">Loading...</p>
          )}
        </div>
        <button
          onClick={() => router.push("/dashboard/pricing")}
          className="h-8 w-36 bg-[#FF033E] rounded-md justify-center items-center"
        >
          <span className="text-white font-medium text-sm">
            Buy More Credits
          </span>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-4 mb-4 md:mb-10 mx-4 md:mx-10">
        <Card creditLeft={userData?.productCredits} isAddCard={true} />
        {allProduct &&
          allProduct.map((product: any, index: any) => (
            <Card
              key={index}
              creditLeft={userData?.productCredits}
              cardNo={product.productId}
              productName={product.productName}
              productUrl={product.productUrl}
            />
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
