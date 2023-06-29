import Button from "@components/Button";
import styles from "./BookACallSection.module.scss";
import Link from "next/link";
import CustomLink from "@components/CustomLink";

const BookACallSection = ({ title, description, type }) => {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

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
          <p
            className={`${type === "largeText" ? "h3" : "p2"} ${
              styles.description
            } ${type === "largeText" && styles.large}`}
          >
            {description}
          </p>
        )}
        <div className={styles.buttons}>
          <Link
            href={`https://calendly.com/antoniovidakovic/30min?month=${year}-${
              +month < 10 ? "0" + month : month
            }`}
            target="_blank"
          >
            <Button>Book a call</Button>
          </Link>
          <CustomLink href="/contact" type="withArrow">
            Send an inquiry
          </CustomLink>
        </div>
      </div>
    </section>
  );
};

export default BookACallSection;
