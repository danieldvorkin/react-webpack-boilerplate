import React, { Component } from 'react';
import Button from './Button.jsx';

export default class Timer extends Component {
  constructor(){
    super();
    this.state = {
      time: 0
    }
    this.resetTimer = this.resetTimer.bind(this)
    this.startTimer = this.startTimer.bind(this)
  }

  resetTimer(){
    this.setState({
      time: 0
    })
  }

  startTimer(){
    setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time + 1
      }))
    }, 1000)
  }

  render(){
    return (
      <div>
        <h1>Page has been open for: {this.state.time} seconds</h1>
        <Button label="Start Timer" method={this.startTimer} />
        <Button label="Reset Timer" method={this.resetTimer} />
      </div>
    )
  }
}
