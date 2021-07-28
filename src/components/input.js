import React, { Component } from "react";
import axios from "axios";

const weatherapikey = "0943201534d540afb8d24105211907";


export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      name: '',
      c: '',
      f: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleKeyDown(e) {
    // if enter is pressed
    setTimeout(()=>{


    if (e.keyCode === 13) {
      console.log(e.target.value)
      console.log(this.state.value)
      axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${weatherapikey}&q=${e.target.value}&aqi=no`)
        .then((res)=>{
          console.log(res.data)
          this.state.name = res.data.location.name
          this.state.c = res.data.current.temp_c
          this.state.f = res.data.current.temp_f
          this.sendToParent()
        })
        // do something
    }
    },100)
  }

  sendToParent = () => {
    this.props.parentUpdate(this.state.name,this.state.c,this.state.f)
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
