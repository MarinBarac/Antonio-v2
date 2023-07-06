"use client";

import { useState } from "react";
import Link from "next/link";
import Hamburger from "@components/Hamburger/Hamburger";
import { MOBILE_LINKS } from "./constants";

import styles from "./MobileMenu.module.scss";

const MobileMenu = () => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.container}>
      <Hamburger
        active={show}
        onClick={() => setShow((prevState) => !prevState)}
      />
      <div className={`${styles.menu} ${show && styles.active}`}>
        <ul className={styles.links}>
          {MOBILE_LINKS.map((link) => (
            <li key={link.text}>
              <Link
                href={link.href}
                onClick={() => setShow(false)}
                className={styles.link}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;
