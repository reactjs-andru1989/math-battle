import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class Score extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return _.map(this.props.users, user => {
      return (
        <li className="list-group-item" key={user.id}>
          {user.username}
          {user.score}
        </li>
      );
    })
  }

  render() {
    return(
      <div>
        Score
        <ul className="list-group">
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { users: state.users }
}

export default connect(mapStateToProps, { fetchUsers })(Score);
