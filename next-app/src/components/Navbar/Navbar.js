"use client";

import { Logo } from "@components/icons";
import ThemeToggle from "@components/ThemeToggle/ThemeToggle";
import ThemeContext from "@context/context";
import { useContext } from "react";

import styles from './Navbar.module.scss';

const Navbar = () => {
  const { isDark } = useContext(ThemeContext);
  return (
    <div className={styles.container}>
      <Logo color={isDark ? "white" : "black"} />
      <ThemeToggle />
    </div>
  );
};

export default Navbar;
