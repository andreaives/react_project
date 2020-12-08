import React from "react"
import { useAuth0 } from '@auth0/auth0-react';
import LoginButton from "../components/loginButton/LoginButton"

function LoginPage() {
// console.log( user)
  return(
    <>
      <div>
      <LoginButton  />
      </div>
    </>
  )
}

export default LoginPage
