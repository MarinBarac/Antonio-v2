import Link from "next/link";
import styles from "./NotFound.module.scss";
import Button from "@components/Button";

const NotFound = () => {
  return (
    <div className={styles.container}>
      <h1 className="black-white">How did you manage to get here?</h1>
      <Link href="https://google.com">
        <Button variant="primary">Leave the site</Button>
      </Link>
    </div>
  );
};

export default NotFound;
