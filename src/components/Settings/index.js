import { connect } from "react-redux";

import Settings from "./Settings";

const mapStateToProps = state => {
  return {
      P1name: state.P1name,
      P2name: state.P2name,
      Score: state.Score,
      Serve: state.Serve,
      
  };
};

export default connect(mapStateToProps)(Settings);