"use client";

import clsx from "clsx";
import { LightBulb, Moon } from "@components/icons";
import ThemeContext from "@context/context";
import { useContext, useEffect } from "react";

import styles from "./ThemeToggle.module.scss";

const ThemeToggle = () => {
  const { toggleTheme, isDark } = useContext(ThemeContext);

  useEffect(() => {
    const body = document.querySelector("body");
    body.style.backgroundColor = isDark ? "#151616" : "#FDFFFE";
    if (isDark) {
      body.classList.add("dark");
    } else {
      body.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <div className={clsx(styles.container, { [styles.dark]: isDark })}>
      <Moon color={isDark ? "white" : "black"} />
      <div className={styles.toggleContainer} onClick={() => toggleTheme()}>
        <div className={styles.knob} />
      </div>
      <LightBulb color={isDark ? "white" : "black"} />
    </div>
  );
};

export default ThemeToggle;
