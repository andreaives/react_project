import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import JournalContainer from "../components/JournalContainer";
import Aztro from "../components/selectors/Aztro";

class Main extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-.5 col-md-1 col-lg-2" />
            <div className="col-sm-11 col-md-4 col-lg-4">
              <Aztro />
              <br />
              <br />
              <h2>Readings, Links, and More.</h2>
              <p>
                Enjoy the links and prediction readings below to help you plan
                your day. Use the Journal to the right to write your thoughts,
                dreams, and feelings.
              </p>
            </div>
            <div className="col-sm-0 col-md-2 col-lg-2" />
            <div className="col-sm-.5 col-md-4 col-lg-4 journalScroll">
              <h1 className="display-4">Daily Journal</h1>
              <JournalContainer />
            </div>
            <div className="col-sm-.5 col-md-1 col-lg-2" />
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default Main;
