import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faCog,
  faShoppingCart,
  faSearch,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./NavFooter.module.css";
import { NavLink } from "react-router-dom";

const NavFooter = () => {
  return (
    <>
      <div className={styles.NavFooter_Container}>
        <div className={styles.NavFooter_Subcontainer}>
          <div className={styles.NavFooter_Link}>
            <NavLink strict to='/nen' activeClassName={styles.selected}>
              {" "}
              <FontAwesomeIcon
                className={styles.fontawsomeIcon}
                icon={faHome}
              />{" "}
            </NavLink>
          </div>
          <div>
            <NavLink to='/cart' activeClassName={styles.selected}>
              {" "}
              <FontAwesomeIcon
                className={styles.fontawsomeIcon}
                icon={faShoppingCart}
                id='cart'
              />{" "}
            </NavLink>
          </div>
          <div>
            <NavLink to='/' activeClassName={styles.selected}>
              {" "}
              <FontAwesomeIcon
                className={styles.fontawsomeIcon}
                icon={faHeart}
              />{" "}
            </NavLink>
          </div>
          <div>
            <NavLink to='/search' activeClassName={styles.selected}>
              {" "}
              <FontAwesomeIcon
                className={styles.fontawsomeIcon}
                icon={faSearch}
              />{" "}
            </NavLink>
          </div>
          <div>
            <NavLink to='/settings' activeClassName={styles.selected}>
              <FontAwesomeIcon className={styles.fontawsomeIcon} icon={faCog} />{" "}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavFooter;
