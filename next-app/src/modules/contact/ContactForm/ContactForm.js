"use client";

import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import clsx from "clsx";

import Button from "@components/Button";
import LoadingSpinner from "@components/LoadingSpinner";
import sendEmail from "@services/mail/sendEmail";

import Input from "./Inputs/Input";
import Textarea from "./Inputs/Textarea";
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
  const [isSending, setIsSending] = useState(false);

  const {
    handleSubmit,
    control,
    trigger,
    isSubmitted,
    reset,
    setFocus,
    getValues,
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
      <div className={styles.container}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <Input
            control={control}
            name="fullName"
            type="text"
            label="Full name*"
            value={getValues().fullName}
            trigger={trigger}
            formSubmitted={isSubmitted}
            error={errors.fullName}
            setFocus={setFocus}
          />
          <Input
            control={control}
            name="email"
            type="text"
            label="Email*"
            value={getValues().email}
            trigger={trigger}
            formSubmitted={isSubmitted}
            error={errors.email}
            setFocus={setFocus}
          />
          <Textarea
            name="message"
            label="Message*"
            control={control}
            trigger={trigger}
            value={getValues().message}
            error={errors.message}
            setFocus={setFocus}
          />
          <Button variant="primary" type="submit" style={{ minWidth: "146px" }}>
            {isSending ? <LoadingSpinner /> : "Send inquiry"}
          </Button>
        </form>
      </div>
      <ToastContainer
        autoClose={false}
        hideProgressBar={true}
        position="bottom-left"
        theme={"dark"}
        closeButton={true}
        closeOnClick={false}
      />
    </section>
  );
};

export default ContactForm;
