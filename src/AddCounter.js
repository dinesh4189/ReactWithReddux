import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { addCounter } from "./actions";
import { bindActionCreators } from "redux";

class AddCounter extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <form>
          <button
            onClick={e => {
              //e.preventDefault();this.props.dispatch({type: "ADD_COUNTER",payload: 1})}
              e.preventDefault();
              this.props.dispatch(addCounter());
            }}
          >
            Add
          </button>
        </form>
      </div>
    );
  }
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(addCounter, dispatch) };
}

export default connect(mapDispatchToProps)(AddCounter);
