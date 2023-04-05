import ThemeContext from "@context/context";
import clsx from "clsx";
import Link from "next/link";
import { forwardRef, useContext } from "react";
import styles from "./Button.module.scss";

const Button = forwardRef(
  ({ href, children, type = "submit", variant = "default", style, onClick, target="_self" }, ref) => {
    const { isDark } = useContext(ThemeContext);

    if (!href) {
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

    return (
      <Link href={href} target={target}>
        <button
          ref={ref}
          type={type}
          className={clsx(styles.button, styles[variant], {
            [styles.dark]: isDark,
          })}
          onClick={onClick}
          style={style}
        >
          {children}
        </button>
      </Link>
    );
  }
);

Button.displayName = "Button";

export default Button;
