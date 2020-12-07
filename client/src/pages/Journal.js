import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import JournalContainer from "../components/Journal";



class Journal extends Component {
  state = {};
  render() {
    return (
      <>
        <Navbar />
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-.5 col-md-1 col-lg-2" />
            
            <div className="col-sm-0 col-md-2 col-lg-2" />
            <div className="col-sm-.5 col-md-4 col-lg-4">
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

export default Journal;
