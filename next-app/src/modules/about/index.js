import PageTitle from "@components/PageTitle";
import ReadyToTalkSection from "@components/BookACallSection/ReadyToTalkSection";
import MainSection from "./MainSection";
import FactSection from "@components/FactSection";
import { getPage } from "@services/pages";

const AboutPage = async () => {
  const pageInfo = await getPage("about");

  return (
    <>
      <PageTitle title={pageInfo.title} description={pageInfo.description} />
      <FactSection
        subtitle={pageInfo.midsectionSubtitle}
        title={pageInfo.midsectionTitle}
      />
      <MainSection article={pageInfo.article} />
      <ReadyToTalkSection />
    </>
  );
};

export default AboutPage;
