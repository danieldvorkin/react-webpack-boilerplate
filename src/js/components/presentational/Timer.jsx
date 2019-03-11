import React, { Component } from 'react';
import Button from './Button.jsx';

export default class Timer extends Component {
  constructor(){
    super();
    this.state = {
      time: 0,
      isStarted: "No",
      btn_label: "Start Timer"
    }
    this.startTimer = this.startTimer.bind(this);
    this.resetTimer = this.resetTimer.bind(this);
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  startTimer(){
    setInterval(() => {
      this.setState(prevState => ({
        time: prevState.time += 1,
        isStarted: "Yes",
        btn_label: 'Reset Timer'
      }))
    }, 1000)
  }

  resetTimer(){
    this.setState({
      time: 0,
      isStarted: "No",
      btn_label: 'Start Timer'
    })
  }

  handleClick(){
    this.timer = this.startTimer()
  }

  render(){
    return (
      <div>
        <h3>
          {this.props.label} ({this.state.isStarted}): {this.state.time} seconds &nbsp;
          <Button label={this.state.btn_label} method={this.state.isStarted == "Yes" ? this.resetTimer : this.startTimer} />
        </h3>
      </div>
    )
  }
}
