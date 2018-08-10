import React, { Component } from 'react';
import Countdown from './countdown';
import MaterializeModal from './modal';
import MathOperation from '../containers/math_operation';
import { Link } from 'react-router-dom';
import { ProgressBar, Button, Icon } from 'react-materialize';
import { OPERATIONS, RESULT_TYPES } from '../actions/types';

class Board extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      secondsRemaining: 5,
      score: 0,
      message: '',
      operation: '',
      result: 0
    })
  }

  componentDidMount() {
    this.randomOperation()
  }

  randomOperation() {
    let operation = OPERATIONS[Math.floor(Math.random() * OPERATIONS.length)];

    let n1 = Math.floor(Math.random() * 10) + 1
    let n2 = Math.floor(Math.random() * 10) + 1

    let result_value;
    let result_type = RESULT_TYPES[Math.floor(Math.random() * RESULT_TYPES.length)];

    if (result_type === 'truthy') {
      result_value = n1 + n2
    } else {
      result_value = n1 + n2 + 5
    }

    this.setState({
      message: `${n1} + ${n2} = ${result_value}`,
      operation: `${n1} + ${n2}`,
      result: result_value
    })
  }

  checkOperation(answer) {
    let result = (eval(this.state.operation) === this.state.result)
    if (result === answer) {
      this.addSeconds()
      this.addScore()
    } else {
      this.subtractSeconds()
    }
    this.randomOperation()
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

  addScore() {
    this.setState({ score: this.state.score + 1 });
  }

  subtractSeconds() {
    const secondsToSubtract = 6;
    let seconds = this.state.secondsRemaining >= secondsToSubtract ? secondsToSubtract : this.state.secondsRemaining
    this.setState({ secondsRemaining: (this.state.secondsRemaining - seconds) +1 });
  }

  render() {
    if (!this.state.operation) {
      return (
        <div>Loading...</div>
      );
    }

    return (
      <div>
        <MaterializeModal ref="modal" score={this.state.score} />

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

                <h1 className="center-align">
                  {this.state.message}
                </h1>

                <ProgressBar progress={this.state.secondsRemaining*100/20} />
              </div>

              <div className="card-action center-align">
                <div className="row">
                  <div className="col s6 right-align">
                    <Button floating large className='green' waves='light' onClick={() => this.checkOperation(true)}>
                      <Icon right>done</Icon>
                    </Button>
                  </div>
                  <div className="col s6 left-align">
                    <Button floating large className='red' waves='light' onClick={() => this.checkOperation(false)}>
                      <Icon right>close</Icon>
                    </Button>
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
