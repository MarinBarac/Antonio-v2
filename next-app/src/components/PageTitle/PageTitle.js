"use client";

import ThemeContext from "@context/context";
import clsx from "clsx";
import { useContext } from "react";

import styles from "./PageTitle.module.scss";
import { LeftArrow } from "@components/icons";
import { useRouter } from "next/navigation";

const PageTitle = ({ title, description, prevLink }) => {
  const router = useRouter();
  const { isDark } = useContext(ThemeContext);

  return (
    <section
      className={clsx("section", styles.container, { [styles.dark]: isDark })}
    >
      {prevLink && (
        <p onClick={() => router.back()} className={styles.prevLink}>
          <LeftArrow color={isDark ? "#B8C3C0" : "#656867"}/>
          Take me back
        </p>
      )}
      <h1>{title}</h1>
      <p>{description}</p>
    </section>
  );
};

export default PageTitle;
