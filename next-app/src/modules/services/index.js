import CoffeeChat from "@components/CoffeeChat";
import PageTitle from "@components/PageTitle";
import ServicesList from "./ServicesList/ServicesList";

const ServicesPage = () => {
  return (
    <>
      <PageTitle
        title="Services"
        description="You are not definitely visiting this site just to spend some time online. So here are the ways we can collaborate."
      />
      <ServicesList />
      <CoffeeChat />
    </>
  );
};

export default ServicesPage;
