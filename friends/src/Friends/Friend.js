

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Friend extends React.Component {
  state = {
    friend: null
  };

  componentDidMount() {
    axios
      .get(`http://localhost:5000/friends/`)
      .then(res => this.setState({ item: res.data }))
      .catch(err => console.log(err));
  }

  deleteFriend = e => {
    e.preventDefault();
    this.props.deleteFriend(this.state.friend.id);
  };

  setUpdateForm = e => {
    e.preventDefault();
    this.props.setUpdateForm(this.state.friend);
  };

  render() {
    const { friend } = this.state;
    if (!this.state.friend) {
      return <h2>Loading friend data...</h2>;
    }

    return (
      <div key={friend.id}>
        <h2>{friend.name}</h2>
        <p>{friend.age}</p>
        <p>{friend.email}</p>
        <button onClick={this.deleteFriend}>Delete</button>
        <Link to="/update-form"><button>Edit</button></Link>
      </div>
    );
  }
}

export default Friend;