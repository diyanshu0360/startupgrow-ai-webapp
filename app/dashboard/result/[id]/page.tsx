"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FaCopy, FaCheck } from "react-icons/fa";
import redditImg from "@/public/reddit-logo.png";
import hackerNewsImg from "@/public/hacker-news-logo.png";
import productHuntImg from "@/public/product-hunt-logo.png";
import linkedinImg from "@/public/Linkedin-logo.png";
import twitterImg from "@/public/x-logo.png";
import mailImg from "@/public/mail-icon.png";
import List from "@/components/List";
import Header from "@/components/Header";
import { jsPDF } from "jspdf";

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
    name: "Product-Hunt",
    status: "loading",
    subtitle: "Tagline, Description & Comment from Product Hunt",
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
  const [selectedCard, setSelectedCard] = useState(0);
  const [copyStatus, setCopyStatus] = useState<any>({});
  const router = useRouter();
  const { data: session } = useSession();
  const params = useParams();

  const handleCardClick = (index: number) => {
    let updatedArray = [...cardDetail];
    setSelectedCard(index);
    updatedArray.map((item, indexNum) => {
      if (index === indexNum) {
        item.is_selected = !cardDetail[index].is_selected;
      }
    });
    setCardDetail(updatedArray);
  };

  const fetchProductData = async (productType: any) => {
    const userEmail = session?.user?.email;
    let updatedArray = [...cardDetail];
    updatedArray.map((item) => {
      if (item.name === productType) {
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
        const { textResponse, pageNotFound, notAllowed } =
          await response.json();
        if (notAllowed) {
          router.replace("/dashboard/pricing");
        } else if (pageNotFound) {
          router.replace("/dashboard");
        } else {
          let updatedArray = [...cardDetail];
          updatedArray.map((item) => {
            if (item.name === productType) {
              item.response = [...textResponse];
              item.status = "success";
            }
          });
          setCardDetail(updatedArray);
        }
      } else {
        console.error("Failed to save product");
        let updatedArray = [...cardDetail];
        updatedArray.map((item) => {
          if (item.name === productType) {
            item.status = "";
          }
        });
        setCardDetail(updatedArray);
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      let updatedArray = [...cardDetail];
      updatedArray.map((item) => {
        if (item.name === productType) {
          item.status = "";
        }
      });
      setCardDetail(updatedArray);
    }
  };

  const callMultipleApis = async () => {
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
  };

  useEffect(() => {
    if (session?.user?.email) {
      callMultipleApis();
    }
  }, [session]);

  const handleCopy = (text: any, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus((prevState: any) => ({ ...prevState, [index]: true }));
      setTimeout(() => {
        setCopyStatus((prevState: any) => ({ ...prevState, [index]: false }));
      }, 3000);
    });
  };

  const generatePdf = () => {
    const doc = new jsPDF();
    let yOffset = 10;

    cardDetail.forEach((card: any) => {
      if (card.response.length > 0) {
        doc.setFontSize(16);
        doc.text(card.name, 10, yOffset);
        yOffset += 10;

        card.response.forEach((item: any, index: number) => {
          const newArray = item.split("\n");
          newArray.forEach((text: any) => {
            if (text.trim() !== "") {
              doc.setFontSize(12);
              doc.text(text, 10, yOffset);
              yOffset += 10;
              if (yOffset > 280) {
                doc.addPage();
                yOffset = 10;
              }
            }
          });
        });
        yOffset += 10;
      }
    });

    doc.save("responses.pdf");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="md:flex flex-1 overflow-hidden">
        <div className="flex flex-row mx-4 my-4 justify-end md:hidden">
          {/* <button
            onClick={generatePdf}
            className="h-8 w-28 bg-[#FF033E] rounded-md"
          >
            <span className="text-white font-medium text-sm">Download Pdf</span>
          </button> */}
        </div>
        <div className="w-full md:w-1/2 p-4 overflow-y-auto flex flex-col gap-2">
          {cardDetail.map((card: any, index: number) => (
            <List
              key={index}
              name={card.name}
              status={card.status}
              subtitle={card.subtitle}
              response={card.response}
              logo={card.logo}
              isOpen={card.is_selected}
              handleCopy={handleCopy}
              copyStatus={copyStatus}
              onClick={() => handleCardClick(index)}
            />
          ))}
        </div>
        <div className="hidden md:block w-full md:w-1/2 p-4 overflow-y-auto">
          <div className="flex flex-row justify-end">
            <button
              onClick={generatePdf}
              className="h-9 w-32 bg-[#FF033E] rounded-md"
            >
              <span className="text-white font-medium text-sm">
                Download Pdf
              </span>
            </button>
          </div>
          <div className="px-3 sm:px-4 py-2 sm:py-3 flex flex-col cursor-pointer bg-[#F4F4F5] rounded-md mt-4">
            <h2 className="text-xl font-bold">
              {cardDetail[selectedCard].name}
            </h2>
            <p className="mt-2">{cardDetail[selectedCard].subtitle}</p>
          </div>
          <div className="flex flex-col gap-2 mt-2">
            {cardDetail[selectedCard].response.map(
              (item: any, index: number) => {
                const newArray = item.split("\n");
                return (
                  <div
                    key={index}
                    className="px-3 sm:px-4 py-2 sm:py-3 flex justify-between items-center cursor-pointer bg-[#F4F4F5] rounded-md"
                  >
                    <div className="flex flex-col gap-2">
                      {newArray.map(
                        (text: any, textIndex: number) =>
                          text.trim() !== "" && (
                            <p className="text-md font-normal" key={textIndex}>
                              {text}
                            </p>
                          )
                      )}
                    </div>
                    <button
                      onClick={() => handleCopy(item, index)}
                      className="ml-2"
                    >
                      {copyStatus[index] ? (
                        <FaCheck className="text-red-500" />
                      ) : (
                        <FaCopy />
                      )}
                    </button>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
