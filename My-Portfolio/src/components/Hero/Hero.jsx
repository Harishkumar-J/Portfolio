import styles from "./Hero.module.css";
import hero from "./../../../assets/hero/heroImage.png";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Harish</h1>

        <p className={styles.description}>
          I'm a Data enthusiast with 4 years of experience bridging data science and business intelligence.
          Proven track record in dashboarding, statistical modeling, cloud data and frontend solutions.
          Reach out if you'd like to learn more!
        </p>

        <div className={styles.actions}>
          <a
            href="mailto:harishkumarjagadeesan@gmail.com"
            className={styles.contactBtn}
          >
            Contact Me
          </a>

          {/* Resume button — opens in a new tab */}
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.resumeBtn}
            aria-label="Open my resume in a new tab"
            title="Open resume (download from the viewer)"
          >
            <span className={styles.flip}>Resume</span>
            <svg
              className={styles.icon}
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
          </a>
        </div>
      </div>

      <img src={hero} alt="Hero image of me" className={styles.heroImg} />

      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
