import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Countdown from './countdown';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="text-center">
          <Link to="/board">Play</Link>
          <Link to="/score">Score</Link>
          <Countdown secondsRemaining="10" />
        </div>
      </div>
    );
  }
}

export default Home;
