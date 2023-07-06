import styles from "./ServicesList.module.scss";
import { getServicesPreviews } from "@services/services";
import Card from "@components/Card";

const ServicesList = async () => {
  const services = await getServicesPreviews();

  return (
    <ul className={styles.list}>
      {services.map((service) => (
        <li key={service.title} className={styles.cardContainer}>
          <Card
            href={"/services/" + service.id}
            image={service.previewImage}
            title={service.title}
            className={styles.card}
          />
        </li>
      ))}
    </ul>
  );
};

export default ServicesList;
