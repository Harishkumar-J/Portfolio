import { useState } from "react";
import styles from "./ProjectCard.module.css";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  const [expanded, setExpanded] = useState(false);

  // Open on hover for desktop, toggle on click for mobile
  const enableHoverExpand = () => setExpanded(true);
  const disableHoverExpand = () => setExpanded(false);
  const toggleExpand = () => setExpanded((v) => !v);

  return (
    <article
      className={`${styles.container} ${expanded ? styles.expanded : ""}`}
      onMouseEnter={enableHoverExpand}
      onMouseLeave={disableHoverExpand}
    >
      <img
        src={imageSrc}
        alt={`Preview of ${title}`}
        className={styles.image}
        loading="lazy"
      />

      <h3 className={styles.title}>{title}</h3>

      {/* Description wrapper enables clamp/expand/scroll */}
      <div className={styles.descWrap}>
        <p className={styles.description}>{description}</p>
        {/* Fade only when not expanded */}
        <div className={styles.fade} aria-hidden="true" />
      </div>

      <ul className={styles.skills} aria-label="Technologies used">
        {skills.map((skill, id) => (
          <li key={id} className={styles.skill}>
            {skill}
          </li>
        ))}
      </ul>

      <div className={styles.links}>
        {demo && (
          <a
            href={demo}
            className={styles.link}
            target="_blank"
            rel="noreferrer noopener"
          >
            Demo
          </a>
        )}
        {source && (
          <a
            href={source}
            className={styles.linkGhost}
            target="_blank"
            rel="noreferrer noopener"
          >
            Source
          </a>
        )}

        {/* Mobile-friendly toggle */}
        <button
          type="button"
          className={styles.readMore}
          onClick={toggleExpand}
          aria-expanded={expanded}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      </div>
    </article>
  );
};

