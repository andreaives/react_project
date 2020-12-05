import React, {useContext, useState} from "react";
import UserContext from "./utils/userContext.js"
import "./App.scss"
import "./App.css"
import Main from "./pages/Main.js";

// import 'bootstrap/dist/css/bootstrap.min.css'
// import Col from "react-bootsrap/Col"

function App() {
  const [userState, setUserState] = useState({
    userID: "",
    userBirthday: "",
    userFJob: "",
    userFRelationship: "",
    userFVacation: "",
    userEntries: []
  });
  // gotta make sure he can hear me
  function RandomJob(){
    const jobNum = Math.floor(Math.random() * 10)
    
    //set it to state
  }
  function RandomRelationship(){
    const relNum = Math.floor(Math.random() * 5)
    
     //set it to state
  }
  function RandomVacation(){
    const vacNum = Math.floor(Math.random() *30)
    
     //set it to state
  }
  // function getJournal(){
  //    //retrieve entries assigned to a user based on the userID variable in state
  //    //set state variable entries to the array of entries recieved back
  // }
  return (
    <>
    <UserContext.Provider value={userState}>
    {/* This div only renders once someone is logged in */}
    
    <div className="mainBody">
    <div id="stars"></div>
    <div id="stars2"> </div>
    <div id="stars3"> </div>
    <div id="title"></div>
    
    <Main />
    {/* This div displays on default page load or on signout */}
    {/* <div> */}
      {/* <LOGIN></LOGIN> */}
    </div>
    </UserContext.Provider>

    </>
  )
}
export default App;
