import React, { Component } from "react";
// import axios from "axios";

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleKeyDown(e) {
    // if enter is pressed
    if (e.keyCode === 13) {
      console.log('test')
    }
  }

  render() {
    return (
      <div>
        {/* hi there */}
        <input
          type="text"
          id="location"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        ></input>
      </div>
    );
  }
}

// user flow
// 1 types text into input ok
// 2 presses enter
// 3 sends city to weather api
//makes axios call to weather api
//
