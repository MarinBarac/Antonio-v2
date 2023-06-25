"use client";

import clsx from "clsx";
import styles from "./Footer.module.scss";
import { SITE_LINKS, SOCIAL_MEDIA_LINKS } from "./constants";
import CustomLink from "@components/CustomLink";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={clsx(styles.footer)}>
      <div className={styles.links}>
        <ul className={styles.siteLinks}>
          {SITE_LINKS.map((link) => (
            <li key={"Footer link to " + link.text}>
              <CustomLink href={link.href}>{link.text}</CustomLink>
            </li>
          ))}
        </ul>
        <div className={styles.dividerLine}/>
        <ul className={styles.socialMedia}>
          {SOCIAL_MEDIA_LINKS.map((link) => (
            <li key={link.key}>
              <Link href={link.href}>{link.icon}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.dividerLine} />
      <p className={styles.legalText}>
        &copy; 2023 VIDAKOVIC All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
