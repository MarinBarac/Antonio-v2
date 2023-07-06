"use client";

import Button from "@components/Button";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import clsx from "clsx";

import styles from "./CoffeeChat.module.scss";
import Link from "next/link";

const CoffeeChat = () => {

  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();

  return (
    <section className="section">
      <div className={clsx(styles.container)}>
        <SectionTitle
          title="Coffee chat?"
          description="No strings attached. Book a 30 minute video call via Calendly or send an email."
        />
        <div className={styles.buttons}>
          <Link
            href={`https://calendly.com/antoniovidakovic/30min?month=${year}-${
              +month < 10 ? "0" + month : month
            }`}
            target="_blank"
          >
            <Button href="/" variant="primary">
              Book a call
            </Button>
          </Link>
          <Link href="/contact">
            <Button variant="secondary">E-mail</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CoffeeChat;
