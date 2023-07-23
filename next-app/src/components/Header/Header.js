import Link from "next/link";

import styles from "./Header.module.scss";
import { HEADER_LINKS } from "./constants";
import CustomLink from "@components/CustomLink";
import MobileMenu from "./MobileMenu";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link href="/" className={styles.logo}>
          Vidakovic
        </Link>
        <ul className={styles.links}>
          {HEADER_LINKS.map((link) => (
            <li key={link.text}>
              <CustomLink href={link.href}>{link.text}</CustomLink>
            </li>
          ))}
        </ul>
        <Link href="/contact" className={styles.contactBtn}>
          Contact me
        </Link>
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
