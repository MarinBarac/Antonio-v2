import Image from "next/image";
import styles from "./ClientSection.module.scss";
import CustomLink from "@components/CustomLink";

const ClientSection = ({ aboutClient, logo, clientSite }) => {
  return (
    <section className="section">
      <div className={styles.container}>
        <h2 className="h2">The Client</h2>
        <div className={styles.content}>
          <p className={`${styles.about} p3`}>{aboutClient}</p>
          <div className={styles.logoSide}>
            <div className={styles.logoContainer}>
              <Image
                src={logo.url}
                alt="Client logo"
                width={logo.width}
                height={logo.height}
                className={styles.logo}
              />
            </div>
            <CustomLink
              type="white-underline"
              href={clientSite}
              target="_blank"
              withArrow
            >
              Visit website
            </CustomLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientSection;
