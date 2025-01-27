"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { useSession } from "next-auth/react";
import { ImSpinner8 } from "react-icons/im";

export default function Home() {
  const [productName, setProductName] = useState("");
  const [productUrl, setProductUrl] = useState("");
  const [urlVerified, setUrlVerified] = useState<any>(null);
  const [productNameEmpty, setProductNameEmpty] = useState<any>(null);
  const [productUrlEmpty, setProductUrlEmpty] = useState<any>(null);
  const [contentOption, setContentOption] = useState("");
  const [contentOptionEmpty, setContentOptionEmpty] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const { data: session }: any = useSession();
  const userEmail = session?.user.email;
  const router = useRouter();

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
        if (userData.productCredits == 0) {
          router.push("/dashboard/pricing");
        }
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
    }
  }, [session]);

  const handleGenerate = async () => {
    if (!productName) {
      setProductNameEmpty(true);
      return;
    }

    if (!productUrl) {
      setProductUrlEmpty(true);
      return;
    }

    if (!(productUrl.startsWith("http") || productUrl.startsWith("https"))) {
      setUrlVerified(true);
      return;
    }

    if (!contentOption) {
      setContentOptionEmpty(true);
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/history/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail,
          productName,
          productUrl,
          contentOption,
        }),
      });

      if (response.ok) {
        const { productId } = await response.json();
        if (productId == false) {
          router.push(`/dashboard/pricing`);
        } else {
          router.push(`/dashboard/result/${productId}`);
        }
      } else {
        console.error("Failed to save product");
      }
    } catch (error) {
      console.error("Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen">
      <Header />
      <div className="absolute inset-x-0 top-16 h-[700px] rotate-180 text-gray-500/20 opacity-70  [mask-image:linear-gradient(to_bottom,transparent,white)] -z-10">
        <svg
          className="absolute inset-0 h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="grid-pattern"
              width="32"
              height="32"
              patternUnits="userSpaceOnUse"
              x="50%"
              y="100%"
              patternTransform="translate(0 -1)"
            >
              <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)"></rect>
        </svg>
      </div>
      <div className="min-h-[calc(100%_-_4rem)] flex items-center justify-center">
        <div className="max-w-[32rem] w-full items-center justify-center bg-[#F4F4F5] p-8 py-12 rounded-lg">
          <div className="mb-4">
            <label
              className="block text-black text-md font-medium mb-2"
              htmlFor="productName"
            >
              Product Name:
            </label>
            <input
              id="productName"
              placeholder="Enter Product Name"
              value={productName}
              onChange={(e) => {
                setProductNameEmpty(false);
                setProductName(e.target.value);
              }}
              className="w-full py-2 px-3 text-[#71717A] leading-tight border-[#71717A] focus:border-[#FF033E] focus:border-1 rounded-md outline-none focus:outline-none"
            />
            {productNameEmpty && (
              <p className="text-[#FF033E] text-sm mt-2">
                Please enter product name!
              </p>
            )}
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-md font-medium mb-2"
              htmlFor="productUrl"
            >
              Website URL:
            </label>
            <div className="flex items-center">
              <input
                id="productUrl"
                placeholder="Enter Website URL"
                value={productUrl}
                onChange={(e) => {
                  setProductUrlEmpty(false);
                  setUrlVerified(false);
                  setProductUrl(e.target.value);
                }}
                className="w-full py-2 px-3 text-[#71717A] leading-tight border-[#71717A] focus:border-[#FF033E] focus:border-1 rounded-md outline-none focus:outline-none"
              />
            </div>
            {urlVerified ? (
              <p className="text-[#FF033E] text-sm mt-2">Invalid URL</p>
            ) : productUrlEmpty ? (
              <p className="text-[#FF033E] text-sm mt-2">
                Please enter product url!
              </p>
            ) : null}
          </div>
          <div className="mb-4">
            <label
              className="block text-black text-md font-medium mb-2"
              htmlFor="contentOption"
            >
              Select Content:
            </label>
            <select
              id="contentOption"
              value={contentOption}
              onChange={(e) => {
                setContentOptionEmpty(false);
                setContentOption(e.target.value);
              }}
              className="w-full py-2 px-3 text-[#71717A] leading-tight border-[#71717A] focus:border-[#FF033E] focus:border-1 rounded-md outline-none focus:outline-none"
            >
              <option className="text-[#71717A]" value="" disabled selected>
                Select Content:
              </option>
              <option className="text-[#71717A]" value="productLaunch">
                30 Days Product Launch
              </option>
              {/* <option
                className="text-[#71717A]"
                value="generalMonthly"
                disabled
              >
                General Monthly Content
              </option> */}
            </select>
            {contentOptionEmpty && (
              <p className="text-[#FF033E] text-sm mt-2">
                Please select a content option!
              </p>
            )}
          </div>
          <div className="flex justify-center pt-4">
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="bg-[#FF033E] text-white font-medium h-10 w-44 rounded-md flex justify-center items-center"
            >
              {loading ? (
                <ImSpinner8 className="animate-spin text-white h-full" />
              ) : (
                "Generate"
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
