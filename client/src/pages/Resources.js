import React, { Component } from "react";

class Resources extends Component {
  render() {
    return (
      <>
        <div className="container">
          <h2 style={{ color: "white" }}>Links</h2>
          <p style={{ color: "white" }}>
            <ul>
              <li>
                <a href="https://astrolibrary.org/lessons/" target='_blank' rel="noopener noreferrer"> Astro Library </a>
                learn to read your own stars with this online beginners course.
                </li>
              <li>
                <a href="https://astrologybytes.podbean.com/" target='_blank' rel="noopener noreferrer"> Astrology Bytes </a>
                The best podcast for astrology beginners.
              </li>
              <li>
                <a href="https://www.princeton.edu/~ezb/geomancy/geostep.html" target='_blank' rel="noopener noreferrer"> Medieval Geomancy </a>
                A fun and complex fortune telling system using dots on paper.
              </li>
              <li>
                <a href="https://sigilengine.com/" target='_blank' rel="noopener noreferrer"> Sigil Engine </a> Make magical
                works of art to represent your goals and wishes.
              </li>
              <li>
                <a href="https://www.123test.com/personality-test/" target='_blank' rel="noopener noreferrer">
                  Big Five Personality Test
                </a>
                Take a scientifically validated personality test.
              </li>
              <li>
                <a href="https://www.astrology.com/us/home.aspx" target='_blank' rel="noopener noreferrer">Astrology</a>
                Choose your zodiac sign for a free daily horoscope.
              </li>
              <li>
                <a href="https://www.quantumrun.com/future-timeline/2021" target='_blank' rel="noopener noreferrer" >
                  Qauntumrun
                </a>
                Don't believe in the zodiac? Take a look at some undisputeable
                predictions for 2021.
              </li>
            </ul>
          </p>
        </div>
      </>
    );
  }
}
// Resources pages for additional content
// examples:
// - human body graph
export default Resources;
