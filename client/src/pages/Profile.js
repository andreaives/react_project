import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button"
import CreateAccount from "./CreateAccount.js"

function Profile() {
  return(
    <>
      <div className="profileContainer container-fluid">
        <h1>TEST PROFILE</h1>
        <h2>I predict your email is: text@test.com</h2>
        <p>(If this is not your email please log out)</p>
        <h2>Your birthday is: MM/DD</h2>
        <Button href="/edit">Edit your Profile</Button>
      </div>
    </>
  )
}

export default Profile