import React from 'react';
import './App.css';
import FriendList from './Friends/FriendList'
import {Route} from 'react-router-dom';
import PostForm from './Friends/PostForm';


function App() {
   
    return (
      <div>

        <PostForm />
        <Route path="/" component={FriendList} />
      </div>
    )
  
}

export default App;
