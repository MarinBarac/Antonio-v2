"use client";

import ThemeContext from "@context/context";
import clsx from "clsx";
import { forwardRef, useContext } from "react";
import styles from "./Button.module.scss";

const Button = forwardRef(
  ({ children, type = "submit", variant = "default", style, onClick }, ref) => {
    const { isDark } = useContext(ThemeContext);

      return (
        <button
          type={type}
          ref={ref}
          className={clsx(styles.button, styles[variant], {
            [styles.dark]: isDark,
          })}
          onClick={onClick}
          style={style}
        >
          {children}
        </button>
      );
  }
);

Button.displayName = "Button";

export default Button;
