import Footer from "@/components/landing_page/Footer";
import Navbar from "@/components/landing_page/Navbar";

const RefundPage = () => {
  // Example last update date
  const lastUpdateDate = "June 30, 2024";
  return (
    <main className="bg-white">
      <Navbar />
      <main>
        <div className="container mx-auto px-4 pt-24 md:pt-32 pb-12">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-black">
              Refund and Cancellation Policy
            </h1>
            <p className="text-md text-black font-medium mt-4">
              Last updated: {lastUpdateDate}
            </p>
            <div className="prose mt-4 max-w-4xl flex flex-col gap-5">
              <p className="text-black font-medium">Overview</p>
              <p className="text-black font-normal">
                At StartupGrow AI, we use LemonSqueezy as our payment processor.
                This policy outlines our stance on refunds and cancellations.
              </p>

              <p className="text-black font-medium">Refund Policy</p>
              <p className="text-black font-normal">
                Non-Refundable Purchases: All purchases of credits are final and
                non-refundable. Due to the nature of credit usage, we do not
                offer refunds.
              </p>

              <p className="text-black font-medium">Cancellation Policy</p>
              <p className="text-black font-normal">
                One-Time Purchases: Since credits are purchased on a one-time
                basis, cancellations are not applicable. Unused credits remain
                in your account until used.
              </p>

              <p className="text-black font-medium">Contact Us</p>
              <p className="text-black font-normal">
                For any questions or concerns regarding this policy, please
                contact us at{" "}
                <a
                  className="text-[#FF033E] underline"
                  href="mailto:diyanshu0360@gmail.com"
                >
                  here.
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </main>
  );
};

export default RefundPage;
