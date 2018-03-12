import React, { Component } from "react";

import AddCounter from "./AddCounter.js";
import Counter from "./counter.js";
import TextCommand from "./TextCommand.js";

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <AddCounter />
        <TextCommand />
      </div>
    );
  }
}

export default App;
