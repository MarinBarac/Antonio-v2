import Button from "@components/Button";
import styles from "./BookACallSection.module.scss";
import Link from "next/link";
import CustomLink from "@components/CustomLink";

const BookACallSection = ({
  title,
  description,
  type,
  firstLink,
  firstLinkText,
  secondLink,
  secondLinkText,
  secondLinkBlank,
}) => {
  return (
    <section className="section">
      <div className={styles.container}>
        <h2
          className={`${type === "largeText" ? "h2" : "h3"} ${
            type === "largeText" && styles.large
          }`}
        >
          {title}
        </h2>
        {description && (
          <div
            className={`${type === "largeText" ? "h3" : "p2"} ${
              styles.description
            } ${type === "largeText" && styles.large}`}
          >
            {description}
          </div>
        )}
        <div className={styles.buttons}>
          {firstLink && (
            <Link href={firstLink} target="_blank">
              <Button>{firstLinkText}</Button>
            </Link>
          )}
          {secondLink && (
            <CustomLink
              href={secondLink}
              type="withArrow"
              target={secondLinkBlank ? "_blank" : "_self"}
            >
              {secondLinkText}
            </CustomLink>
          )}
        </div>
      </div>
    </section>
  );
};

export default BookACallSection;
