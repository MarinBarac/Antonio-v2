"use client";

import { forwardRef } from "react";
import styles from "./Button.module.scss";

const Button = forwardRef(
  ({ children, type = "button", variant = "default", style, onClick }, ref) => {
    return (
      <button
        type={type}
        ref={ref}
        className={`${styles.button} ${styles[variant]}`}
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
