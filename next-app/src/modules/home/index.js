import CoffeeChat from "@components/CoffeeChat";
import SEO from "@components/SEO/SEO";
import HeroSection from "./HeroSection";
import TechnologySection from "./TechnologySection";
import WorkSection from "./WorkSection";

const HomePage = () => {
    return <>
        <HeroSection />
        <WorkSection />
        <TechnologySection />
        <CoffeeChat />
        <SEO />
    </>
}

export default HomePage;