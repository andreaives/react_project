import React from "react";
import { useAuth0 } from '@auth0/auth0-react';
import './loginButton.css'

const LoginButton = () => {
 const { loginWithRedirect } = useAuth0();
 

  return ( 
  <button className="login" onClick={() => loginWithRedirect()}>Log In or Sign Up With Your Google Account</button>
  );
};


export default LoginButton;
