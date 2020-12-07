import React, { Component } from "react";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer";
import JournalContainer from "../components/JournalContainer";
import Aztro from "../components/selectors/Aztro";
import { Modal } from '../components/form/Modal';
import TriggerButton from '../components/form/TriggerButton';


class Main extends Component {
  state = { isShown: false };
  showModal = () => {
    this.setState({ isShown: true }, () => {
    this.closeButton.focus();
    this.toggleScrollLock();
    });
  };
  
  toggleScrollLock = () => {
    document.querySelector('html').classList.toggle('scroll-lock');
    };
  
  closeModal = () => {
    this.setState({ isShown: false });
    this.TriggerButton.focus();
    this.toggleScrollLock();
    };
  
  onKeyDown = (event) => {
    if (event.keyCode === 27) {
        this.closeModal();
      }
    };
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return
    this.closeModal();
  };
  render() {
    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-.5 col-md-1 col-lg-2" />
            <div className="col-sm-11 col-md-4 col-lg-4">
              <Aztro />
              <br />
              <h2>Readings, Links, and More.</h2>
              <br />
              <p>
                Enjoy the links and prediction readings below to help you plan
                your day. Use the Journal to the right to write your thoughts,
                dreams, and feelings.
              </p>
            </div>
            <div className="col-sm-0 col-md-2 col-lg-2" />
            <TriggerButton 
              showModal={this.showModal}
              buttonRef={(n) => (this.TriggerButton = n)}
              triggerText={this.props.triggerText}
            />
            {this.state.isShown ? (
            <Modal
              onSubmit={this.props.onSubmit}
              modalRef={(n) => (this.modal = n)}
              buttonRef={(n) => (this.closeButton = n)}
              closeModal={this.closeModal}
              onKeyDown={this.onKeyDown}
              onClickOutside={this.onClickOutside}
              />
            ) : null}
            <div className="col-sm-.5 col-md-4 col-lg-4">
              <div className="scrollHeader">
                <h1 className="display-4">Daily Journal</h1>
                <JournalContainer />
              </div>
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
