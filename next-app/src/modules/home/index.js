import CoffeeChat from "@components/CoffeeChat";
import HeroSection from "./HeroSection";
import TechnologySection from "./TechnologySection";
import WorkSection from "./WorkSection";

const HomePage = () => {
    return <>
        <HeroSection />
        <WorkSection />
        <TechnologySection />
        <CoffeeChat />
    </>
}

export default HomePage;