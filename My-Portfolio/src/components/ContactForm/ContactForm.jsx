import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  const formRef = useRef(null);
  const [state, setState] = useState("idle"); // 'idle' | 'sending' | 'sent' | 'error'
  const [error, setError] = useState("");

  // EmailJS keys from env (add these in .env and Netlify env)
  const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
  const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
  const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

  const onSubmit = async (e) => {
    e.preventDefault();
    setState("sending");
    setError("");

    try {
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, {
        publicKey: PUBLIC_KEY,
      });
      formRef.current?.reset();
      setState("sent");
    } catch (err) {
      console.error(err);
      setError("Could not send. Please try again.");
      setState("error");
    }
  };

  const resetForm = () => {
    setState("idle");
    setError("");
    formRef.current?.reset();
  };

  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Get in Touch</h2>
      <p className={styles.subtitle}>
        Have a question, project idea, or just want to connect? Drop me a message below.
      </p>

      {/* Success view reuses the same card; no layout shifts */}
      {state === "sent" ? (
        <div className={styles.successBox}>
          <div className={styles.bigTick} aria-hidden>✓</div>
          <h4>Message sent!</h4>
          <p>Thanks — I’ll get back to you soon.</p>
          <button onClick={resetForm} className={styles.secondaryBtn}>
            Send another message
          </button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={onSubmit} className={styles.form}>
          <div className={styles.inputGroup}>
            <input
              name="from_name"
              type="text"
              placeholder="Your Name"
              required
              autoComplete="name"
            />
            <input
              name="from_email"
              type="email"
              placeholder="Your Email"
              required
              autoComplete="email"
            />
          </div>

          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            required
          />

          {/* simple honeypot to deter bots */}
          <input
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            style={{ display: "none" }}
          />

          <button
            type="submit"
            className={styles.submitBtn}
            disabled={state === "sending"}
          >
            {state === "sending" ? "Sending…" : "Send Message"}
          </button>

          {state === "error" && (
            <div className={styles.error}>{error}</div>
          )}
        </form>
      )}
    </section>
  );
};
