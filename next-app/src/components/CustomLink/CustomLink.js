import Link from "next/link";
import styles from "./CustomLink.module.scss";
import { ArrowRight } from "shared/assets/icons";

const CustomLink = ({ type = "default", href, children, target="_self" }) => {
  return (
    <Link href={href} className={`${styles.link} ${styles[type]}`} target={target}>
      <p>{children}</p>
      {type === "withArrow" && <ArrowRight />}
    </Link>
  );
};

export default CustomLink;
