"use client";

import ListSection from "@components/ListSection";
import clsx from "clsx";
import styles from "./ProjectsList.module.scss";

const ProjectsList = ({ list }) => {
  return (
    <section className={clsx("section", styles.container)}>
      <p>
        One thing I can tell you is that clients range from Cloud automation
        solutions and Nautic companies to large webshops and marketing websites.
        <br />
        <br />
        At least your work will be permanently hidden from curious competition.
        <br />
        <br />
        If you still want to see some of the work I did, explore case studies
        below.
      </p>
      <ListSection list={list} />
    </section>
  );
};

export default ProjectsList;
