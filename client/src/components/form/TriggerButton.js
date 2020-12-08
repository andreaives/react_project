import React from 'react';
const Trigger = ({ triggerText, buttonRef, showModal }) => {
  triggerText = "New Entry"
return (
<button
  className="btn btn-lg btn-dark center modal-button"
  ref={buttonRef}
  onClick={showModal}
 >
 {triggerText}
</button>
);
 };
export default Trigger;