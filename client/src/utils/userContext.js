import React from "react";

const UserContext = React.createContext({
  userID: "",
  userBirthday: ""
});

export default UserContext;