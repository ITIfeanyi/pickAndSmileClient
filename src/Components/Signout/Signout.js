import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Signout = () => {
  const { handleSignout } = useContext(UserContext);
  return <div onClick={handleSignout}></div>;
};

export default Signout;
