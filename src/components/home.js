import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="text-center">
          <Link to="/board">Play</Link>
          <Link to="/score">Score</Link>
        </div>
      </div>
    );
  }
}

export default Home;
