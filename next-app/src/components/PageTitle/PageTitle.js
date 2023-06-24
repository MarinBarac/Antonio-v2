"use client";

import clsx from "clsx";

import styles from "./PageTitle.module.scss";
import { LeftArrow } from "@components/icons";
import { useRouter } from "next/navigation";

const PageTitle = ({ title, description, prevLink }) => {
  const router = useRouter();

  return (
    <section
      className={clsx("section", styles.container)}
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
