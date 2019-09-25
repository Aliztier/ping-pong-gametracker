import React  from "react";

//we’re not using state in the component anymore, we can also refactor it into a stateless componen
const Player = ({  score, server, winner, handlePlayer, playernumber }) => (
  
      <div className="col-xs-6">
          <p>Player { playernumber }{server  ? <span className="pull-right label label-success">Serving</span>: null}</p>
          <p className="well">{ score }</p>
          { !winner ?  <button className="btn btn-primary" onClick= { handlePlayer }>+</button> :null}
      </div>
  
);

export default Player;