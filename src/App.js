import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //todo list stuff
    };
  }
  render() {
    return (
      <div className="App">
        <div className="TodoList" />
      </div>
    );
  }
}

export default App;
