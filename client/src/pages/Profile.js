import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import Button from "react-bootstrap/Button";
import CreateAccount from "./CreateAccount.js";
import AuthProfile from "../components/profile/AuthProfile";
import Container from "react-bootstrap/esm/Container";
import Travel from "../components/selectors/Travel"
import Job from "../components/selectors/Job"
import Status from "../components/selectors/Relationship"

// const Profile = () =>{
//   const { user, isAuthenticated } = useAuth0();
//   return(

//     isAuthenticated (
//     <>

//       <div className="profileContainer container-fluid">
//         <h1>{user.name}</h1>
//         <h2>I predict your email is: text@test.com</h2>
//         <p>(If this is not your email please log out)</p>
//         <h2>Your birthday is: MM/DD</h2>
//         <Button href="/edit">Edit your Profile</Button>
//       </div>
//     </>
//   )
//   )
// }
const Profile = () => {
  const { user, isAuthenticated } = useAuth0();
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          {!isAuthenticated ? (
            <div>
              <div className="profileContainer container-fluid">
                <h1>TEST PROFILE</h1>
                <h2>I predict your email is: text@test.com</h2>
                <p>(If this is not your email please log out)</p>
                <h2>Your birthday is: MM/DD</h2>
                <Button href="/edit">Edit your Profile</Button>
              </div>
            </div>
          ) : (
            <div>
              <img src={user.picture} alt={user.name} />
              <h2> {user.name}</h2>
              <p>{user.email} </p>
            </div>
          )}
        </div>
      </div>
      <div className="row container-fluid">
        <div className="col-3">
            <Job/>
        </div>
        <div className="col-6">
            <Travel/>
        </div>
        <div className="col-3">
            <Status/>
        </div>
      </div>
    </div>
  );
};

export default Profile;
