import Footer from "@/components/landing_page/Footer";
import Navbar from "@/components/landing_page/Navbar";

const PrivacyPage = () => {
  // Example last update date
  const lastUpdateDate = "June 30, 2024";
  return (
    <main className="bg-white">
      <Navbar />
      <main>
        <div className="container mx-auto px-4 pt-24 md:pt-32 pb-12">
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-4xl font-semibold text-black">
              Privacy Policy
            </h1>
            <p className="text-md text-black font-medium mt-4">
              Last updated: {lastUpdateDate}
            </p>
            <div className="prose mt-4 max-w-4xl flex flex-col gap-5">
              <p className="text-black font-medium">Introduction</p>
              <p className="text-black font-normal">
                StartupGrow AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting
                your privacy. This Privacy Policy outlines how we collect, use,
                and protect your information when you use our services.
              </p>

              <p className="text-black font-medium">Information We Collect</p>
              <p className="text-black font-normal">
                Personal Information: We may collect personal information such
                as your name, email address, and payment details when you sign
                up for our services.
              </p>
              <p className="text-black font-normal">
                Usage Data: We collect information on how you interact with our
                services, including IP addresses, browser types, and pages
                visited.
              </p>

              <p className="text-black font-medium">
                How We Use Your Information
              </p>
              <p className="text-black font-normal">
                Service Provision: To provide and improve our services, process
                transactions, and communicate with you.
              </p>
              <p className="text-black font-normal">
                Analytics: To analyze usage patterns and improve user
                experience.
              </p>
              <p className="text-black font-normal">
                Marketing: To send promotional materials, unless you opt out.
              </p>

              <p className="text-black font-medium">
                Data Sharing and Disclosure
              </p>
              <p className="text-black font-normal">
                We do not sell your personal information to third parties. We
                may share your information with:
              </p>
              <p className="text-black font-normal">
                Service Providers: Trusted third parties who assist in operating
                our services.
              </p>
              <p className="text-black font-normal">
                Legal Compliance: When required by law or to protect our rights
                and users.
              </p>

              <p className="text-black font-medium">Data Security</p>
              <p className="text-black font-normal">
                We implement appropriate technical and organizational measures
                to protect your data against unauthorized access, alteration, or
                destruction.
              </p>

              <p className="text-black font-medium">Your Rights</p>
              <p className="text-black font-normal">
                Access: You can request access to your personal information.
              </p>
              <p className="text-black font-normal">
                Correction: You have the right to request correction of
                inaccurate data.
              </p>
              <p className="text-black font-normal">
                Deletion: You can request deletion of your personal information,
                subject to legal obligations.
              </p>

              <p className="text-black font-medium">Cookies</p>
              <p className="text-black font-normal">
                We use cookies to enhance your experience. You can manage cookie
                preferences through your browser settings.
              </p>

              <p className="text-black font-medium">Third-Party Links</p>
              <p className="text-black font-normal">
                Our services may contain links to third-party websites. We are
                not responsible for their privacy practices.
              </p>

              <p className="text-black font-medium">Changes to This Policy</p>
              <p className="text-black font-normal">
                We may update this Privacy Policy from time to time. We will
                notify you of any changes by posting the new policy on our
                website.
              </p>

              <p className="text-black font-medium">Contact Us</p>
              <p className="text-black font-normal">
                If you have any questions or concerns about this Privacy Policy,
                please contact us at{" "}
                <a
                  className="text-[#FF033E] underline"
                  href="mailto:diyanshu0360@gmail.com"
                >
                  here.
                </a>
              </p>

              <p className="text-black font-medium">Consent</p>
              <p className="text-black font-normal">
                By using our services, you consent to this Privacy Policy.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </main>
  );
};

export default PrivacyPage;
