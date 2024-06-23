"use client";
import React, { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { ImSpinner8 } from "react-icons/im";
import Image from "next/image";
import logoImg from "@/public/logo.png";

const NextLoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const { status: sessionStatus } = useSession();

  const handleLogin = () => {
    setLoading(true);
    signIn("google")
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    if (sessionStatus === "authenticated") {
      router.replace("/dashboard");
    }
  }, [sessionStatus, router]);

  return (
    <div className="flex h-screen flex-1 flex-col justify-center items-center bg-white p-8 sm:px-6 lg:px-8">
      <div className="flex flex-col items-center">
        <div className="flex items-center mb-4">
          <Image width={40} className="object-contain" src={logoImg} alt={""} />
          <h1 className="ml-2 text-3xl font-bold text-black">StartupGrow AI</h1>
        </div>
        <p className="mb-10 text-[#71717A] max-w-[500px] text-center font-medium text-md">
          Your AI-powered startup growth companion Lorem ipsum dolor, sit amet
          consectetur adipisicing elit.
        </p>
        {sessionStatus === "loading" || loading ? (
          <button className="flex sm:min-w-60 h-10 items-center border border-gray-300 justify-center gap-3 rounded-md bg-white text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
            <ImSpinner8 className="animate-spin text-[#FF033E] h-full" />
          </button>
        ) : (
          // sessionStatus !== "authenticated" && (
          <button
            onClick={() => handleLogin()}
            className="flex sm:min-w-60 h-10 items-center border border-gray-300 justify-center gap-3 rounded-md bg-white px-3 py-1.5 text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            <FcGoogle size={24} />
            <span className="text-md font-semibold leading-6">
              Login with Google
            </span>
          </button>
          // )
        )}
      </div>
    </div>
  );
};

export default NextLoginPage;
