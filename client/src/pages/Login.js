import React from "react"
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "../components/loginButton/LoginButton"
import Navbar from "../components/navbar/Navbar.js"
<<<<<<< HEAD
import LoginButton from "../components/LoginButton.js"
import '@auth0/auth0-react';
=======

>>>>>>> main

function LoginPage() {

  return(
    <>
      <Navbar />
      <div>
      <LoginButton  />
      </div>
    </>
  )
}

export default LoginPage
