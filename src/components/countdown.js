import React, { Component } from 'react';

export default class Countdown extends Component {
  constructor(props) {
    super(props);
    this.state = ({ secondsRemaining: 0 })
    this.tick = this.tick.bind(this);
    this.addSeconds = this.addSeconds.bind(this);
  }
  tick() {
    this.setState({ secondsRemaining: this.state.secondsRemaining - 1 });
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
    }
  }
  componentDidMount() {
    this.setState({ secondsRemaining: this.props.secondsRemaining });
    this.interval = setInterval(this.tick, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.interval);
  }

  addSeconds() {
    this.setState({ secondsRemaining: this.state.secondsRemaining + 10 });
  }

  render() {
    return(
      <div>
        Seconds Remaining: {this.state.secondsRemaining}
        <button onClick={this.addSeconds}>Add</button>
      </div>
    );
  }
}
