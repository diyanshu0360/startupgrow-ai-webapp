import BenefitSection from "@/components/landing_page/BenefitSection";
import FAQSection from "@/components/landing_page/FAQSection";
import FeatureSection from "@/components/landing_page/FeatureSection";
import Footer from "@/components/landing_page/Footer";
import HeroSection from "@/components/landing_page/HeroSection";
import Navbar from "@/components/landing_page/Navbar";
import PricingSection from "@/components/landing_page/PricingSection";
import WaitlistSection from "@/components/landing_page/WaitlistSection";

export default function Home() {
  return (
    <main className="bg-white">
      <Navbar />
      <HeroSection />
      <BenefitSection />
      <FeatureSection />
      <PricingSection />
      <FAQSection />
      <WaitlistSection />
      <Footer />
    </main>
  );
}
