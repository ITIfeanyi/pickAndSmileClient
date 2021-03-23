import React from "react";
import styles from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const EmptyFooter = () => {
  return (
    <div>
      <div className={styles.EmptyFooter_container}>
        <li>Terms and condition</li>
        <li> Privacy</li>
        <li>Copyright</li>
      </div>
      <div className={styles.EmptyFooter_subcontainer}>
        <p> &copy; 2020, All right reserved pickandsmile.com </p>
        <p>
          Made with{" "}
          <span className={styles.icon_heart}>
            <FontAwesomeIcon icon={faHeart} />{" "}
          </span>{" "}
          by Ifeanyi Igweh{" "}
        </p>
      </div>
    </div>
  );
};

export default EmptyFooter;
