import React, { createContext, useEffect, useState } from "react";
import { Redirect } from "react-router-dom";

export const UserContext = createContext();
const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phoneNumError, setPhoneNumError] = useState("");
  const [nameError, setNameError] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [newRegister, setNewRegister] = useState({
    name: "",
    email: "",
    isAdmin: false,
    password: "",
  });
  const [login, setLogin] = useState({ email: "", password: "" });

  const clearErrorsFromUseState = () => {
    setPhoneNumError("");
    setPasswordError("");
    setEmailError("");
    setNameError("");
  };

  useEffect(() => {
    clearErrorsFromUseState();
  }, []);

  const handleUserRegister = (e) => {
    setNewRegister({ ...newRegister, [e.target.name]: e.target.value });
  };
  const handleRegister = (e) => {
    const { name, email, phoneNum, password } = newRegister;
    e.preventDefault();
    const requestBody = {
      query: `
        mutation{
          createUser(input:{name:"${name}",email:"${email}",phoneNum:"${phoneNum}",password:"${password}"}){
            ok
          errors{
            path
            message
          }
          user{
            userId
            userName
            token
          }
                }
        }
      `,
    };
    fetch(`https://sheltered-basin-40908.herokuapp.com/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.createUser.ok === false) {
          clearErrorsFromUseState();
          Object.values(data.data.createUser.errors).forEach((errors) => {
            console.log(data.data.createUser, "test");
            if (errors.path === "password") {
              setPasswordError(errors.message);
            } else if (errors.path === "email") {
              setEmailError(errors.message);
            } else if (
              errors.path === "Phone Number" ||
              errors.path === "phoneNum"
            ) {
              setPhoneNumError(errors.message);
            } else if (errors.path === "name") {
              setNameError(errors.message);
            }
          });
        }
        if (data.data.createUser.user) {
          setUser(data.data.createUser.user.userName);
          setIsAdmin(data.data.createUser.user.isAdmin);
        }
      });
  };

  const handleUserLogin = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value });
  };
  const handleLogin = async (e) => {
    const { email, password } = login;
    e.preventDefault();

    const requestBody = {
      query: `
      query{
        login(email:"${email}",password:"${password}"){
          ok
          errors{
            path
            message
          }
          user{
            userId
            userName
            isAdmin
          }
        }
      }
      `,
    };
    fetch(`https://sheltered-basin-40908.herokuapp.com/graphql`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(requestBody),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.data.login.ok === false) {
          clearErrorsFromUseState();

          Object.values(data.data.login.errors).forEach((errors) => {
            if (errors.path === "email") {
              setEmailError(errors.message);
            } else if (errors.path === "password") {
              setPasswordError(errors.message);
            }
          });
        }
        if (data.data.login.ok === true) {
          clearErrorsFromUseState();
          setUser(data.data.login.user.userName);
          setIsAdmin(data.data.login.user.isAdmin);
        }
      });
  };

  const handleSignout = () => {
    setLogin({ email: "", password: "" });
    setIsAdmin(false);
    setUser("");
    <Redirect to='/' />;
  };

  return (
    <UserContext.Provider
      value={{
        handleUserRegister,
        handleRegister,
        handleUserLogin,
        handleLogin,
        passwordError,
        emailError,
        phoneNumError,
        nameError,
        clearErrorsFromUseState,
        user,
        handleSignout,
        isAdmin,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
