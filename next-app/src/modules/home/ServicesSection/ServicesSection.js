import styles from "./ServicesSection.module.scss";
import ServicesList from "@modules/services/ServicesList/ServicesList";

const ServicesSection = () => {
  return (
    <section className="section">
      <div className={styles.container}>
        <h2 className="h2">Services</h2>
        <ServicesList />
      </div>
    </section>
  );
};

export default ServicesSection;
