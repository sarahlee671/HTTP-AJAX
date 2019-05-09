import React from 'react';
import './App.css';
import FriendList from './Friends/FriendList'
import {Route} from 'react-router-dom';
import PostForm from './Friends/PostForm';
import Axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   items: []
    // };
  }

  // postFriend = e => {

  //   Axios.post('http://localhost:5000/friends', friend)
  //     .then(res => {console.log(res)})
  //     .catch(err => {console.log(err)})

  // }

  render() {
   
    return (
      <div>

        <PostForm postFriend={this.postFriend} />
        <Route path="/" component={FriendList} />
      </div>
    )
  }
}

export default App;
