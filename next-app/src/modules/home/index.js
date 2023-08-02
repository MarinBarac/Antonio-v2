import { ServicesSection } from "./ServicesSection";
import PageTitle from "@components/PageTitle";
import BookACallSection from "@components/BookACallSection";
import ReadyToTalkSection from "@components/BookACallSection/ReadyToTalkSection";
import { getPage } from "@services/pages";
import ProjectsSection from "@modules/projects/ProjectsSection";
import { generateBookACallLink } from "shared/services";
import { getMediumFeed } from "api/http";
import ArticlesSection from "./ArticlesSection";

const HomePage = async () => {
  const [pageInfo, mediumArticles] = await Promise.all([
    getPage("home"),
    getMediumFeed(),
  ]);

  const mediumArticlesData = await mediumArticles.json();

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
        firstLink={generateBookACallLink()}
        firstLinkText="Book a call"
        secondLink="/contact"
        secondLinkText="Send an inquiry"
        secondLinkType="green-underline"
      />
      <ProjectsSection />
      <ServicesSection />
      <ArticlesSection articles={mediumArticlesData.items}/>
      <ReadyToTalkSection />
    </>
  );
};

export default HomePage;
