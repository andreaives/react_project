import React from 'react';
import "./Form.css"
export const Form = ({ onSubmit }) => {
return (
  <>
  <form onSubmit={onSubmit}>
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