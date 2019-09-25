import React  from "react";

//we’re not using state in the component anymore, we can also refactor it into a stateless componen
const Winner = ({ winner, }) => (
  	<div>
     { winner === 0  ? null : <h2 className="jumbotron">Player { winner } wins!</h2>}
  	</div>
);

export default Winner;