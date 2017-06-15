import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Countdown extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.interval = setInterval(this.props.tick, 1000);
  }

  stopTimer() {
    clearInterval(this.interval);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <div>
        <h4>{this.props.secondsRemaining}</h4>
      </div>
    );
  }
}
