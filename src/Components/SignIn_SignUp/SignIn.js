import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import styles from "./SignIn_signUp.module.css";
import EmptyHeader from "../Header/EmptyHeader";
import { UserContext } from "../UserContext";

const SignIn = () => {
  const {
    handleUserLogin,
    handleLogin,
    emailError,
    passwordError,
    user,
  } = useContext(UserContext);

  return (
    <>
      {user && <Redirect to='/' />}
      <div>
        <div className={styles.EmptyHeader}>
          <EmptyHeader />
        </div>
        <div className={styles.signIn_container}>
          <div className={styles.signIn_subcontainer}></div>
          <form onSubmit={handleLogin}>
            <div className={styles.form_container}>
              <div className={styles.form_email}>
                <label htmlFor=''>Email</label>
                <input
                  type='email'
                  name='email'
                  placeholder='ifeanyiigweh200@gmail.com'
                  onChange={handleUserLogin}
                />
                <p className={styles.error_msg}> {emailError}</p>
              </div>
              <div className={styles.form_password}>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  placeholder='Passwords must be at least 6 characters'
                  onChange={handleUserLogin}
                />

                <p className={styles.error_msg}> {passwordError}</p>
              </div>
              <div className={styles.form_btn_container}>
                <button className={styles.form_btn} type='submit'>
                  Sign In
                </button>
              </div>
            </div>
            <p className={styles.accept}>
              By creating an account, you accept the term of condition of Pick
              and smile.{" "}
              <Link className={styles.link} to='/#'>
                Learn more
              </Link>
            </p>
            <div className={styles.account}>
              <p>Don't have an account?</p>
              <Link to='/sign-up'> Sign Up</Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
