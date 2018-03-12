import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import { addCommands } from "./actions";
import { bindActionCreators } from "redux";

class TextCommand extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <br />
        <br />
        <input type="text" />
        <br />
        <br />

        <button>Add your commands</button>
      </div>
    );
  }
}

export default TextCommand;
