import React, { Component } from "react";
import ReactDOM from "react-dom";

// Components
import NavBar from '../presentational/NavBar.jsx';
// import FormContainer from "./FormContainer.jsx";
// import Input from "../presentational/Input.jsx";

class Main extends Component {
  render() {
    return (
      <div>
        <NavBar />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
