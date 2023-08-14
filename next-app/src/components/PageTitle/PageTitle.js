import Link from "next/link";
import styles from "./PageTitle.module.scss";
import PageTitleImage from "./PageTitleImage";
import { ArrowRight } from "shared/assets/icons";

const PageTitle = ({ title, description, href, withImage, backLinkText, children, showAnimation }) => {
  return (
    <section className={`${styles.container} ${withImage && styles.withImage} ${showAnimation && styles.showAnimation }`}>
      <div className={styles.content}>
        {href && (
          <Link href={href} className={styles.link}>
            <div className={styles.linkArrow}>
              <ArrowRight />
            </div>
            <p className="p2">{backLinkText}</p>
          </Link>
        )}
        <h1 className={`h1 ${styles.title}`}>{title}</h1>
        <p className={`h3 ${styles.description}`}>{description}</p>
        {withImage && <PageTitleImage />}
        {children}
      </div>
    </section>
  );
};

export default PageTitle;
