import Header from "@/components/sections/header";
import HeroSection from "@/components/sections/hero";
import TestimonialsGrid from "@/components/sections/testimonials-grid";
import FeaturesInteractive from "@/components/sections/features-interactive";
import BenefitsCards from "@/components/sections/benefits-cards";
import DarkModeFeature from "@/components/sections/dark-mode-feature";
import UserReviewsSection from "@/components/sections/user-reviews";
import RatingsCta from "@/components/sections/ratings-cta";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-[#FFFFF0] via-[#F0F8FF] to-[#FFFFF0]">
      <Header />
      <HeroSection />
      <TestimonialsGrid />
      <FeaturesInteractive />
      <BenefitsCards />
      <DarkModeFeature />
      <UserReviewsSection />
      <RatingsCta />
      <Footer />
    </div>
  );
}