"use client";

import ListSection from "@components/ListSection";
import clsx from "clsx";

import styles from "./ServicesList.module.scss";
import { SERVICES } from "./constants";

const ServicesList = () => {
  return (
    <section className={clsx("section", styles.container)}>
      <ListSection list={SERVICES} className="largeGap"/>
      <p>*All of the prices can vary depending of project length/scope.</p>
    </section>
  );
};

export default ServicesList;
