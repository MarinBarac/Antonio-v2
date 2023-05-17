import CoffeeChat from "@components/CoffeeChat";
import PageTitle from "@components/PageTitle";
import ServicesListSection from "./ServicesList";

const ServicesPage = () => {
  return (
    <>
      <PageTitle
        title="Services"
        description="You are not definitely visiting this site just to spend some time online. So here are the ways we can collaborate."
      />
      <ServicesListSection />
      <CoffeeChat />
    </>
  );
};

export default ServicesPage;
