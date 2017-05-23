import React, { Component } from 'react';
import Countdown from './countdown';
import MathOperation from '../containers/math_operation';
import { Link } from 'react-router-dom';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      secondsRemaining: 20,
      score: 0
    })
  }

  finishGame() {
    this.props.history.push('/')
  }

  tick() {
    this.setState({ secondsRemaining: this.state.secondsRemaining - 1 });
    if (this.state.secondsRemaining <= 0) {
      clearInterval(this.interval);
      this.finishGame();
    }
  }

  addSeconds() {
    this.setState({ secondsRemaining: this.state.secondsRemaining + 5 });
  }

  subtractSeconds() {
    this.setState({ secondsRemaining: this.state.secondsRemaining - 5 });
  }

  addScore() {
    this.setState({ score: this.state.score + 1 });
  }

  render() {
    return (
      <div>
        <Link to="/">Finish</Link>
        <h1>Board</h1>
        <h3>Score: {this.state.score}</h3>
        <Countdown
          secondsRemaining = {this.state.secondsRemaining}
          tick             = {() => this.tick()} />
        <MathOperation
          addSeconds      = {() => this.addSeconds()}
          subtractSeconds = {() => this.subtractSeconds()}
          addScore        = {() => this.addScore()} />
      </div>
    );
  }
}

export default Board;
