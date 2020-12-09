import React, { Component } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Button from "react-bootstrap/Button";
import CreateAccount from "./CreateAccount.js";
import AuthProfile from "../components/profile/AuthProfile";
import Travel from "../components/selectors/Travel"
import Job from "../components/selectors/Job"
import Status from "../components/selectors/Relationship"
import LoginButton from "../components/loginButton/LoginButton";



const Profile = () => {
 const { user, isAuthenticated } = useAuth0();

 return (
  <div className="container row col-12">
   { (!isAuthenticated) ?
    <LoginButton />
    : 
    <div>
     <img src={user.picture} alt={user.name} />
     <h2> {user.name}</h2>
     <p>{user.email} </p>
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
    

   }
  </div>
  
 )


};

export default Profile;
