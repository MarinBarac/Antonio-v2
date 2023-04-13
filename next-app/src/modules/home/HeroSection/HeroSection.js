import Image from "next/image";
import Avatar from "@assets/images/avatar.png";
import Button from "@components/Button";
import UselessButton from "./UselessButton/UselessButton";
import TypedText from "./TypedText";

import styles from "./HeroSection.module.scss";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className={`section ${styles.container}`}>
      <Image
        src={Avatar.src}
        alt="Avatar"
        width={Avatar.width}
        height={Avatar.height}
        className={styles.avatar}
        priority
      />
      <div className={styles.text}>
        <h1 className={styles.title}>
          Hey, I&apos;m Antonio.
          <br />I design <TypedText />
        </h1>
        <p className={`black-white ${styles.description}`}>
          UX/UI designer from Split, Croatia.
          <br />
          Coffee fan and Figma wizard.
        </p>
      </div>
      <div className={styles.buttons}>
        <Link href="/services">
          <Button variant="primary">Services</Button>
        </Link>
        <UselessButton />
      </div>
    </section>
  );
};

export default HeroSection;
