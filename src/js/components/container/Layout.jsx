import React, { Component } from "react";
import ReactDOM from "react-dom";

// Components
import NavBar from '../presentational/NavBar.jsx';
import Welcome from '../presentational/Welcome.jsx';
import Timer from '../presentational/Timer.jsx';
import Button from '../presentational/Button.jsx';

// import FormContainer from "./FormContainer.jsx";
// import Input from "../presentational/Input.jsx";

class Layout extends Component {
  constructor(){
    super();
    this.state = {
      firstName: 'Daniel'
    }
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="container">
          <h1>TimerApp Welcomes {this.state.firstName}</h1>
          <Timer label="Timer 1" />
          <Timer label="Timer 2" />
          <Timer label="Timer 3" />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Layout />, document.getElementById("app"));
