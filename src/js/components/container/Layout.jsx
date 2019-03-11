import React, { Component } from "react";
import ReactDOM from "react-dom";

// Components
import NavBar from '../presentational/NavBar.jsx';
import Welcome from '../presentational/Welcome.jsx';

// import FormContainer from "./FormContainer.jsx";
// import Input from "../presentational/Input.jsx";

class Layout extends Component {
  constructor(){
    super();
    this.state = {
      firstName: 'Daniel',
      clicked: 0
    }
  }

  increaseClicked(){
    let new_count = this.state.clicked + 1

    this.setState({
      clicked: new_count
    })
  }

  render() {
    return (
      <div onClick={this.increaseClicked.bind(this)}>
        <h1>Hello {this.state.firstName}</h1>
        <p>You've clicked hello {this.state.clicked} times</p>
      </div>
    );
  }
}

ReactDOM.render(<Layout />, document.getElementById("app"));
