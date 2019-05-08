import React from 'react';
import './App.css';
import FriendList from './Friends/FriendList'
import {Route} from 'react-router-dom';
import Form from '../src/Friends/Form';

class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   items: []
    // };
  }

  

  render() {
   
    return (
      <div>

        <Form />
        <Route path="/" component={FriendList} />
      </div>
    )
  }
}

export default App;
