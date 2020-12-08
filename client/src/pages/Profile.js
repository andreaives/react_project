import React, { useContext } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button"
import CreateAccount from "./CreateAccount.js"
import userContext from "../utils/userContext.js"

function Profile() {
  const {email, name, userBirthday, userBirthmonth} = useContext(userContext)
  return(
    <>
      <div className="profileContainer container-fluid">
        <h1>{name}'s Profile</h1>
        <h2>I predict your email is: {email}</h2>
        <p>(If this is not your email please log out)</p>
        <h2>Your birthday is: {userBirthday}/{userBirthmonth}</h2>
        <Button href="/edit">Edit your Profile</Button>
      </div>
    </>
  )
}

export default Profile