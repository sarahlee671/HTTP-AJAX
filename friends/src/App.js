import React from 'react';
import './App.css';
import axios from 'axios';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: []
    };
  }

  componentDidMount () {
    axios
      .get('http://localhost:5000/friends')
      .then(res => {
        console.log(res);
        this.setState({ items: res.friends })
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
   
    return (
      
    )
  }



}

export default App;
