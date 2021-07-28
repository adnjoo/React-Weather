import React, { Component } from "react";
import axios from "axios";

const weatherapikey = "0943201534d540afb8d24105211907";


export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "enter city/zip-code here",
      name: '',
      c: '',
      f: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.clearInput = this.clearInput.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }
  clearInput(){
    this.setState({value:''})
  }

  handleKeyDown(e) {

    if (e.keyCode === 13) {         // if enter is pressed
      console.log(e.target.value)
      console.log(this.state.value)
      axios.get(
        `https://api.weatherapi.com/v1/current.json?key=${weatherapikey}&q=${e.target.value}&aqi=no`)
        .then((res)=>{
          console.log(res.data)
          this.setState({
            name: res.data.location.name
          })
          this.setState({
            c: res.data.current.temp_c
          })
          this.setState({
            f: res.data.current.temp_f
          })
          this.sendToParent()
        })
        // clear input field
        this.setState({value:''})
    }
  }

  sendToParent = () => {
    this.props.parentUpdate(this.state.name,this.state.c,this.state.f)
  }

  render() {
    return (
      <div class='input border-b border-gray-600'>
        <input
          type="text"
          id="location"
          value={this.state.value}
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
          onClick={this.clearInput}
          className='input'
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
