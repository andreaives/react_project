// this could be our journal container that we render on app.js
// this component will use the context to determine the user's ID
// then it will query the database for all journal entries by this user
// then we use that array of entries to map over and render out a card for each entry
import React, { useContext } from "react";
// import UserContext from "../utils/userContext"
import Card from "react-bootstrap/Card";
import { journalData } from "../scripts/journalData.js";

function JournalContainer() {
  // const {entries} = useContext(UserContext)
  let entries = journalData;

  return (
    <div className="journalScroll">
      {entries.map((entry) => (
        <Journal key={entry.userId} {...entry} />
      ))}
    </div>
  );
}

export function Journal(props) {
  return (
    <Card className="journalCard">
      {/* this is where we will recieve the data for the cards */}
      <Card.Title className="journalTitle">{props.title}</Card.Title>
      <Card.Title className="journalData">{props.date}</Card.Title>
      <Card.Text>{props.content}</Card.Text>
    </Card>
  );
}

// Dream Journal component im accepting both for now, im notreally using the top part so it can all be changed if we need to
export default JournalContainer;

