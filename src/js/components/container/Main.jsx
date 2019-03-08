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
        <div class="jumbotron">
          <h1 class="display-4">Amazing React, Bootstrap and Webpack</h1>
          <p class="lead">Created with love</p>
          <hr class="my-4"/>
          <p>It uses utility classes for typography and spacing to space content out
          within the larger container.</p>
          <p class="lead">
            <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
          </p>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("app"));
