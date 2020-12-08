import React, { Component } from "react";

class Resources extends Component {
  
  render () {
    return (
      <>
      <div className="container">
      <h2 style={{"color": "white" }}>Links</h2>
      <p style={{"color": "white" }}>
      <ul>
        <li>
          <a href="https://astrolibrary.org/lessons/">Astro Library</a> learn to read your own stars with this online beginners course.
        </li>
        <li>
          <a href="https://astrologybytes.podbean.com/">Astrology Bytes</a> The best podcast for astrology beginners.
        </li>
        <li>
          <a href="https://www.princeton.edu/~ezb/geomancy/geostep.html">Medieval Geomancy</a> A fun and complex fortune telling system using dots on paper.
        </li>
        <li>
          <a href="https://sigilengine.com/">Sigil Engine</a> Make magical works of art to represent your goals and wishes.
        </li>
      </ul>
      </p>
      </div>
      </>
    )
  }
}
// Resources pages for additional content
// examples: 
// - human body graph
export default Resources;

