import { useState } from "react";
import styles from "./ContactForm.module.css";

export const ContactForm = () => {
  const [status, setStatus] = useState("Send Message");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // --- Option A: Netlify form submission ---
    // Netlify handles form submissions automatically.
    e.target.submit();

    // --- Option B: EmailJS (uncomment if using EmailJS) ---
    // import emailjs from '@emailjs/browser';
    // emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_PUBLIC_KEY')
    //   .then(() => setStatus("Message Sent ✅"))
    //   .catch(() => setStatus("Error ❌"));
  };

  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Get in Touch</h2>
      <p className={styles.subtitle}>
        Have a question, project idea, or just want to connect? Drop me a message below.
      </p>

      <form
        className={styles.form}
        onSubmit={handleSubmit}
        method="POST"
        data-netlify="true"
        name="contact"
      >
        <input type="hidden" name="form-name" value="contact" />

        <div className={styles.inputGroup}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>

        <textarea
          name="message"
          rows="6"
          placeholder="Your Message"
          required
        ></textarea>

        <button type="submit" className={styles.submitBtn}>
          {status}
        </button>
      </form>
    </section>
  );
};
