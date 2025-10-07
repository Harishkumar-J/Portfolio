import styles from "./Navbar.module.css";
import { useEffect, useState } from "react";
import menuIcon from "/assets/nav/menuIcon.png";
import closeIcon from "/assets/nav/closeIcon.png";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Close on ESC and when resizing to desktop
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && setMenuOpen(false);
    const onResize = () => window.innerWidth > 830 && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Hide on scroll down, show on scroll up
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y < 10) {
        setVisible(true);
      } else if (y > lastScrollY) {
        setVisible(false); // scrolling down
      } else {
        setVisible(true);  // scrolling up
      }
      setLastScrollY(y);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [lastScrollY]);

  // Show if mouse near top (e.g., user moves pointer to top edge)
  useEffect(() => {
    const onMove = (e) => {
      if (e.clientY < 100) setVisible(true);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  const toggle = () => setMenuOpen((v) => !v);
  const close = () => setMenuOpen(false);

  return (
    <nav className={`${styles.navBar} ${!visible ? styles.hidden : ""}`}>
      <a href="/" className={styles.title}>Portfolio</a>

      <div className={styles.menu}>
        <button
          type="button"
          className={styles.menuBtn}
          aria-expanded={menuOpen}
          aria-controls="nav-items"
          onClick={toggle}
        >
          <img src={menuOpen ? closeIcon : menuIcon} alt="Menu" />
        </button>

        <ul
          id="nav-items"
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={(e) => e.target.tagName === "A" && close()}
        >
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
