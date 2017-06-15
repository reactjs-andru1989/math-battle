import React, { Component } from 'react';
import Countdown from './countdown';
import MaterializeModal from './modal';
import MathOperation from '../containers/math_operation';
import { Link } from 'react-router-dom';
import { ProgressBar, Button, Icon } from 'react-materialize';

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
      this.refs.countdown.stopTimer();
      this.refs.modal.openModal();
    }
  }

  addSeconds() {
    const maxSecondsRemaining = 20;
    let secondsToAdd = 5;
    let nextSecondsRemaining = this.state.secondsRemaining + secondsToAdd
    if (nextSecondsRemaining > maxSecondsRemaining) {
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
        <MaterializeModal ref="modal" score={this.state.score} />
        <div className="progress">
          <div className="determinate" style={{width: this.state.secondsRemaining*100/20 + "%"}}></div>
        </div>

        <div className="row">
          <div className="col s12 m12">
            <div className="card">
              <div className="card-content white-text teal darken-2">

                <div className="row">
                  <div className="col s6">
                    <h4 className="left-align">Score: {this.state.score}</h4>
                  </div>

                  <div className="col s6">
                    <div className="right-align">
                      <Countdown
                        ref              = "countdown"
                        secondsRemaining = {this.state.secondsRemaining}
                        tick             = {() => this.tick()} />
                    </div>
                  </div>
                </div>

                <div className="center-align">
                  <MathOperation
                    addSeconds      = {() => this.addSeconds()}
                    subtractSeconds = {() => this.subtractSeconds()}
                    addScore        = {() => this.addScore()} />
                </div>

                <ProgressBar progress={this.state.secondsRemaining*100/20}/>
              </div>

              <div className="card-action center-align">
                <div className="row">
                  <div className="col s6 right-align">
                    <a className="btn-floating btn-large waves-effect waves-light green">
                      <i className="material-icons">done</i>
                    </a>
                  </div>
                  <div className="col s6 left-align">
                    <a className="btn-floating btn-large waves-effect waves-light red">
                      <i className="material-icons">close</i>
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Board;
