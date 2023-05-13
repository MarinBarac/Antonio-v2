"use client";

import Hamburger from "@components/Hamburger/Hamburger";
import { Logo } from "@components/icons";
import Navigation from "@components/Navigation/Navigation";
import ThemeToggle from "@components/ThemeToggle/ThemeToggle";
import ThemeContext from "@context/context";
import clsx from "clsx";
import { useContext, useEffect, useState } from "react";

import styles from "./Navbar.module.scss";
import Link from "next/link";

const useDisableBodyScroll = (open) => {
  useEffect(() => {
      if (open) {
          document.body.style.overflowY = 'hidden';
      } else {
          document.body.style.overflowY = 'unset';
      }
  }, [open])
} 

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const { isDark } = useContext(ThemeContext);

  const closeMenu = () => {
    setShowMenu(false);
  };

  useDisableBodyScroll(showMenu);

  return (
    <header className={clsx(styles.container, { [styles.dark]: isDark })}>
      <div className={styles.logo} onClick={closeMenu}>
        <Link href="/">
          <Logo color={isDark ? "white" : "black"} />
        </Link>
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
