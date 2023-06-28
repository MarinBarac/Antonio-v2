import Card from "@components/Card";
import styles from "./ServicesSection.module.scss";
import { SERVICES } from "./constants";

const ServicesSection = () => {
  return (
    <section className="section">
      <div className={styles.container}>
        <h2 className="h2">Services</h2>
        <ul className={styles.servicesList}>
          {SERVICES.map((service, index) => (
            <li key={service.title}>
              <Card {...service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default ServicesSection;
