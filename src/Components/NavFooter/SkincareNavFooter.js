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

const SkincareNavFooter = () => {
  return (
    <>
      <div className={styles.NavFooter_Container}>
        <div className={styles.NavFooter_Subcontainer}>
          <div className={styles.NavFooter_Link}>
            <NavLink exact to='/skincare' activeClassName={styles.selected}>
              {" "}
              <FontAwesomeIcon
                className={styles.fontawsomeIcon}
                icon={faHome}
              />{" "}
              <span className={styles.selectedText}>Home</span>
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
              <span className={styles.selectedText}>Cart</span>
            </NavLink>
          </div>
          <div>
            <NavLink to='/wishlist' activeClassName={styles.selected}>
              {" "}
              <FontAwesomeIcon
                className={styles.fontawsomeIcon}
                icon={faHeart}
              />{" "}
              <span className={styles.selectedText}>Wishlist</span>
            </NavLink>
          </div>
          <div>
            <NavLink to='/search' activeClassName={styles.selected}>
              {" "}
              <FontAwesomeIcon
                className={styles.fontawsomeIcon}
                icon={faSearch}
              />{" "}
              <span className={styles.selectedText}>Search</span>
            </NavLink>
          </div>
          <div>
            <NavLink to='/settings' activeClassName={styles.selected}>
              <FontAwesomeIcon className={styles.fontawsomeIcon} icon={faCog} />{" "}
              <span className={styles.selectedText}>Setting</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkincareNavFooter;
