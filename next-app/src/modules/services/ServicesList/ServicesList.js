"use client";

import ListSection from "@components/ListSection";
import clsx from "clsx";

import styles from "./ServicesList.module.scss";

const ServicesList = () => {
  return (
    <section className={clsx("section", styles.container)}>
      <ListSection listName="services" />
      <p>*All of the prices can vary depending of project length/scope.</p>
    </section>
  );
};

export default ServicesList;
