import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const EmptyHeader = () => {
  return (
    <div className={styles.empty_header_logo}>
      <NavLink to='/'>
        <p>Pick and Smile</p>
      </NavLink>
    </div>
  );
};

export default EmptyHeader;
