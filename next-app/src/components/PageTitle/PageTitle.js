"use client";

import ThemeContext from "@context/context";
import clsx from "clsx";
import { useContext } from "react";
import styles from "./PageTitle.module.scss";

const PageTitle = ({ title, description }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section className={clsx("section", styles.container, { [styles.dark]: isDark })}>
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default PageTitle;
