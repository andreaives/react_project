import React, {useContext, useState} from "react";
import axios from 'axios';
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
import { useAuth0 } from "@auth0/auth0-react"
import Navbar from "./components/navbar/Navbar"

// import 'bootstrap/dist/css/bootstrap.min.css'
// import Col from "react-bootsrap/Col"

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

  const {user, isAuthenticated, isLoading} = useAuth0();
  console.log(user)
  
  function getUserState() {
    API.getUser(user.email).then(res =>{
      setUserState(res)
      console.log(userState)
    })
  }

  isAuthenticated && (getUserState() )
  return (
    <>
    <UserContext.Provider value={userState}>
    <Router>
    <Navbar/>
    <div className="mainBody">
    <div id="stars"></div>
    <div id="stars2"> </div>
    <div id="stars3"> </div>
    <div id="title"></div>
    <Route exact path="/" component = { Login } />
    <Route exact path="/main" component = { Main } />
    <Route exact path="/profile" component = { Profile } />
    <Route exact path="/journal" component = { JournalPage } />
    <Route exact path="/edit" component = { CreateAccount } />
    </div> 
    </Router>
    </UserContext.Provider>

    </>
  )
}
export default App;
