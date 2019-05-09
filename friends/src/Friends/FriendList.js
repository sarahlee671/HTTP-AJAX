import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';
import Friend from './Friend'



export default class FriendList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            friends: []
        };
    }

    componentDidMount() {
        axios
            .get('http://localhost:5000/friends')
            .then(res => {
                console.log(res);
                this.setState({ friends: res.data})
            })
            .catch(err => {
                console.log(err);
            });
    }

    render() {
        return (
            <div className="friend-list">
                {this.state.friends.map(friend => (
                    <Friend key={friend.id} friend={friend} />
                ))}
            </div>
        )
    }
}

