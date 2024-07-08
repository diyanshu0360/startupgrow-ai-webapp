import Footer from "@/components/landing_page/Footer";
import Navbar from "@/components/landing_page/Navbar";

const TermsAndConditonPage = () => {
  const lastUpdateDate = "June 30, 2024";
  return (
    <main className="bg-white">
      <Navbar />
      <main>
        <div className="container mx-auto px-4 pt-24 md:pt-32 pb-12">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-black">
              Terms and Conditions
            </h1>
            <p className="text-md text-black font-medium mt-4">
              Last updated: {lastUpdateDate}
            </p>
            <div className="prose mt-4 max-w-4xl flex flex-col gap-5">
              <p className="text-black font-medium">Acceptance of Terms</p>
              <p className="text-black font-normal">
                By accessing and using StartupGrow AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;)
                services, you agree to comply with these Terms and Conditions.
                If you do not agree, please do not use our services.
              </p>

              <p className="text-black font-medium">Use of Services</p>
              <p className="text-black font-normal">
                Eligibility: You must be at least 18 years old to use our
                services.
              </p>
              <p className="text-black font-normal">
                Account Security: You are responsible for maintaining the
                confidentiality of your account and password.
              </p>

              <p className="text-black font-medium">Services Provided</p>
              <p className="text-black font-normal">
                StartupGrow AI provides tools for generating marketing content
                based on your website URL. All content generated is for
                informational purposes only.
              </p>

              <p className="text-black font-medium">Payment and Credits</p>
              <p className="text-black font-normal">
                Fees: Payment for credits is required before using our services.
                All fees are non-refundable.
              </p>
              <p className="text-black font-normal">
                Credits: Each credit entitles you to generate 30 days of
                marketing content for one product.
              </p>

              <p className="text-black font-medium">User Conduct</p>
              <p className="text-black font-normal">
                Prohibited Activities: You agree not to use our services for any
                illegal or unauthorized purpose. You must not violate any laws
                in your jurisdiction.
              </p>

              <p className="text-black font-medium">Intellectual Property</p>
              <p className="text-black font-normal">
                All content and materials provided by StartupGrow AI are owned
                by us and protected by intellectual property laws. You may not
                reproduce, distribute, or create derivative works without our
                permission.
              </p>

              <p className="text-black font-medium">Disclaimer of Warranties</p>
              <p className="text-black font-normal">
                Our services are provided &quot;as is&quot; without any warranties of any
                kind. We do not guarantee the accuracy or reliability of the
                content generated.
              </p>

              <p className="text-black font-medium">Limitation of Liability</p>
              <p className="text-black font-normal">
                In no event shall StartupGrow AI be liable for any indirect,
                incidental, special, or consequential damages arising from the
                use of our services.
              </p>

              <p className="text-black font-medium">Indemnification</p>
              <p className="text-black font-normal">
                You agree to indemnify and hold StartupGrow AI harmless from any
                claims, losses, or damages arising from your use of our
                services.
              </p>

              <p className="text-black font-medium">Modifications to Terms</p>
              <p className="text-black font-normal">
                We reserve the right to modify these Terms and Conditions at any
                time. We will notify you of any changes by posting the new terms
                on our website.
              </p>

              <p className="text-black font-medium">Contact Us</p>
              <p className="text-black font-normal">
                For any questions regarding these Terms and Conditions, please
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

export default TermsAndConditonPage;
