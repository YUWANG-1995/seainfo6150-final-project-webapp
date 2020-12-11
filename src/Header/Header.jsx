import React from "react";
import logo from "../images/logos/homeLogo.jpg";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.container}>
      <nav>
          <div>
            <Link to="/"><img className={styles.headerLogo} src={logo} alt="logo-img"/></Link>
          </div>
          <ul className={styles.navbar}>
          <li>
            <Link className={styles.navLink} to="/">Home</Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/brands">All Brands</Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/aboutUs">About Us</Link>
          </li>
          <li>
            <Link className={styles.navLink} to="/contactUs">Contact Us</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
