import React, { Component } from 'react';

export default class Button extends Component {
  constructor(){
    super();
  }

  render(){
    return (
      <button onClick={this.props.method}>{this.props.label}</button>
    )
  }
}
