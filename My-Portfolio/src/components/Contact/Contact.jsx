import emailIcon from "/assets/contact/emailIcon.png";
import linkedinIcon from "/assets/contact/linkedinIcon.png";
import githubIcon from "/assets/contact/githubIcon.png";
import whatsappIcon from "/assets/contact/whatsappIcon.png";

import styles from "./Contact.module.css";

import { ContactForm } from "../ContactForm/ContactForm";

export const Contact = () => {
  return (
    <footer id="connect" className={styles.container}>
      <div className={styles.leftCol}>
        <div className={styles.text}>
          <h2>Let's Connect</h2>
          <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
          <li className={styles.link}>
            <img src={emailIcon} alt="Email icon" />
            <a
              href="mailto:harishkumarjagadeesan@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gmail
            </a>
          </li>
          <li className={styles.link}>
            <img src={linkedinIcon} alt="LinkedIn icon" />
            <a
              href="https://www.linkedin.com/in/harishkumarjagadeesan"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
          <li className={styles.link}>
            <img src={githubIcon} alt="Github icon" />
            <a
              href="https://www.github.com/Harishkumar-J"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github
            </a>
          </li>
          <li className={styles.link}>
            <img src={whatsappIcon} alt="WhatsApp icon" />
            <a
              href="https://api.whatsapp.com/send?phone=447827770641&text=Hi%20Harish!%20I%20found%20your%20portfolio%20and%20wanted%20to%20connect."
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </li>
        </ul>
      </div>
      <div className={styles.rightCol}>
        <ContactForm />
      </div>
    </footer>
  );
};
