import React from "react";
import styles from "./CssLoader.module.css";

const CssLoader = () => {
  return (
    <div>
      <div className={styles.lds_dual_ring}></div>
    </div>
  );
};

export default CssLoader;
