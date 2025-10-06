import aboutImage from "../../../assets/about/aboutImage.png";
import react from "../../../assets/about/react.png";
import dataAnalyst from "../../../assets/about/dataAnalyst.png";
import bi from "../../../assets/about/bi.png";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img src={aboutImage} alt="Work life" className={styles.aboutImage} />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={dataAnalyst} alt="dataAnalysis icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
                I love exploring data and uncovering insights that help drive
                smarter business decisions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={bi} alt="bi icon" />
            <div className={styles.aboutItemText}>
              <h3>Business Intelligence Developer</h3>
              <p>
                I design clean, interactive dashboards and automate reports to
                make analytics accessible to everyone.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={react} alt="frontend icon" />
            <div className={styles.aboutItemText}>
              <h3>React Developer</h3>
              <p>
                I build responsive, accessible interfaces and connect them to reliable data APIs
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
