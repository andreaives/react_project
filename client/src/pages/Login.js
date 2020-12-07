import React from "react"
import Navbar from "../components/navbar/Navbar.js"
import LoginButton from "../components/LoginButton.js"
import '@auth0/auth0-react';

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