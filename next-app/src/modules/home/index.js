import CoffeeChat from "@components/CoffeeChat";
import SEO from "./SEO";
import TechnologySection from "./TechnologySection";
import { ServicesSection } from "./ServicesSection";
import PageTitle from "@components/PageTitle";

const HomePage = () => {
  return (
    <>
      <PageTitle
        title="Place where design meets purpose."
        description={`UX/UI designer form Split, Croatia.\nI help companies build meaningful product and service through problem-solving and user oriented design.`}
        withImage={true}
      />
      <ServicesSection />
      <TechnologySection />
      <CoffeeChat />
      <SEO />
    </>
  );
};

export default HomePage;
