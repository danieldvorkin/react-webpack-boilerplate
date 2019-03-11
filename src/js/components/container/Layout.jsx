import React, { Component } from "react";
import ReactDOM from "react-dom";

// Components
import NavBar from '../presentational/NavBar.jsx';
import Welcome from '../presentational/Welcome.jsx';
import Button from '../presentational/Button.jsx';
import Timer from '../presentational/Timer.jsx';

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
      <div>
        <NavBar />
        <div className="container">
          <h1>Hello {this.state.firstName}</h1>
          <p>You've clicked {this.state.clicked} times</p>
          <Timer />
          <Button label="Click Me" method={this.increaseClicked.bind(this)}/>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Layout />, document.getElementById("app"));
