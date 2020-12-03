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
        <button onClick={() => this.fetchScope("Aries")}>♈ Aries</button> <button onClick={() => this.fetchScope("Taurus")}>♉ Taurus</button> <button onClick={() => this.fetchScope("Gemini")}>♊ Gemini</button> <button onClick={() => this.fetchScope("Cancer")}>♋ Cancer</button>
        <button onClick={() => this.fetchScope("Leo")}>♌ Leo</button> <button onClick={() => this.fetchScope("Virgo")}>♍ Virgo</button> <button onClick={() => this.fetchScope("Libra")}>♎ Libra</button> <button onClick={() => this.fetchScope("Scorpio")}>♏ Scorpio</button> 
        <button onClick={() => this.fetchScope("Sagittarius")}>♐ Sagittarius</button> <button onClick={() => this.fetchScope("Capricorn")}>♑ Capricorn</button> <button onClick={() => this.fetchScope("Aquarius")}>♒ Aquarius</button> <button onClick={() => this.fetchScope("Pisces")}>♓ Pisces</button> 
      </div>
      <div>
        Current Date: {this.state.json.current_date} <br />
        Compatibility: {this.state.json.compatibility} <br />
        Lucky Number: {this.state.json.lucky_number} <br />
        Lucky Time: {this.state.json.lucky_time} <br />
        Color: {this.state.json.color} <br />
        Date Range: {this.state.json.date_range} <br />
        Mood: {this.state.json.mood} <br />
        Description: {this.state.json.description} <br />
      </div>
      </>
    );
  }
}

export default Aztro;
