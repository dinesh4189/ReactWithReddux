import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>
          Count :
          {this.props.count}
        </h1>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    count: state.counter
  };
}
export default connect(mapStateToProps)(Counter);
