import React, { Component } from 'react';

export default class Welcome extends Component {
  render(){
    return (
      <div className="jumbotron">
        <h1 className="display-4">{this.props.title}</h1>
        <p className="lead">{this.props.msg}</p>
        <hr className="my-4"/>
        <p className="lead">
          <a className="btn btn-primary btn-sm" href="https://github.com/danieldvorkin/react-webpack-boilerplate" target="_blank" role="button">Learn more</a>
        </p>
      </div>
    )
  }
};
