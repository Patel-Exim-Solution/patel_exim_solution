import AboutUsInfoDetails from "@/components/AboutUsInfoDetails";
import ChooseUs from "@/components/ChooseUsSection";
import ContactUsForm from "@/components/ContactUsForm";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductSection";
import TestimonialLIst from "@/components/TestimonialList";

export default function Home() {
  return (
    <>
    <Navbar />
    <HeroSection />
    <AboutUsInfoDetails />
    <ProductsSection />
    <ChooseUs />
    <TestimonialLIst />
    <ContactUsForm />
    </>
  );
}
