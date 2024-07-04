"use client";
import { useState } from "react";
import Image from "next/image";
import { useSession, signOut } from "next-auth/react";
import logoImg from "@/public/logo.png";
import { FaSignOutAlt, FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { ImSpinner8 } from "react-icons/im";
import userIcon from "@/public/user-icon.png";
import { trackBtnEvent } from "@/lib/mixpanel";

export default function Header() {
  const { data: session } = useSession();
  const avtarImg = session?.user?.image ? session.user.image : userIcon;

  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleLogout = async () => {
    try {
      setLoading(true);
      await signOut();
    } catch (error) {
      console.error("Failed to logout:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <header className="flex h-16 items-center justify-between px-4 md:px-6 py-3 bg-white text-black border-b-[1px] border-gray-300 sticky top-0 z-10">
      <div
        onClick={() => {
          trackBtnEvent("Dashboard")
          router.replace("/dashboard");
        }}
        className="flex flex-row items-center gap-1 cursor-pointer"
      >
        <Image className="object-contain w-8 md:w-9" src={logoImg} alt="Logo" />
        <div className="font-semibold text-lg md:text-xl">StartupGrow AI</div>
      </div>
      <div className="relative flex items-center space-x-2 md:space-x-4">
        {session && (
          <div
            className="flex items-center space-x-2 cursor-pointer"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <img
              src={avtarImg}
              alt="User Avatar"
              className="rounded-full w-8 h-8"
            />
            <span className="hidden sm:block font-medium text-sm sm:text-md">
              @{session.user?.name}
            </span>
            <FaChevronDown className="hidden sm:block" size={14} />
          </div>
        )}
      </div>
      {dropdownOpen && (
        <div className="absolute top-[56px] right-3 bg-white border border-gray-300 rounded-md shadow-md min-w-48 z-[9999]">
          <div className="px-4 py-3">
            <p className="font-medium break-words text-sm">
              {session?.user?.email}
            </p>
          </div>
          <div className="border-t border-gray-300">
            <a
              href="/privacy-policy"
              className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium"
            >
              Terms & Conditions
            </a>
            <a
              href="/refund"
              className="block px-4 py-2 hover:bg-gray-100 text-sm font-medium"
            >
              Refund & Cancellation
            </a>
            <div className="flex-grow m-2">
              <button
                onClick={handleLogout}
                disabled={loading}
                className="flex items-center justify-center w-full h-9 bg-[#FF033E] text-white rounded-md text-sm font-medium"
              >
                {loading ? (
                  <ImSpinner8 className="animate-spin text-white h-full" />
                ) : (
                  <>
                    <FaSignOutAlt className="mr-2 text-white" />
                    Logout
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
