import initial from "./initial";

let end = 21;


let minScore = (state) => state.player1 >= 21 || state.player2 >= 21;
let total = (state) => state.player1 + state.player2;

let setServer = (state) => {
	let swap = minScore(state) ? 2 : 5

	return{
		...state, 
		server:  (Math.floor(total(state) / swap ) % 2) + 1};
}


let won = (state) => {
   let p1 = state.player1;
   let p2 = state.player2;

	return {
		...state,
		winner: 
			p1 >= end && (p1-p2) >= 2 ? 1 : 
			p2 >= end && (p2-p1) >= 2 ? 2 : 
			0
	};
}

let games = (state) => {
	return state.winner === 0 ? state : {
		...state,
		games: [
		...state.games,
		{
			"player_1":{
				"score": state.player1,
				"won": state.player1 > state.player2
			},
			"player_2":{
				"score": state.player2,
				"won": state.player2 > state.player1
			}
		}
		]
	};
}

// the reducer gets given the current version of the state
// and the action that called it, which has a "type" property
let reducer = (state, action) => {
  // depending on what the action's type property is
  // we can do different things
  switch (action.type) {
    // using object spread to create a new object
    // with the same properties
    case "player1": return games(won(setServer({ ...state, player1: state.player1 + 1 })));
    case "player2": return games(won(setServer({ ...state, player2: state.player2 + 1 })));
    case "reset": return {...initial, games: state.games};
    default: return state;
  }
};

export default reducer;