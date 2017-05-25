import React, { Component } from 'react';
import Countdown from './countdown';
import MathOperation from '../containers/math_operation';
import { Link } from 'react-router-dom';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      secondsRemaining: 10,
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
    const maxSecondsRemaining = 20;
    let secondsToAdd = 5;
    let nextSecondsRemaining = this.state.secondsRemaining + secondsToAdd
    if (nextSecondsRemaining > 20) {
      secondsToAdd = maxSecondsRemaining - this.state.secondsRemaining;
      this.setState({ secondsRemaining: this.state.secondsRemaining + secondsToAdd });
    } else {
      this.setState({ secondsRemaining: this.state.secondsRemaining + secondsToAdd });
    }
  }

  subtractSeconds() {
    const secondsToSubtract = 6;
    let seconds = this.state.secondsRemaining >= secondsToSubtract ? secondsToSubtract : this.state.secondsRemaining
    this.setState({ secondsRemaining: this.state.secondsRemaining - seconds });
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
        <div className="progress">
          <div className="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow={this.state.secondsRemaining} aria-valuemin={10} aria-valuemax={20} style={{width: this.state.secondsRemaining*100/20 + "%"}}>
            <span className="sr-only">{this.state.secondsRemaining}% Complete</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
