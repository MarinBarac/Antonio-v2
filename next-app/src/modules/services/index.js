import PageTitle from "@components/PageTitle";
import ServicesListSection from "./ServicesList";
import ReadyToTalkSection from "@components/BookACallSection/ReadyToTalkSection";
import { getPage } from "@services/pages";

const ServicesPage = async () => {
  const pageInfo = await getPage("services");

  return (
    <>
      <PageTitle
        title={pageInfo.title}
        description={`${pageInfo.description}`}
      />
      <ServicesListSection />
      <ReadyToTalkSection />
    </>
  );
};

export default ServicesPage;
