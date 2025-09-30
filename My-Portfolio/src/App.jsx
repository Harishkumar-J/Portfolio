import styles from "./App.module.css";
import { Hero } from "./components/Hero/Hero";
import { About } from "./components/About/About";
import Navbar from "./components/navBar/navBar";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Hero />
      <About />
    </div>
  );
}

export default App;
