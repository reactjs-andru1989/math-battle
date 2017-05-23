import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    //this.state = ({ secondsRemaining: this.props.secondsRemaining })
    //this.tick = this.tick.bind(this);
    //this.props.addSeconds = this.props.addSeconds.bind(this);
  }

  componentDidMount() {
    //this.setState({ secondsRemaining: this.props.secondsRemaining });
    this.interval = setInterval(this.props.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return(
      <div>
        Seconds Remaining: {this.props.secondsRemaining}
      </div>
    );
  }
}
