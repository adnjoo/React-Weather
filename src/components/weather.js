import React, { Component } from "react";
import axios from "axios";
import Switch from "react-switch";
import Input from "./input";

const abstractapikey = "22bd9ffbb7614d58ba49d51cca4437d0";
const weatherapikey = "0943201534d540afb8d24105211907";

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checked: false,
      cheeseIsReady: "hi",
      ipaddress: null,
      current: {
        condition: {
          text: null,
          icon: null,
        },
        temp_c: null,
        temp_f: null,
      },
      location: {
        name: null,
      },
    };

    this.weatherInfo = this.weatherInfo.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.parentUpdate = this.parentUpdate.bind(this);
  }

  handleChange(checked) {
    console.log(this.state.checked);
    this.setState({ checked });
    if (checked) {
      // document.getElementById('temperature').innerHTML='123'
      this.refs.temperature.innerHTML = `Temperature: ${this.state.current.temp_c} C`;
    } else {
      this.refs.temperature.innerHTML = `Temperature: ${this.state.current.temp_f} F`;
      // document.getElementById('temperature').innerHTML='321'
    }
  }

  weatherInfo() {
    return (
      <div>
        <br />
        <p className="text-xl">
          Date:{" "}
          {new Date().toLocaleString("en-US", {
            year: "numeric",
            month: "long",
            day: "2-digit",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
        <p className="text-xl">Location: {this.state.location.name}</p>
        <p ref="temperature" className="text-xl">
          Temperature: {this.state.current.temp_f} F
        </p>
        <Switch
          onChange={this.handleChange}
          checked={this.state.checked}
          uncheckedIcon={false}
          checkedIcon={false}
        />{" "}
        <labeL>F/C</labeL>
        <p className="text-xl">{this.state.current.condition.text}</p>
        <img src={this.state.current.condition.icon} alt={"weather icon"} />
      </div>
    );
  }

  parentUpdate(n, c, f) {
    //get copy of state first
    let copy = Object.assign({}, this.state);
    copy.location.name = n;
    copy.current.temp_c = c;
    copy.current.temp_f = f;
    this.setState(copy);
    this.setState(this.state)
  }

  componentDidMount() {
    axios
      //first axios call using abstract api to get IP-address
      .get(
        `https://ipgeolocation.abstractapi.com/v1/?api_key=${abstractapikey}`
      )
      .then((res) => {
        // console.log(res.data.ip_address);
        this.setState({ ipaddress: res.data.ip_address });
      })
      .then(() => {
        // console.log(this.state)
        //make second axios call
        axios
          .get(
            `https://api.weatherapi.com/v1/current.json?key=${weatherapikey}&q=${this.state.ipaddress}&aqi=no`
          )
          .then((res) => {
            console.log(res.data);
            this.setState({
              current: res.data.current,
              location: res.data.location,
            });
            console.log(this.state);
          });
      });
  }

  render() {
    return (
      <div>
        <span>{this.weatherInfo()}</span>
        <Input parentUpdate={this.parentUpdate} />
      </div>
    );
  }
}
