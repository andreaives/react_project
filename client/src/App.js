import React, {useContext, useState} from "react";
import UserContext from "./utils/userContext.js"
import "./App.scss"
import "./App.css"
import Main from "./pages/Main.js";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Profile from "./pages/Profile.js"
import JournalPage from "./pages/Journal.js"
import CreateAccount from "./pages/CreateAccount"
import API from "./utils/API.js";
import Login from "./pages/Login"
import Resources from "./pages/Resources"
import { useAuth0 } from "@auth0/auth0-react"
import Navbar from "./components/navbar/Navbar"
import AuthProfile from "./components/profile/AuthProfile"
import { Auth0Provider } from '@auth0/auth0-react'


function App() {
  const [userState, setUserState] = useState({
    userID: "",
    email: "",
    name: "",
    userBirthday: "",
    userBirthmonth: "",
    userFJob: "",
    userFRelationship: "",
    userFVacation: "",
    userEntries: []
  });

  const { user, isAuthenticated, isLoading } = useAuth0();

  // function getUserState() {
  //   API.getUser().then(res => {
  //     setUserState(res)
  //   })

  // }
  // function createUser() {
  //   {isAuthenticated && (
  //   setUserState({email: email})
  //   )}
  // }
  const domain = process.env.REACT_APP_AUTH0_DOMAIN;
  const clientId = process.env.REACT_APP_AUTH0_CLIENT_ID;
  {console.log(userState)}
  // function getJournal(){
  //    //retrieve entries assigned to a user based on the userID variable in state
  //    //set state variable entries to the array of entries recieved back
  // }
  //this is required to run the submit form page as a pop up module.
  const triggerText = 'Open Form';
  const entrySubmit = event => {
  event.preventDefault();
  console.log(event.target.title.value);
  console.log(event.target.message.value);
  
  };
  return (
    <>
    <UserContext.Provider value={userState}>
    <Auth0Provider
    domain={domain}
    clientId={clientId}
    redirectUri={"http://localhost:3000/main"}>
    <Router>
    <Navbar/>
    <AuthProfile />
    <div className="mainBody">
    <div id="stars"></div>
    <div id="stars2"> </div>
    <div id="stars3"> </div>
    <div id="title"></div>
    <Route exact path="/" component = { Login } />
    <Route exact path="/main" component = { Main } triggerText={triggerText} onSubmit={entrySubmit} />
    <Route exact path="/profile" component = { Profile } />
    <Route exact path="/journal" component = { JournalPage } />
    <Route exact path="/resources" component = { Resources } />
    <Route exact path="/edit" component = { CreateAccount } />
    </div> 
    </Router>
    </Auth0Provider>
    </UserContext.Provider>

    </>
  )
}

export default App;
