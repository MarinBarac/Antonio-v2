import Link from "next/link";
import styles from "./CustomLink.module.scss";
import { ArrowRight } from "shared/assets/icons";

const CustomLink = ({
  type = "default",
  href,
  children,
  target = "_self",
  className,
  withArrow,
}) => {
  return (
    <Link
      href={href}
      className={`${styles.link} ${styles[type]} ${
        withArrow && styles.withArrow
      } ${className}`}
      target={target}
    >
      <p>{children}</p>
      {withArrow && <ArrowRight />}
    </Link>
  );
};

export default CustomLink;
