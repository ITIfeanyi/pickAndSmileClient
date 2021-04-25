import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faShoppingCart,
  faUser,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import { ProductContext } from "../ProductContext";

import styles from "./NavFooter.module.css";
import { NavLink } from "react-router-dom";

const NavFooter = () => {
  const { wishlist } = useContext(ProductContext);

  return (
    <>
      <div className={styles.NavFooter_Container}>
        <div className={styles.NavFooter_Subcontainer}>
          <div className={styles.NavFooter_Link}>
            <NavLink exact to='/' activeClassName={styles.selected}>
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
            <NavLink
              to='/wishlist'
              id={styles.test}
              activeClassName={styles.selected}
            >
              <span className={styles.wishlist_count}>{wishlist.length}</span>{" "}
              <FontAwesomeIcon
                className={styles.fontawsomeIcon}
                icon={faHeart}
              />{" "}
              <span className={styles.selectedText}>Wishlist</span>
            </NavLink>
          </div>
          <div>
            <NavLink to='/sign-in' activeClassName={styles.selected}>
              {" "}
              <FontAwesomeIcon
                className={styles.fontawsomeIcon}
                icon={faUser}
              />{" "}
              <span className={styles.selectedText}>Account</span>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavFooter;
