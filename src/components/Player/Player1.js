import {connect} from "react-redux";

import Player from "./Player";
import {p1} from "../../data/actions";

const mapStateToProps = (state) => {
	return {
		score: state.player1,
		server: state.server === 1,
		winner: state.winner !== 0,
		playernumber:1,
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		handlePlayer: () => dispatch(p1()),
	};
};


export default connect(mapStateToProps, mapDispatchToProps)(Player);