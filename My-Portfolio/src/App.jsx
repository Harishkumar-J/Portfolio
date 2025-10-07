import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import { Experience } from "./components/Experience/Experience";
import { Projects } from "./components/Projects/Projects";
import { Contact } from "./components/Contact/Contact";
import { ScrollToTop } from "./components/ScrollToTop/ScrollToTop";
import { NavigationBar } from "./components/NavigationBar/NavigationBar";


function App() {
  return (
    <div className={styles.App}>
      <NavigationBar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <ScrollToTop />
    </div>
  );
}

export default App;
