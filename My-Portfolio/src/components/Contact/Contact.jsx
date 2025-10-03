import emailIcon from '../../../assets/contact/emailIcon.png'
import linkedinIcon from '../../../assets/contact/linkedinIcon.png'
import githubIcon from '../../../assets/contact/githubIcon.png'
import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:harishkumarjagadeesan@gmail.com">Gmail</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/harishkumarjagadeesan">LinkedIn</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://www.github.com/Harishkumar-J">Github</a>
        </li>
      </ul>
    </footer>
  );
};
