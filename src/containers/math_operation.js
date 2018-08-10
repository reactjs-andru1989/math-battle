import React, { Component } from 'react';
import { OPERATIONS, RESULT_TYPES } from '../actions/types';
import {Button, Icon} from 'react-materialize';

export default class MathOperation extends Component {
  constructor(props) {
    super(props)
    //this.state = ({message: '', operation: '', result: 0})
    //this.randomOperation = this.randomOperation.bind(this)
  }

  /*componentDidMount() {
    this.randomOperation()
  }*/

  /*randomOperation() {
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
  }*/

  /*checkOperation(answer) {
    let result = (eval(this.state.operation) === this.state.result)
    if (result === answer) {
      this.props.addSeconds()
      this.props.addScore()
    } else {
      this.props.subtractSeconds()
    }
    this.randomOperation()
  }*/

  render() {
    if (!this.state.operation) {
      return <div>Loading...</div>
    }

    return (
      <div>
        <h1 className="center-align">
          {this.state.message}
        </h1>
        <Button floating large className='green' waves='light' onClick={() => this.checkOperation(true)}>
          <Icon right>done</Icon>
        </Button>

        <Button floating large className='red' waves='light' onClick={() => this.checkOperation(false)}>
          <Icon right>close</Icon>
        </Button>
      </div>
    );
  }
}
