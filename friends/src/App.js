import React from 'react';
import './App.css';
import FriendList from './Friends/FriendList'
import {Route} from 'react-router-dom';

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   items: []
    // };
  }

  

  render() {
   
    return (
      <Route path="/" component={FriendList} />
      // <FriendList />
    )
    
  }
      
    
  



}

export default App;
