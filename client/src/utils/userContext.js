import React from "react";

const UserContext = React.createContext({
  userID: "",
  email: "",
  name: "",
  userBirthday: "",
  userBirthmonth: "",
  userFJob: "",
  userFRelationship: "",
  userFVacation: "",
  userEntries: [],
  signedIn: false
});

export default UserContext;