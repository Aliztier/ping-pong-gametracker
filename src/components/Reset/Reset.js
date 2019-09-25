import React  from "react";

//we’re not using state in the component anymore, we can also refactor it into a stateless componen
const Reset = ({  handleReset,}) => (
  
      <button 
      className="btn btn-danger" 
      onClick={ handleReset }
      >Reset</button>
  
);

export default Reset;