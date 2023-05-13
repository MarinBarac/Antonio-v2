import CoffeeChat from "@components/CoffeeChat";
import SEO from "./SEO";
import HeroSection from "./HeroSection";
import TechnologySection from "./TechnologySection";
import WorkSection from "./WorkSection";
import { AreaOfExpertise } from "@components/AreaOfExpertise";

const HomePage = () => {

  return (
    <>
      <HeroSection />
      <AreaOfExpertise title='Area of expertise'/>
      <TechnologySection />
      <CoffeeChat />
      <SEO />
    </>
  );
};

export default HomePage;
