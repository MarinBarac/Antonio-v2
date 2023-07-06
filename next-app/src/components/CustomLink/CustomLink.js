import Link from "next/link";
import styles from "./CustomLink.module.scss";
import { ArrowRight } from "shared/assets/icons";

const CustomLink = ({ type = "default", href, children }) => {
  return (
    <Link href={href} className={`${styles.link} ${styles[type]}`}>
      <p>{children}</p>
      {type === "withArrow" && <ArrowRight />}
    </Link>
  );
};

export default CustomLink;
