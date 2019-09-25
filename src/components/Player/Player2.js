import {connect} from "react-redux";

import Player from "./Player";
import { p2 } from "../../data/actions";

const mapStateToProps = (state) => {
	return {
		score: state.player2,
		server: state.server === 2,
		winner: state.winner !== 0,
		playernumber:2,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		handlePlayer: () => dispatch(p2()),
	};
};

export default connect(mapStateToProps,mapDispatchToProps)(Player);