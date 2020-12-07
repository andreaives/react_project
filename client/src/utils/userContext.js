import React from "react";

const UserContext = React.createContext({
  userID: "",
  email: "Test@test.com",
  userBirthday: ""
});

export default UserContext;