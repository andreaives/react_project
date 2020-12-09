import React from 'react';
import API from '../../utils/API.js';
import "./Form.css"

function saveEntry(){
  API.saveEntry()
  .then(res => 
    console.log("entry saved")
  )
  .catch(err => console.log(err));
}

const entrySubmit = event => {
  event.preventDefault();
  console.log(event.target.jtitle.value);
  console.log(event.target.message.value);
  const entrytitle = event.target.jtitle.value
  const entrymessage = event.target.message.value
  const author = "" 

  const entry = {
    title: entrytitle,
    author: author,
    message: entrymessage
    
  }
  console.log(entry)
  saveEntry(entry)
  };

export const Form = ({ onSubmit }) => {
return (
  <>
  <form onSubmit={entrySubmit}>
  <div className="form-group">
    <label htmlFor="jtitle">Title</label>
    <input type="text" className="form-control" id="jtitle" placeholder="Title"/>
  </div>
  <div className="form-group">
    <label htmlFor="message">Entry</label>
    <textarea className="form-control" id="message" rows="3"></textarea>
  </div>
  <div className="form-group">
    <button className="form-control btn btn-dark" type="submit">
      Submit
    </button>
  </div>
</form>
</>
);
};
export default Form;