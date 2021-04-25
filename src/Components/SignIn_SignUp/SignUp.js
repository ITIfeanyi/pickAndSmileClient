import React, { useContext } from "react";
import { Link, Redirect } from "react-router-dom";
import styles from "./SignIn_signUp.module.css";
import EmptyHeader from "../Header/EmptyHeader";
import { UserContext } from "../UserContext";

const SignUp = () => {
  const {
    handleUserRegister,
    handleRegister,
    passwordError,
    emailError,
    phoneNumError,
    nameError,
    user,
  } = useContext(UserContext);

  return (
    <>
      {user && <Redirect to='/' />}
      <div className={styles.signIn_body}>
        <div className={styles.EmptyHeader}>
          <EmptyHeader />
        </div>
        <div className={styles.signIn_container}>
          <form onSubmit={handleRegister}>
            <div className={styles.form_container}>
              <div className={styles.form_name}>
                <label htmlFor='name'>Name</label>
                <input
                  type='text'
                  name='name'
                  placeholder='ifeanyi igweh'
                  onChange={handleUserRegister}
                />
                <p className={styles.error_msg}> {nameError}</p>
              </div>
              <div className={styles.form_email}>
                <label htmlFor=''>Email</label>
                <input
                  type='email'
                  name='email'
                  placeholder='ifeanyiigweh200@gmail.com'
                  onChange={handleUserRegister}
                />
                <p className={styles.error_msg}> {emailError}</p>
              </div>
              <div className={styles.form_email}>
                <label htmlFor=''>Phone number</label>
                <input
                  type='text'
                  name='phoneNum'
                  onChange={handleUserRegister}
                />
                <p className={styles.error_msg}> {phoneNumError}</p>
              </div>
              <div className={styles.form_password}>
                <label htmlFor='password'>Password</label>
                <input
                  type='password'
                  name='password'
                  placeholder='Passwords must be at least 6 characters'
                  onChange={handleUserRegister}
                />
                <p className={styles.error_msg}> {passwordError}</p>
              </div>
              <div className={styles.form_btn_container}>
                <button className={styles.form_btn} type='submit'>
                  Create an account
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
          </form>
          <div className={styles.account}>
            <p>Have an account?</p>
            <Link to='/sign-in'> Sign In</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
