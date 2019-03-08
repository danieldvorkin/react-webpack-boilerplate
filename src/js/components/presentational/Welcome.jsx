import React, { Component } from 'react';

class Welcome extends Component {
  render(){
    return (
      <div class="jumbotron">
        <h1 class="display-4">{this.props.title}</h1>
        <p class="lead">{this.props.msg}</p>
        <hr class="my-4"/>
        <p class="lead">
          <a class="btn btn-primary btn-sm" href="https://github.com/danieldvorkin/react-webpack-boilerplate" target="_blank" role="button">Learn more</a>
        </p>
      </div>
    )
  }
};

export default Welcome;
