"use client";

import { useContext, useState } from "react";
import clsx from "clsx";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import FormInput from "./FormInput";
import Button from "@components/Button";
import LoadingSpinner from "@components/LoadingSpinner";
import ThemeContext from "@context/context";
import sendEmail from "@services/mail/sendEmail";

import styles from "./ContactForm.module.scss";

import "react-toastify/dist/ReactToastify.min.css";

const defaultValues = {
  fullName: "",
  email: "",
  message: "",
};

const formSchema = z.object({
  fullName: z.string().min(1, { message: "Full name is required!" }),
  email: z
    .string()
    .min(1, { message: "Email is required!" })
    .email({ message: "Please enter valid email!" }),
  message: z.string(),
});

const ContactForm = () => {
  const { isDark } = useContext(ThemeContext);
  const [isSending, setIsSending] = useState(false);

  const {
    handleSubmit,
    control,
    trigger,
    isSubmitted,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: { ...defaultValues },
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    setIsSending(true);
    try {
      const response = await sendEmail({
        url: "/api/contact",
        mailData: { ...data },
      });
      if (!response) {
        throw new Error();
      }
      toast.success("High five, you managed to send an email!", {
        className: "success_toast",
      });
      reset();
    } catch (error) {
      toast.error("Fuck it. It didn't work. Say thanks to Marin.", {
        className: "fail-toast",
      });
    } finally {
      setIsSending(false);
    }
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
        <Button variant="primary" style={{ minWidth: "146px" }}>
          {isSending ? <LoadingSpinner /> : "Send message"}
        </Button>
      </form>
      <ToastContainer
        autoClose={false}
        hideProgressBar={true}
        position="bottom-left"
        theme={isDark ? "dark" : "light"}
        closeButton={true}
      />
    </section>
  );
};

export default ContactForm;
