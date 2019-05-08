import React, { Component } from 'react';
import axios from 'axios';
import '../App.css';



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
                    <FriendDetails key={friend.id} friend={friend} />
                ))}
            </div>
        )
    }
}

function FriendDetails({ friend }) {
    const { name, age, email } = friend;
    return (
        <div>
            < div className="friend-card">
                <h2>{name}</h2>
                <p>{age}</p>
                <p>{email}</p>
            </div>
        </div>
    );
}