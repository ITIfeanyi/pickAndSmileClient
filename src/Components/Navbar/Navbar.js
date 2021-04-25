import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.css";
import { UserContext } from "../UserContext";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(
    window.innerWidth > 750 ? true : false
  );
  const { user, handleSignout, isAdmin } = useContext(UserContext);
  let menu;
  const handleWindowResize = () => {
    if (window.innerWidth > 750) {
      setNavOpen(true);
    } else {
      setNavOpen(false);
    }
  };
  window.addEventListener("resize", handleWindowResize);

  if (navOpen) {
    menu = (
      <div className={styles.navContainer}>
        <div onClick={() => setNavOpen(false)} className={styles.NavMask}>
          <span>
            {" "}
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <div className={styles.navSubcontainer}>
          <ul className={styles.navMenu}>
            <li
              onClick={() => setNavOpen(window.innerWidth > 750 ? true : false)}
            >
              <NavLink activeClassName={styles.selected} to='/'>
                Home
              </NavLink>
            </li>

            {isAdmin && (
              <li
                onClick={() =>
                  setNavOpen(window.innerWidth > 750 ? true : false)
                }
              >
                <NavLink className={styles.selected} to='/new-product'>
                  Add new Product
                </NavLink>
              </li>
            )}

            <li
              onClick={() => setNavOpen(window.innerWidth > 750 ? true : false)}
            >
              <NavLink className={styles.selected} to='/wishlist'>
                Wishlists
              </NavLink>
            </li>
            <li
              onClick={() => setNavOpen(window.innerWidth > 750 ? true : false)}
            >
              {!user && (
                <NavLink
                  onClick={() =>
                    setNavOpen(window.innerWidth > 750 ? true : false)
                  }
                  className={styles.active_navbar}
                  to='/sign-in'
                >
                  Login
                </NavLink>
              )}
            </li>

            <li onClick={() => setNavOpen(false)}>
              {user ? (
                <NavLink
                  className={styles.active_navbar}
                  to='/'
                  onClick={handleSignout}
                >
                  Sign out
                </NavLink>
              ) : (
                <NavLink className={styles.active_navbar} to='/sign-up'>
                  Register
                </NavLink>
              )}
            </li>
          </ul>
        </div>
      </div>
    );
  }

  return (
    <>
      <nav>
        <div className={styles.nav_icon_container}>
          <div className={styles.nav_icon} onClick={() => setNavOpen(true)}>
            <span></span>
            <span></span>
            <span></span>
          </div>

          {menu}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
