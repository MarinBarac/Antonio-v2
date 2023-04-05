"use client";

import clsx from "clsx";
import Image from "next/image";

import Avatar from "@assets/images/avatar.png";

import styles from "./HeroSection.module.scss";
import Button from "@components/Button";
import { useContext, useEffect, useRef } from "react";
import ThemeContext from "@context/context";
import UselessButton from "./UselessButton/UselessButton";
import Typed from "typed.js";

const HeroSection = () => {
  const spanRef = useRef(null);
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    const typed = new Typed(spanRef.current, {
      strings: ['software.', 'apps.', 'websites.'],
      typeSpeed: 60,
      backSpeed: 80,
      backDelay: 1000,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  })

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
          <br />I design <span ref={spanRef}></span>
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
        <UselessButton />
      </div>
    </section>
  );
};

export default HeroSection;
