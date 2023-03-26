import ThemeContext from "@context/context";
import clsx from "clsx";
import Link from "next/link";
import { forwardRef, useContext } from "react";
import styles from "./Button.module.scss";

const Button = forwardRef(
  ({ href, children, type = "submit", variant = "default", onClick }, ref) => {
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
        >
          {children}
        </button>
      );
    }

    return (
      <Link href={href}>
        <button
          ref={ref}
          type={type}
          className={clsx(styles.button, styles[variant], {
            [styles.dark]: isDark,
          })}
          onClick={onClick}
        >
          {children}
        </button>
      </Link>
    );
  }
);

Button.displayName = "Button";

export default Button;
