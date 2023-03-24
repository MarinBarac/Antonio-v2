"use client";

import Hamburger from "@components/Hamburger/Hamburger";
import { Logo } from "@components/icons";
import Navigation from "@components/Navigation/Navigation";
import ThemeToggle from "@components/ThemeToggle/ThemeToggle";
import ThemeContext from "@context/context";
import clsx from "clsx";
import { useContext, useState } from "react";

import styles from "./Navbar.module.scss";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isDark } = useContext(ThemeContext);

  const closeMenu = () => {
    console.log("closing");
    setShowMenu(false);
  };

  return (
    <header className={clsx(styles.container, { [styles.dark]: isDark })}>
      <div className={styles.logo} onClick={closeMenu}>
        <Logo color={isDark ? "white" : "black"} />
      </div>
      <ThemeToggle />
      <Navigation show={showMenu} closeMenu={closeMenu} />
      <Hamburger
        onClick={() => setShowMenu((prevState) => !prevState)}
        active={showMenu}
      />
    </header>
  );
};

export default Navbar;
