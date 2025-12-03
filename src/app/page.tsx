import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import GroupedFeatures from "@/components/sections/grouped-features";
import IntegrationsSection from "@/components/sections/integrations";
import AboutSection from "@/components/sections/about";
import SupportSection from "@/components/sections/support";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFFFF0] via-[#F0F8FF] to-[#FFFFF0]">
      <Header />
      <HeroSection />
      <GroupedFeatures />
      <IntegrationsSection />
      <AboutSection />
      <SupportSection />
      <Footer />
    </div>
  );
}