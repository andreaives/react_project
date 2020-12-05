import React, { Component } from "react";
import Navbar from '../components/navbar/Navbar';
import Footer from '../components/Footer';
import JournalContainer from "../components/Journal";
import Aztro from "../components/selectors/Aztro";

class Main extends Component {
  state = {}
  render() {
  return (
    <>
    <Navbar />
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <h2>Readings, Links, and More.</h2> 
          <p>Enjoy the links and prediction readings below to help you plan your day. Use the Journal to the right to write your thoughts, dreams, and feelings.</p>
          <Aztro/>
        </div>
        <div className='col-6'>
          <JournalContainer />
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
  }
};

export default Main;