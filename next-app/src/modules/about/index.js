import PageTitle from "@components/PageTitle";
import ReadyToTalkSection from "@components/BookACallSection/ReadyToTalkSection";
import MainSection from "./MainSection";
import FactSection from "@components/FactSection";

const AboutPage = () => {
  return (
    <>
      <PageTitle
        title="About Antonio"
        description={`So you made it here. Congratulations. If you are not into reading about the short life story of some internet stranger named Antonio, skip to the Contact page. No hard feelings.`}
      />
      <FactSection
        subtitle="fun fact"
        title={`I love to get wasted in Jameson-Coke and eat rump steak.`}
      />
      <MainSection />
      <ReadyToTalkSection />
    </>
  );
};

export default AboutPage;
