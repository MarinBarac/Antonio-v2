"use client";

import clsx from "clsx";
import Image from "next/image";

import Avatar from "@assets/icons/avatar.svg";

import styles from "./HeroSection.module.scss";
import Button from "@components/Button";
import { useContext } from "react";
import ThemeContext from "@context/context";

const HeroSection = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section
      className={clsx("section", styles.container, { [styles.dark]: isDark })}
    >
      <Image
        src={Avatar.src}
        alt="Avatar"
        width={Avatar.width}
        height={Avatar.height}
      />
      <div className={styles.text}>
        <h1 className={styles.title}>
          Hey, I&apos;m Antonio.
          <br />I design <span>software.</span>
        </h1>
        <p className={styles.description}>
          UX/UI designer from Split, Croatia.
          <br />
          Coffee fan and Figma wizard.
        </p>
      </div>
      <div className={styles.buttons}>
        <Button href="/services" variant="primary">
          Services
        </Button>
        <Button variant="secondary">Useless button</Button>
      </div>
    </section>
  );
};

export default HeroSection;
