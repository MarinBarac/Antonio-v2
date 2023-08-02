import styles from "./ServicesList.module.scss";
import { getServicesPreviews } from "@services/services";
import Card from "@components/Card";
import CardsList from "@components/CardsList";

const ServicesList = async () => {
  const services = await getServicesPreviews();
  const formattedServices = services.map((service) => ({
    title: service.title,
    href: `services/${service.slug}`,
    image: service.previewImage,
  }));
  
  return <CardsList data={formattedServices} />;
};

export default ServicesList;
