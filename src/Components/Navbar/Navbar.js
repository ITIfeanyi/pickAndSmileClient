import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import styles from "./Navbar.module.css";
import { UserContext } from "../UserContext";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(false);
  const { user, handleSignout, isAdmin } = useContext(UserContext);
  let menu;

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
            <li onClick={() => setNavOpen(false)}>
              <Link to='#'>Home</Link>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <Link to='#'>Orders</Link>
            </li>
            {isAdmin && (
              <li onClick={() => setNavOpen(false)}>
                <Link to='/new-product'>Add new Product</Link>
              </li>
            )}
            <li onClick={() => setNavOpen(false)}>
              <Link to='#'>Pending Reviews</Link>
            </li>
            <li onClick={() => setNavOpen(false)}>
              <Link to='#'>Wishlists</Link>
            </li>
            <li onClick={() => setNavOpen(false)}>
              {user ? (
                <Link to='/' onClick={handleSignout}>
                  Sign out
                </Link>
              ) : (
                <Link to='/sign-up'>Register</Link>
              )}
            </li>
          </ul>
          {!user && (
            <div className={styles.login}>
              <div className={styles.normalLogin}>
                <p>Already a customer? </p>
                <Link onClick={() => setNavOpen(false)} to='/sign-in'>
                  Login
                </Link>
              </div>
              <div className={styles.facbook_google}>
                <div
                  className={styles.faceBookLogin}
                  onClick={() => setNavOpen(false)}
                >
                  FaceBook
                </div>
                <div
                  className={styles.googleLogin}
                  onClick={() => setNavOpen(false)}
                >
                  Google
                </div>
              </div>
            </div>
          )}
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
