import React, { Component } from 'react';
import Countdown from './countdown';
import MathOperation from '../containers/math_operation';
import { Link } from 'react-router-dom';

class Board extends Component {
  finishGame() {
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <Link to="/">Finish</Link>
        <h1>Board</h1>
        <Countdown secondsRemaining="20" finishGame={() => this.finishGame()} />
        <MathOperation />
      </div>
    );
  }
}

export default Board;
