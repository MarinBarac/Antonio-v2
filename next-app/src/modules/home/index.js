import CoffeeChat from "@components/CoffeeChat";
import SEO from "./SEO";
import HeroSection from "./HeroSection";
import TechnologySection from "./TechnologySection";
import { ServicesSection } from "./ServicesSection";

const HomePage = () => {

  return (
    <>
      <HeroSection />
      <ServicesSection />
      <TechnologySection />
      <CoffeeChat />
      <SEO />
    </>
  );
};

export default HomePage;
