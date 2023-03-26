"use client";

import ThemeContext from "@context/context";
import clsx from "clsx";
import { useContext } from "react";
import styles from "./Footer.module.scss";

const Footer = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <footer className={clsx(styles.footer, { [styles.dark]: isDark })}>
      <p>
        VIDAKOVIC, obrt za računalne usluge,
        <br />
        vl. Antonio Vidaković, Kaštel Štafilić,
        <br />
        Koludrovac 24
      </p>
      <p>
        &copy; 2023 VIDAKOVIC
        <br />
        All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
