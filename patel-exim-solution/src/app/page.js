import AboutUsInfoDetails from "@/components/AboutUsInfoDetails";
import ChooseUs from "@/components/ChooseUsSection";
import ContactUsForm from "@/components/ContactUsForm";
import HeroSection from "@/components/HeroSection";
import ProductsSection from "@/components/ProductSection";
import TestimonialLIst from "@/components/TestimonialList";

const inReadyForProduction = false;

export default function Home() {
  return (
    <div className="home-page-container">
      <HeroSection />
      <AboutUsInfoDetails isFrom="home" />
      <ProductsSection isFrom="home" />
      <ChooseUs headerTitle="Why Choose Patel Exim Solution" />
      {inReadyForProduction ? <TestimonialLIst /> : null}
      <ContactUsForm isFrom="home" />
    </div>
  );
}
