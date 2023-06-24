"use client";

import SectionTitle from "@components/SectionTitle/SectionTitle";
import clsx from "clsx";
import { ADDITIONAL_SKILLS, MAIN_TECHNOLOGY } from "./constants";
import List from "./List";

import styles from "./TechnologySection.module.scss";

const TechnologySection = () => {
  return (
    <section
      className={"section"}
    >
      <div className={clsx(styles.container)}>
      <SectionTitle
        title="Stack"
        description="Software and resources I use regularly."
      />
      <List items={MAIN_TECHNOLOGY} />
      <div>
        <p className={styles.listTitle}>Additional skills</p>
        <List items={ADDITIONAL_SKILLS} />
      </div>
      </div>
    </section>
  );
};

export default TechnologySection;
