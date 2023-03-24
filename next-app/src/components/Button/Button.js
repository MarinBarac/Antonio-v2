import ThemeContext from "@context/context";
import clsx from "clsx";
import Link from "next/link";
import { useContext } from "react";
import styles from "./Button.module.scss";

const Button = ({ href, children, type = "submit", variant='default' }) => {
    const { isDark } = useContext(ThemeContext);

  if (!href) {
    return (
      <button
        type={type}
        className={clsx(styles.button, styles[variant], { [styles.dark]: isDark })}
      >
        {children}
      </button>
    );
  }

  return (
    <Link href={href}>
      <button
        type={type}
        className={clsx(styles.button, styles[variant], { [styles.dark]: isDark  })}
      >
        {children}
      </button>
    </Link>
  );
};

export default Button;
