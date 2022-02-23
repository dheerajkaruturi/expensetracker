import React from "react";
import styles from "./header.module.css";

const Header = function () {
  return (
    <nav className={styles.navigation}>
      <h1 className={styles.heading}>React Bankist</h1>
      <h2 className={styles.titleName}>
        Hey Johnas, <span>Good Morning</span>
          </h2>
          <button className={styles.logoutButton}>Logout</button>
    </nav>
  );
};

export default Header;
