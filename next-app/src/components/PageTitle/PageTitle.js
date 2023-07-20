import Link from "next/link";
import styles from "./PageTitle.module.scss";
import PageTitleImage from "./PageTitleImage";
import { ChevronRightOutline } from "shared/assets/icons";

const PageTitle = ({ title, description, href, withImage, backLinkText, children }) => {
  return (
    <section className={`${styles.container} ${withImage && styles.withImage}`}>
      <div className={styles.content}>
        {href && (
          <Link href={href} className={styles.link}>
            <div className={styles.linkArrow}>
              <ChevronRightOutline />
            </div>
            <p className="p2">{backLinkText}</p>
          </Link>
        )}
        <h1 className="h1">{title}</h1>
        <p className={`h3 ${styles.description}`}>{description}</p>
        {withImage && <PageTitleImage />}
        {children}
      </div>
    </section>
  );
};

export default PageTitle;
