import {connect} from "react-redux";

import Games from "./Games";

const mapStateToProps = (state) => {
	return {
		games:state.games,
	}
}

export default connect(mapStateToProps)(Games);