import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import JournalContainer from "../components/JournalContainer";



class JournalPage extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container">
          <JournalContainer />
        </div>
      <Footer />
      </>
    );
  }
}

export default JournalPage;
