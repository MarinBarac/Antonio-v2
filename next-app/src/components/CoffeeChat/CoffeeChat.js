"use client";

import Button from "@components/Button";
import SectionTitle from "@components/SectionTitle/SectionTitle";
import ThemeContext from "@context/context";
import clsx from "clsx";
import { useContext } from "react";

import styles from "./CoffeeChat.module.scss";

const CoffeeChat = () => {
  const { isDark } = useContext(ThemeContext);

  return (
    <section className="section">
      <div className={clsx(styles.container, { [styles.dark]: isDark })}>
        <SectionTitle
          title="Coffee chat?"
          description="No strings attached. Book a 30 minute video call via Calendly or send an email."
        />
        <div className={styles.buttons}>
            <Button href="/" variant="primary">Book a call</Button>
            <Button href="/contact" variant="secondary">E-mail</Button>
        </div>
      </div>
    </section>
  );
};

export default CoffeeChat;
