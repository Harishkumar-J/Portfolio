import styles from './Navbar.module.css'

function Navbar() {
  return (
     <nav className={styles.navBar}>
        <a href='/' className={styles.title}>Portfolio</a>
        <div className={styles.menu}>
            <ul className={styles.menuItems}>
                <li>
                    <a href='#about'>About</a>
                </li>
                <li>
                    <a href='#experience'>Experience</a>
                </li>
                <li>
                    <a href='#Projects'>Projects</a>
                </li>
                <li>
                    <a href='#about'>Contact</a>
                </li>
            </ul>
        </div>
     </nav>
      
  )
}

export default Navbar
