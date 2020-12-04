import React, { Component } from 'react';

class Aztro extends Component {
  constructor(props){
    super(props);
    this.state = {
      json: {}
    }
  }

  fetchScope (astroSign) {
    const URL = 'https://aztro.sameerkumar.website/?sign=' + astroSign + '&day=today';
    fetch(URL, {
      method: 'POST'
    }).then(response => response.json())
    .then(json => { this.setState({json}); });
  }

  render() {
    return (
      <>
      <div>
        <div className="jumbotron">
          <h1 className="display-4">Daily Horoscope</h1>
            <div className="btn-toolbar" role="toolbar" aria-label="Toolbar with button groups">
              <div className="btn-group mr-2" role="group" aria-label="Button group">
                <button type="button" className="btn btn-secondary" onClick={() => this.fetchScope("Aries")}>♈ Aries</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.fetchScope("Taurus")}>♉ Taurus</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.fetchScope("Gemini")}>♊ Gemini</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.fetchScope("Cancer")}>♋ Cancer</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.fetchScope("Leo")}>♌ Leo</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.fetchScope("Virgo")}>♍ Virgo</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.fetchScope("Libra")}>♎ Libra</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.fetchScope("Scorpio")}>♏ Scorpio</button> 
                <button type="button" className="btn btn-secondary" onClick={() => this.fetchScope("Sagittarius")}>♐ Sagittarius</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.fetchScope("Capricorn")}>♑ Capricorn</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.fetchScope("Aquarius")}>♒ Aquarius</button>
                <button type="button" className="btn btn-secondary" onClick={() => this.fetchScope("Pisces")}>♓ Pisces</button> 
              </div>
            </div>
          <p className="lead">Click on the button to see today's horoscope for each sign.  </p>
          <h2>{this.astroSign}</h2>
          <p>Birthday Between: {this.state.json.date_range} </p>
          <p>Today's Horoscope: {this.state.json.current_date},<br/> {this.state.json.description} </p>
        <ul>
          <li>Extras</li>
          <li>Compatibility: Spend some time with a {this.state.json.compatibility} today.</li>
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
