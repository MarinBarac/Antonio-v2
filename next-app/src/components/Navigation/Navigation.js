import ThemeContext from "@context/context";
import clsx from "clsx";
import { useContext } from "react";
import { PAGE_LINKS, SOCIAL_MEDIA } from "./constants";
import styles from "./Navigation.module.scss";
import NavLink from "./NavLink";

const Navigation = ({ show, closeMenu }) => {
  const { isDark } = useContext(ThemeContext);

  return (
    <>
      <div
        className={clsx(styles.container, {
          [styles.dark]: isDark,
          [styles.active]: show,
        })}
      >
        <ul className={styles.links}>
          {PAGE_LINKS.map((link) => (
            <NavLink key={`link-${link.label}`} {...link} onClick={closeMenu}/>
          ))}
        </ul>
        <div className={styles.bottomList}>
          <p className={styles.listTitle}>FOLLOW</p>
          <ul className={styles.links}>
            {SOCIAL_MEDIA.map((link) => (
              <NavLink key={`link-${link.label}`} {...link} target="_blank" onClick={closeMenu}/>
            ))}
          </ul>
        </div>
      </div>
      <div className={clsx(styles.backdrop, { [styles.active]: show })} onClick={closeMenu}/>
    </>
  );
};

export default Navigation;
