import PageTitle from "@components/PageTitle";
import AboutSection from "./AboutSection";
import CoffeeChat from "@components/CoffeeChat";

const AboutPage = () => {
  return (
    <>
      <PageTitle
        title="About Antonio"
        description={
          <>
            So you made it here. Congratulations.
            <br />
            If you are not into reading about the short life story of some
            internet stranger named Antonio, skip to the Contact page. No hard
            feelings.
          </>
        }
      />
      <AboutSection />
      <CoffeeChat />
    </>
  );
};

export default AboutPage;
