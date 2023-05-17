import ListSection from "@components/ListSection";
import { SERVICES } from "./constants";

import styles from "./ServicesList.module.scss";

const ServicesList = () => {
  return (
    <div className={styles.container}>
      <ListSection list={SERVICES}/>
    </div>
  );
};

export default ServicesList;
