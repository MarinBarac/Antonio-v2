"use client";

import clsx from "clsx";

import { useForm } from "react-hook-form";
import FormInput from "./FormInput";
import Button from "@components/Button";

import styles from "./ContactForm.module.scss";

const defaultValues = {
  fullName: "",
  email: "",
  message: "",
};

const ContactForm = () => {
  const {
    handleSubmit,
    control,
    trigger,
    isSubmitted,
    reset,
    formState: { errors },
  } = useForm({ ...defaultValues });

  const onSubmit = () => {
    console.log("submitted");
    reset();
  };

  return (
    <section className={clsx("section", styles.container)}>
      <p className={styles.description}>
        If you are not into video calls and all those things, I will check my
        Inbox.
      </p>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <FormInput
          control={control}
          name="fullName"
          type="text"
          placeHolder="Chuck Norris"
          label="Full name"
          trigger={trigger}
          formSubmitted={isSubmitted}
          error={errors.fullName}
        />
        <FormInput
          control={control}
          name="email"
          type="text"
          placeHolder="you@company.com"
          label="Email"
          trigger={trigger}
          formSubmitted={isSubmitted}
          error={errors.email}
        />
        <FormInput
          type="textarea"
          name="message"
          placeHolder="Leave funny message or not..."
          label="Message"
          control={control}
        />
        <Button variant="primary">Send message</Button>
      </form>
    </section>
  );
};

export default ContactForm;
