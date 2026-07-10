import { useState } from "react";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { HiArrowRight } from "react-icons/hi";
import styles from "./Contact.module.css";

const ContactForm = () => {
  const [status, setStatus] = useState({
  type: "",
  message: "",
});

const {
  register,
  handleSubmit,
  reset,
  formState: { errors, isSubmitting },
} = useForm({
  mode: "onTouched",
});

const onSubmit = async (data) => {
  try {
    setStatus({
      type: "",
      message: "",
    });

    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        name: data.name,
        email: data.email,
        subject: data.subject,
        message: data.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setStatus({
      type: "success",
      message:
        "Message sent successfully! I'll get back to you soon.",
    });

    reset();
  } catch (error) {
    console.error(error);

    setStatus({
      type: "error",
      message:
        "Something went wrong. Please try again.",
    });
  }
};
  return (
    <div className={styles.formCard}>
      <div className={styles.formHeader}>
    <h3 className={styles.formTitle}>Get In Touch</h3>

      <p className={styles.formSubtitle}>
        Whether you have a job opportunity, collaboration, project, or any question,
        feel free to reach out. I'll do my best to get back to you as soon as
        possible.
      </p>
    </div>

      <form
        className={styles.form}
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <div className={styles.formGroup}>
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            placeholder="John Doe"
            {...register("name", {
              required: "Please enter your name.",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters.",
              },
            })}
          />
          
          {errors.name && (
            <span className={styles.error}>
              {errors.name.message}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            placeholder="john@example.com"
            {...register("email", {
              required: "Please enter your email.",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Please enter a valid email.",
              },
            })}
          />
          
          {errors.email && (
            <span className={styles.error}>
              {errors.email.message}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="subject">Subject</label>
          <input
            id="subject"
            type="text"
            placeholder="What's this about?"
            {...register("subject", {
              required: "Please enter a subject.",
            })}
          />
          
          {errors.subject && (
            <span className={styles.error}>
              {errors.subject.message}
            </span>
          )}
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Message</label>

          <textarea
            id="message"
            rows="6"
            placeholder="Tell me how I can help you..."
            {...register("message", {
              required: "Please enter your message.",
              minLength: {
                value: 10,
                message: "Message should be at least 10 characters.",
              },
            })}
          />

{errors.message && (
  <span className={styles.error}>
    {errors.message.message}
  </span>
)}
        </div>

        <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
          <span>
            {isSubmitting ? "Sending..." : "Send Message"}
          </span>
          <HiArrowRight />
        </button>
      </form>

      {status.message && (
        <div
          className={`${styles.alert} ${
            status.type === "success"
              ? styles.success
              : styles.errorAlert
          }`}
        >
          {status.message}
        </div>
      )}
    </div>
  );
};

export default ContactForm;