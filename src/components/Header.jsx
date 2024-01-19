import React from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <div>
      <h1 className={styles.heading}>
        Text to Speech
        <span className={styles.converter}> Converter</span>
      </h1>
    </div>
  );
}

export default Header;
