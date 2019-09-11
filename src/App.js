import React from "react";

import Header from "./components/Header";


const App = ({player1, player2, handlePlayer1, handlePlayer2, handleReset, server, winner, games}) => (
    <React.Fragment>
        {/* header */}
        <Header />
           
        {/* scores */}
        <div className="row">
            <div className="col-xs-6">
                <p>Player 1 {server === 1 ? <span className="pull-right label label-success">Serving</span>: null}</p>
                <p className="well">{ player1 }</p>
                { winner === 0 ? <button className="btn btn-primary" onClick= { handlePlayer1 }>+</button> : null }
            </div>

            <div className="col-xs-6">
                <p>Player 2 {server === 2 ? <span className="pull-right label label-success">Serving</span>: null}</p>
                <p className="well">{ player2 }</p>
               { winner === 0 ?  <button className="btn btn-primary" onClick= { handlePlayer2 }>+</button> :null}
            </div>
        </div>

        { /* winner message */}
        { winner === 0 ? null : <h2 className="jumbotron">Player { winner } wins!</h2>}

        <hr />

        { /* reset button */}
        <button className="btn btn-danger" onClick={ handleReset }>Reset</button>

        <table className="table">
            <thead>
                <tr><th>Player 1</th><th>Player 2</th></tr>
            </thead>
            <tbody>
                { games.map((game, i)  => (
                    <tr key={ i }><td>{ game.player_1.score}</td><td>{ game.player_2.score}</td></tr>
                ))}
            </tbody>
        </table>

    </React.Fragment>
);

export default App;