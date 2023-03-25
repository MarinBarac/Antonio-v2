"use client";

import SectionTitle from "@components/SectionTitle/SectionTitle";
import ThemeContext from "@context/context";
import clsx from "clsx";
import { useContext } from "react";
import { ADDITIONAL_SKILLS, MAIN_TECHNOLOGY } from "./constants";
import List from "./List";

import styles from "./TechnologySection.module.scss";

const TechnologySection = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section
      className={clsx("section", styles.container, { [styles.dark]: isDark })}
    >
      <SectionTitle
        title="Stack"
        description="Software and resources I use regularly."
      />
      <List items={MAIN_TECHNOLOGY} />
      <div>
        <p className={styles.listTitle}>Additional skills</p>
        <List items={ADDITIONAL_SKILLS} />
      </div>
    </section>
  );
};

export default TechnologySection;
