"use client";

import { useContext } from "react";
import clsx from "clsx";
import Image from "next/image";
import ThemeContext from "@context/context";
import AntonioImage from "@assets/images/about.png";
import LocasticLogo from "@assets/icons/locastic-logo.svg";

import styles from "./AboutSection.module.scss";
import { ABOUT_ANTONIO } from "./constants";

const AboutSection = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section
      className={clsx("section", styles.container, { [styles.dark]: isDark })}
    >
      <Image
        src={AntonioImage.src}
        alt="About image"
        width={AntonioImage.width}
        height={AntonioImage.height}
        className={styles.image}
      />
      <p className={styles.shortText}>
        Currently, I&apos;m a UX/UI designer at
        <Image
          src={LocasticLogo.src}
          alt="Locastic"
          width={LocasticLogo.width}
          height={LocasticLogo.height}
          className={styles.logo}
        />
      </p>
      <p className={styles.longText}>
        {ABOUT_ANTONIO}
      </p>
    </section>
  );
};

export default AboutSection;
