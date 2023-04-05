import ThemeContext from "@context/context";
import clsx from "clsx";
import Link from "next/link";
import { useContext, useState } from "react";

import styles from "./Navigation.module.scss";

const NavLink = ({ label, href, Icon, active, onClick, target = "_self" }) => {
  const [mouseOver, setMouseOver] = useState(false);
  const { isDark } = useContext(ThemeContext);

  const activeColor = isDark ? "#FDFFFE" : "#151616";

  return (
    <li
      onMouseEnter={() => setMouseOver(true)}
      onMouseLeave={() => setMouseOver(false)}
      onClick={onClick}
    >
      <Link href={href} target={target} className={clsx(styles.link, { [styles.active]: active })}>
        <Icon color={mouseOver || active ? activeColor : "#656867"} />
        <p className={styles.label}>{label}</p>
      </Link>
    </li>
  );
};

export default NavLink;