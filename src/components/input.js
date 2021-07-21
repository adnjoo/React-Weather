import React, { Component } from "react";
// import axios from "axios";

export default class Input extends Component {
  // constructor (props) {
  //   super(props)
  // }

  render(){
    return (
      <div>
        {/* hi there */}
        <input type='text' id='location'></input>
      </div>

    )
  }
}


// user flow
// 1 types text into input ok
// 2 presses enter
// 3 makes axios call to weather api
//