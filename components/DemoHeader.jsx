"use client";
import Image from "next/image";
import logoImg from "@/public/logo.png";
import { useRouter } from "next/navigation";
import { trackBtnEvent } from "@/lib/mixpanel";

export default function Header() {
  const router = useRouter();

  return (
    <header className="flex h-16 items-center justify-between px-4 md:px-6 py-3 bg-white text-black border-b-[1px] border-gray-300 sticky top-0 z-10">
      <div
        onClick={() => router.replace("/")}
        className="flex flex-row items-center gap-1 cursor-pointer"
      >
        <Image className="object-contain w-8 md:w-9" src={logoImg} alt="Logo" />
        <div className="font-semibold text-lg md:text-xl">StartupGrow AI</div>
      </div>
    </header>
  );
}
