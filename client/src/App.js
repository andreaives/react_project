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
import Resources from "./pages/Resources"
import { useAuth0 } from "@auth0/auth0-react"
import Navbar from "./components/navbar/Navbar"
import AuthProfile from "./components/profile/AuthProfile"

// import 'bootstrap/dist/css/bootstrap.min.css'
// import Col from "react-bootsrap/Col"

function App() {
  const [userState, setUserState] = useState({
    userID: "",
    email: "",
    userBirthday: "",
    userFJob: "",
    userFRelationship: "",
    userFVacation: "",
    userEntries: []
  });

  const {user, isAuthenticated, isLoading} = useAuth0(); 

  function getUserState() {
    API.getUser().then(res =>{
      setUserState(res)
    })

  }

  getUserState()
  // function getJournal(){
  //    //retrieve entries assigned to a user based on the userID variable in state
  //    //set state variable entries to the array of entries recieved back
  // }
//this is required to run the submit form page as a pop up module.
  const triggerText = 'Open Form';
  const onSubmit = (event) => {
  event.preventDefault(event);
 //consloe logs our respose now. needs to connect to backend...
  console.log(event.target.title.value);
  console.log(event.target.message.value);
  };
  return (
    <>
    <UserContext.Provider value={userState}>
    <Router>
    <Navbar/>
    <AuthProfile />
    <div className="mainBody">
    <div id="stars"></div>
    <div id="stars2"> </div>
    <div id="stars3"> </div>
    <div id="title"></div>
    <Route exact path="/" component = { Login } />
    <Route exact path="/main" component = { Main } triggerText={triggerText} onSubmit={onSubmit}/>
    <Route exact path="/profile" component = { Profile } />
    <Route exact path="/journal" component = { JournalPage } />
    <Route exact path="/resources" component = { Resources } />
    <Route exact path="/edit" component = { CreateAccount } />
    </div> 
    </Router>
    </UserContext.Provider>

    </>
  )
}
export default App;
