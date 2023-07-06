import Service from "@modules/services/Service";

const ServicePage = ({ params: { id } }) => {
  return <Service id={id} />;
};

export default ServicePage;
