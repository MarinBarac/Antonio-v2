import Link from "next/link";
import styles from "./NotFound.module.scss";
import Button from "@components/Button";

const NotFound = () => {
  return (
    <section className={`section ${styles.section}`}>
      <div className={styles.container}>
        <h1 className="h1">How did you manage to get here?</h1>
        <Link href="/" className={styles.link}>
          <Button>Back home</Button>
        </Link>
      </div>
    </section>
  );
};

export default NotFound;
