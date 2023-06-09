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
          <span className={styles.row}>Hey, I&apos;m Antonio.</span>
          <span className={styles.row}>
            <span className={styles.normalText}>I design</span>
            <TypedText />
          </span>
        </h1>
        <p className={`black-white ${styles.description}`}>
          UX/UI designer from Split, Croatia,
          <br />
          specializing in designing B2B SaaS.
        </p>
      </div>
      <div className={styles.buttons}>
        <Link href="/about">
          <Button variant="primary">Who is Antonio?</Button>
        </Link>
        <UselessButton />
      </div>
    </section>
  );
};

export default HeroSection;
