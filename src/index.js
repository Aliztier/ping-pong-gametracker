import React from 'react';
import ReactDOM from 'react-dom';

import store from "./data/store";

import App from './App';

// subscribe to any changes
 let render = () => {
// get the current state using the getState method
// we can get the state, but not update it
	let state = store.getState();
// for now, just log the new count
	ReactDOM.render(
		<App 
			player1={state.player1} 
			player2={state.player2} 
			server = {state.server}
			winner={state.winner} 
			games = {state.games} 
			handlePlayer1={ () => store.dispatch({ type: "player1" }) }
			handlePlayer2={ () => store.dispatch({ type: "player2" }) }
			handleReset={ () => store.dispatch({ type: "reset" }) } 
		/>,
			document.getElementById('root')
	);
};

store.subscribe(render);
render();

