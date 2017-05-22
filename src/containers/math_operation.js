import React, { Component } from 'react';
import { connect } from 'react-redux';
import { randomOperation, checkOperation } from '../actions/index';
import { bindActionCreators } from 'redux';

class MathOperation extends Component {
  componentDidMount() {
    this.props.randomOperation()
  }

  render() {
    if (!this.props.operation) {
      return <div>Loading...</div>
    }

    return (
      <div>
        {this.props.operation.operation}
        <button onClick={() => this.props.checkOperation(true, this.props.operation)}>Verdadero</button>
        <button onClick={() => this.props.checkOperation(false, this.props.operation)}>Falso</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    operation: state.activeOperation
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    randomOperation: randomOperation,
    checkOperation: checkOperation
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MathOperation);
