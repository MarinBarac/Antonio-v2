"use client";

import Button from "@components/Button";
import ListSection from "@components/ListSection";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import clsx from "clsx";
import styles from "./WorkSection.module.scss";

const WorkSection = () => {
  return (
    <section className={clsx("section", styles.container)}>
      <SectionTitle
        title="Work"
        description="Explore some of the work that I did and which I can share while not breaking an NDA."
        titleStyle={{ fontSize: "32px" }}
      />
      <ListSection listName="projects" />
      <Button href="/projects">See more</Button>
    </section>
  );
};

export default WorkSection;
