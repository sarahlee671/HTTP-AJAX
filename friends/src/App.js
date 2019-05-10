import React from 'react';
import './App.css';
import FriendList from './Friends/FriendList';
import {Route} from 'react-router-dom';

import PostForm from './Friends/PostForm';
import axios from 'axios';
import Friend from './Friends/Friend';
import UpdateForm from './Friends/UpdateForm';



class App extends React.Component {
  constructor() {
    super();
    this.state= {
      friends: [],
      activeFriend: null
    }
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        this.setState({ friends: res.data})
      })
      .catch(err => {
        console.log(err);
      });
  }

  addFriend = friend => {
    axios
      .post('http://localhost:5000/friends', friend)
      .then(res => {
        this.setState({ friends: res.data})
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  updateFriend = updatedFriend => {
    
    axios
      .put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
      .then(res => {
        this.setState({ friends: res.data})
        this.props.history.push('/update-form')
      })
      .catch(err => {
        console.log(err)
      })
  }

  deleteFriend = id => {
    axios
      .delete(`http://localhost:5000/friends/${id}`)
      .then(res => {
        this.setState({ friends: res.data})
        this.props.history.push('/')
      })
      .catch(err => {
        console.log(err)
      })
  }

  setUpdateForm = friend => {
  
    this.setState({activeFriend: friend});
    this.props.history.push('/update-form')

  }

  render() {
    return (
      <div className="App">
        
        <Route
          exact
          path="/"
          render={props => <PostForm addFriend={this.addFriend} />} 
        />

        <Route
          exact
          path="/"
          render={() => (<FriendList friends={this.state.friends}/>)}
        />
        <Route
          path="/:id"
          render={props => (
            <Friend
              deleteFriend={this.deleteFriend}
              friends={this.state.friends}
              setUpdateForm={this.setUpdateForm}
              {...props}
            />
          )}
        />

         <Route
          path="/update-form"
          render={props => (
            <UpdateForm
              updateFriend={this.updateFriend}
              activeFriend={this.state.activeFriend}
            />
          )}
        />
       
      </div>
    )
  }
}

export default App;
