import ArticleSection from "./ArticleSection";

const {
  default: ReadyToTalkSection,
} = require("@components/BookACallSection/ReadyToTalkSection");
const { default: FactSection } = require("@components/FactSection");
const { default: PageTitle } = require("@components/PageTitle");
const { getService } = require("@services/services");

const Service = async ({ id }) => {
  const serviceInfo = await getService(id);

  return (
    <>
      <PageTitle
        title={serviceInfo.title}
        description={serviceInfo.description}
        href="/services"
        backLinkText='Back to services'
      />
      <FactSection
        subtitle="Key guiding principle"
        title={serviceInfo.midsectionTitle}
      />
      <ArticleSection
        slides={serviceInfo.slides}
        article={serviceInfo.article.json}
      />
      <ReadyToTalkSection />
    </>
  );
};

export default Service;
