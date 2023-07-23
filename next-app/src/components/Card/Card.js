import Link from "next/link";
import styles from "./Card.module.scss";
import Image from "next/image";
import { ArrowRight } from "shared/assets/icons";

const Card = ({ type, title, tags, image, href, className }) => {
  return (
    <div
      style={{
        backgroundImage:
          type !== "main"
            ? `linear-gradient(0deg, #030906 0%, rgba(0, 0, 0, 0.00) 100%), url(${
                image.src || image.url
              })`
            : "none",
        backgroundColor: type === "main" ? "#030906" : "none",
      }}
      className={`${styles.container} ${styles[type]} ${className}`}
    >
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h3 className="h3">{title}</h3>
          {tags && (
            <ul className={styles.tags}>
              {tags.map((tag) => (
                <li key={tag} className={`p1 ${styles.tag}`}>
                  {tag}
                </li>
              ))}
            </ul>
          )}
        </div>
        <Link href={href} className={styles.arrowContainer}>
          <ArrowRight className={styles.arrow}/>
        </Link>
      </div>
      <div className={styles.imageContainer}>
        <Image alt="Card image" src={image.src || image.url} width={image.width} height={image.height} className={styles.image}/>
      </div>
      <Link href={href} className={styles.arrowContainer}>
        <ArrowRight className={styles.arrow}/>
      </Link>
    </div>
  );
};

export default Card;
