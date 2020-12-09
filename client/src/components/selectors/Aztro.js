import React, { Component } from "react";

class Aztro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      json: {},
    };
  }

  fetchScope(astroSign) {
    const URL =
      "https://aztro.sameerkumar.website/?sign=" + astroSign + "&day=today";
    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ json });
      });
  }

  render() {
    return (
      <>
        <div>
          <div className="jumbotron-fluid">
            <h1 className="display-4">Daily Horoscope</h1>
            <br />
            <div
              className="btn-toolbar"
              role="toolbar"
              aria-label="Toolbar with button groups"
            >
              <div
                className="btn-group-mr-2"
                role="group"
                aria-label="Button group 1"
              >
                <button
                  type="button"
                  className="btn-btn-secondary"
                  onClick={() => this.fetchScope("Aries")}
                >
                  <span role="img" aria-label="astrological sign">♈ Aries</span>
                </button>
                <button
                  type="button"
                  className="btn-btn-secondary"
                  onClick={() => this.fetchScope("Taurus")}
                >
                  <span role="img" aria-label="astrological sign">♉ Taurus</span>
                </button>
                <button
                  type="button"
                  className="btn-btn-secondary"
                  onClick={() => this.fetchScope("Gemini")}
                >
                  <span role="img" aria-label="astrological sign">♊ Gemini</span>
                </button>
                <button
                  type="button"
                  className="btn-btn-secondary"
                  onClick={() => this.fetchScope("Cancer")}
                >
                  <span role="img" aria-label="astrological sign">♋ Cancer</span>
                </button>
              </div>
              <br />
              <div
                className="btn-group-mr-2"
                role="group"
                aria-label="Button group 2"
              >
                <button
                  type="button"
                  className="btn-btn-secondary"
                  onClick={() => this.fetchScope("Leo")}
                >
                  <span role="img" aria-label="astrological sign">♌ Leo</span>
                </button>
                <button
                  type="button"
                  className="btn-btn-secondary"
                  onClick={() => this.fetchScope("Virgo")}
                >
                  <span role="img" aria-label="astrological sign">♍ Virgo</span>
                </button>
                <button
                  type="button"
                  className="btn-btn-secondary"
                  onClick={() => this.fetchScope("Libra")}
                >
                  <span role="img" aria-label="astrological sign">♎ Libra</span>
                </button>
                <button
                  type="button"
                  className="btn-btn-secondary"
                  onClick={() => this.fetchScope("Scorpio")}
                >
                  <span role="img" aria-label="astrological sign">♏ Scorpio</span>
                </button>
              </div>
              <br />
              <div
                className="btn-group-mr-2"
                role="group"
                aria-label="Button group 3"
              >
                <button
                  type="button"
                  className="btn-btn-secondary"
                  onClick={() => this.fetchScope("Sagittarius")}
                >
                  <span role="img" aria-label="astrological sign">♐ Sagittarius</span>
                </button>
                <button
                  type="button"
                  className="btn-btn-secondary"
                  onClick={() => this.fetchScope("Capricorn")}
                >
                  <span role="img" aria-label="astrological sign">♑ Capricorn</span>
                </button>
                <button
                  type="button"
                  className="btn-btn-secondary"
                  onClick={() => this.fetchScope("Aquarius")}
                >
                  <span role="img" aria-label="astrological sign">♒ Aquarius</span>
                </button>
                <button
                  type="button"
                  className="btn-btn-secondary"
                  onClick={() => this.fetchScope("Pisces")}
                >
                  <span role="img" aria-label="astrological sign">♓ Pisces</span>
                </button>
              </div>
            </div>
            <p className="lead">
              Click on the button to see today's horoscope for each sign.{" "}
            </p>
            <br />
            <h2>{this.astroSign}</h2>
            <p>Birthday Between: {this.state.json.date_range} </p>
            <p>
              Today's Horoscope: {this.state.json.current_date},<br />{" "}
              {this.state.json.description}{" "}
            </p>
            <ul>
              <li>
                Compatibility: Spend some time with a{" "}
                {this.state.json.compatibility} today.
              </li>
              <li>Lucky Number: {this.state.json.lucky_number} </li>
              <li>Lucky Time: {this.state.json.lucky_time} </li>
              <li>Color: {this.state.json.color} </li>
              <li>Mood: {this.state.json.mood} </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}

export default Aztro;
