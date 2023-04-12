import ListSection from "@components/ListSection";
import { SERVICES } from "./constants";

import styles from "./ServicesList.module.scss";

const ServicesList = () => {
  return (
    <section className={`section ${styles.container}`}>
      <ListSection list={SERVICES} className="largeGap"/>
      <p>*All of the prices can vary depending of project length/scope.</p>
    </section>
  );
};

export default ServicesList;
