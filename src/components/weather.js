import React, { Component } from "react";
import axios from "axios";
const abstractapikey = "22bd9ffbb7614d58ba49d51cca4437d0";
const weatherapikey = "0943201534d540afb8d24105211907";

const Weather1 = () => {
  return <div>{/* hi there */}</div>;
};

export default class Weather extends Component {
  constructor(props) {
    super(props);

    this.weatherInfo = this.weatherInfo.bind(this);

    this.state = {
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
  }

  weatherInfo() {
    return (
      <div>
        <Weather1 />
        <br />
        {/* <h1>{this.state.current.cloud}</h1> */}
        <p className='text-xl'>Your location: {this.state.location.name}</p>
        <p className='text-xl'>Temperature: {this.state.current.temp_f} F</p>
        <p className='text-xl'>{this.state.current.condition.text}</p>
        <img src={this.state.current.condition.icon } />
      </div>
    );
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
        //make second axios
        axios
          .get(
            `http://api.weatherapi.com/v1/current.json?key=${weatherapikey}&q=${this.state.ipaddress}&aqi=no`
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
    console.log("test");
  }

  render() {
    return (
      <div>
        <span>{this.weatherInfo()}</span>
      </div>
    );
  }
}
