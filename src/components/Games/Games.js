import React  from "react";

//we’re not using state in the component anymore, we can also refactor it into a stateless componen
const Games = ({  games, score, }) => (
  
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
  
);

export default Games;