import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
  render() {
    return(
      <div>
        <div className="text-center">
          <Link to="/board">
            <h1>Play</h1>
            <i className="large material-icons">play_arrow</i>
          </Link>
          <Link to="/score">
            <h1>Score</h1>
            <i className="large material-icons">toc</i>
          </Link>
        </div>
      </div>
    );
  }
}

export default Home;
