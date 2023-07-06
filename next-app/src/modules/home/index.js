import { ServicesSection } from "./ServicesSection";
import PageTitle from "@components/PageTitle";
import BookACallSection from "@components/BookACallSection";
import ReadyToTalkSection from "@components/BookACallSection/ReadyToTalkSection";
import { getPage } from "@services/pages";
import ProjectsSection from "@modules/projects/ProjectsSection";

const HomePage = async () => {
  const pageInfo = await getPage("home");

  return (
    <>
      <PageTitle
        title={<p style={{ maxWidth: "676px" }}>{pageInfo.title}</p>}
        description={`${pageInfo.description}`}
        withImage={true}
      />
      <BookACallSection
        title={`${pageInfo.midsectionTitle}`}
        description={`${pageInfo.midsectionSubtitle}`}
      />
      <ProjectsSection />
      <ServicesSection />
      <ReadyToTalkSection />
    </>
  );
};

export default HomePage;
