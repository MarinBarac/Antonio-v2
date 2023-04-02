"use client";

import ThemeContext from "@context/context";
import clsx from "clsx";
import { useContext } from "react";
import Link from "next/link";

import styles from "./PageTitle.module.scss";
import { LeftArrow } from "@components/icons";

const PageTitle = ({ title, description, prevLink }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section
      className={clsx("section", styles.container, { [styles.dark]: isDark })}
    >
      {prevLink && (
        <Link href="/projects" className={styles.prevLink}>
          <LeftArrow color={isDark ? "#B8C3C0" : "#656867"}/>
          Take me back
        </Link>
      )}
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default PageTitle;
