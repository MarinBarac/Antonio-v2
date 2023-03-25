"use client";

import Button from "@components/Button";
import ListSection from "@components/ListSection";
import clsx from "clsx";
import styles from "./WorkSection.module.scss";

const WorkSection = () => {
  return (
    <section
      className={clsx("section", styles.container)}
    >
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Work</h2>
        <p className={styles.description}>
          Explore some of the work that I did and which I can share while not
          breaking an NDA.
        </p>
      </div>
      <ListSection listName="projects"/>
      <Button href="/projects">See more</Button>
    </section>
  );
};

export default WorkSection;
