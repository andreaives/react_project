// this could be our journal container that we render on app.js
// this component will use the context to determine the user's ID
// then it will query the database for all journal entries by this user
// then we use that array of entries to map over and render out a card for each entry
import React, { useContext } from "react"
import UserContext from "../utils/userContext"
import Journal from "./journals/Dream.js"

function journalContainer(){
  const {entries} = useContext(UserContext)

  return(
    <div>
      {/* {entries.map(entry =>  (<Journal key={entry.userId} {...entry}/> ))} */}
    </div>
  )
}

export default journalContainer