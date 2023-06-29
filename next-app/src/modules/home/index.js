import { ServicesSection } from "./ServicesSection";
import PageTitle from "@components/PageTitle";
import BookACallSection from "@components/BookACallSection";
import ProjectsSection from "./ProjectsSection.js";
import ReadyToTalkSection from "@components/BookACallSection/ReadyToTalkSection";

const HomePage = () => {
  return (
    <>
      <PageTitle
        title="Place where design meets purpose."
        description={`UX/UI designer form Split, Croatia.\nI help companies build meaningful product and service through problem-solving and user oriented design.`}
        withImage={true}
      />
      <BookACallSection
        title={`Covering the whole process from Strategies and tactics, User Research, Information architecture, User flows, Wireframe to High-fidelity design and prototyping.`}
        description={`Schedule a 30 minutes free call and get an\nball-park estimate for your project.`}
      />
      <ProjectsSection />
      <ServicesSection />
      <ReadyToTalkSection />
    </>
  );
};

export default HomePage;
