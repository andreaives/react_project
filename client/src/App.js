import React, {useContext, useState} from "react";
import Navbar from "./components/Navbar"
import UserContext from "./utils/userContext.js"

function App() {
  const [userState, setUserState] = useState({
    userID: "",
    userBirthday: ""
  });
  return (
    <>
    <UserContext.Provider>
    <Navbar />
    </UserContext.Provider>
    </>
  )
}

export default App;

//is there an old activity that used it?
