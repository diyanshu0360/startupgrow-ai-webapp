"use client";
import redditImg from "@/public/reddit-logo.png";
import hackerNewsImg from "@/public/hacker-news-logo.png";
import productHuntImg from "@/public/product-hunt-logo.png";
import linkedinImg from "@/public/Linkedin-logo.png";
import twitterImg from "@/public/x-logo.png";
import mailImg from "@/public/mail-icon.png";
import List from "@/components/List";
import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const cards = [
  {
    name: "Product Descriptions",
    status: "",
    subtitle: "Short descriptions of products",
    logo: null,
    is_selected: false,
    response: [],
  },
  {
    name: "Reddit Posts",
    status: "loading",
    subtitle: "Trending posts on Reddit",
    logo: redditImg,
    is_selected: false,
    response: [],
  },
  {
    name: "Hacker-News Posts",
    status: "loading",
    subtitle: "Top news from Hacker News",
    logo: hackerNewsImg,
    is_selected: false,
    response: [],
  },
  {
    name: "Product-Hunt Descriptions",
    status: "loading",
    subtitle: "Descriptions from Product Hunt",
    logo: productHuntImg,
    is_selected: false,
    response: [],
  },
  {
    name: "Product-Hunt Comments",
    status: "loading",
    subtitle: "Comments on Product Hunt",
    logo: productHuntImg,
    is_selected: false,
    response: [],
  },
  {
    name: "LinkedIn Posts",
    status: "loading",
    subtitle: "Recent posts on LinkedIn",
    logo: linkedinImg,
    is_selected: false,
    response: [],
  },
  {
    name: "Twitter Posts",
    status: "success",
    subtitle: "Latest tweets",
    logo: twitterImg,
    is_selected: false,
    response: [],
  },
  {
    name: "Blogs",
    status: "loading",
    subtitle: "Blog articles",
    logo: null,
    is_selected: false,
    response: [],
  },
  {
    name: "Headlines",
    status: "loading",
    subtitle: "Latest headlines",
    logo: null,
    is_selected: false,
    response: [],
  },
  {
    name: "Cold Emails",
    status: "loading",
    subtitle: "Templates for cold emails",
    logo: mailImg,
    is_selected: false,
    response: [],
  },
  {
    name: "Cold Messages",
    status: "loading",
    subtitle: "Templates for cold messages",
    logo: null,
    is_selected: false,
    response: [],
  },
  {
    name: "Free-Tool Ideas",
    status: "loading",
    subtitle: "Ideas for free tools",
    logo: null,
    is_selected: false,
    response: [],
  },
];

export default function Result() {
  const [cardDetail, setCardDetail] = useState<any>(cards);
  const [selectedCard, setSelectedCard] = useState<any>(0);
  const router = useRouter();
  const { data: session } = useSession();

  const params = useParams<{ id: string }>();

  const handleCardClick = (index: any) => {
    let updatedArray = [...cardDetail];
    setSelectedCard(index);
    updatedArray.map((item, indexNum) => {
      if (index == indexNum) {
        item.is_selected = !cardDetail[index].is_selected;
      }
    });
    setCardDetail(updatedArray);
  };

  const fetchProductData = async (productType: any) => {
    const userEmail = session?.user?.email;
    let updatedArray = [...cardDetail];
    updatedArray.map((item, indexNum) => {
      if (item.name == productType) {
        item.status = "loading";
      }
    });
    setCardDetail(updatedArray);
    try {
      const response = await fetch("/api/content", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userEmail: userEmail,
          productId: params.id,
          productType: productType,
        }),
      });

      if (response.ok) {
        const { textResponse } = await response.json();
        let updatedArray = [...cardDetail];
        updatedArray.map((item, indexNum) => {
          if (item.name == productType) {
            item.response = [...textResponse];
            item.status = "success";
          }
        });
        setCardDetail(updatedArray);
      } else {
        console.error("Failed to save product");
        let updatedArray = [...cardDetail];
        updatedArray.map((item, indexNum) => {
          if (item.name == productType) {
            item.status = "";
          }
        });
        setCardDetail(updatedArray);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      let updatedArray = [...cardDetail];
      updatedArray.map((item, indexNum) => {
        if (item.name == productType) {
          item.status = "";
        }
      });
      setCardDetail(updatedArray);
    }
  };

  const callMultipleApis = () => {
    fetchProductData(cardDetail[0].name);
    fetchProductData(cardDetail[1].name);
    // fetchProductData(cardDetail[2].name);
    // fetchProductData(cardDetail[3].name);
    // fetchProductData(cardDetail[4].name);
    // fetchProductData(cardDetail[5].name);
    // fetchProductData(cardDetail[6].name);
    // fetchProductData(cardDetail[7].name);
    // fetchProductData(cardDetail[8].name);
    // fetchProductData(cardDetail[9].name);
    // fetchProductData(cardDetail[10].name);
    // fetchProductData(cardDetail[11].name);
    // fetchProductData(cardDetail[12].name);
  };

  useEffect(() => {
    if (session?.user?.email) {
      callMultipleApis();
    }
  }, [session]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="md:flex flex-1 overflow-hidden">
        <div className="flex flex-row mx-4 mt-4 justify-end md:hidden">
          <button className="h-8 w-28 bg-[#FF033E] rounded-md">
            <span className="text-white font-medium text-sm">Download Pdf</span>
          </button>
        </div>
        <div className="w-full md:w-1/2 p-4 overflow-y-auto flex flex-col gap-2">
          {cardDetail.map((card: any, index: number) => (
            <List
              key={index}
              name={card.name}
              status={card.status}
              subtitle={card.subtitle}
              logo={card.logo}
              isOpen={card.is_selected}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
        <div className="hidden md:block w-full md:w-1/2 p-4 overflow-y-auto">
          <div className="flex flex-row justify-end">
            <button className="h-9 w-32 bg-[#FF033E] rounded-md">
              <span className="text-white font-medium text-sm">
                Download Pdf
              </span>
            </button>
          </div>
          <div>
            <h2 className="text-xl font-bold">
              {cardDetail[selectedCard].name}
            </h2>
            <p className="mt-2">{cardDetail[selectedCard].subtitle}</p>
            <p className="mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
