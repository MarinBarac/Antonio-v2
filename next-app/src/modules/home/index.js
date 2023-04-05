import CoffeeChat from "@components/CoffeeChat";
import SEO from "@components/SEO/SEO";
import HeroSection from "./HeroSection";
import TechnologySection from "./TechnologySection";
import WorkSection from "./WorkSection";
import { getLatesProjectPreviews } from "@services/contentful";

export const fetchCache = 'force-no-store'
export const dynamic = 'force-dynamic'

const HomePage = async () => {
  const projects = await getLatesProjectPreviews();
  const projectsList = projects.map((project) => ({
    image: project.previewImage,
    title: project.projectName,
    description: project.description,
    slug: project.slug,
  }));

  return (
    <>
      <HeroSection />
      <WorkSection projectsList={projectsList} />
      <TechnologySection />
      <CoffeeChat />
      <SEO />
    </>
  );
};

export default HomePage;
