import React from "react";
import styles from "./CssLoader1.module.css";

const CssLoader1 = () => {
  return (
    <div className={styles.lds_facebook_container}>
      <div className={styles.lds_facebook}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default CssLoader1;
