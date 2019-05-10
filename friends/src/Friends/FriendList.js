// import React, { Component } from 'react';
// import '../App.css';
// import Friend from './Friend'



// export default class FriendList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             friends: []
//         };
//     }



//     render() {
//         return (
//             <div className="friend-list">
//                 {this.props.friends.map(friend => (
//                     <Friend key={friend.id} friend={friend} />
//                 ))}
//             </div>
//         )
//     }
// }

import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function FriendList(props) {
  
  return (
    <div>
        
        {props.friends.map(friend => (
            <div className="friend-card" key={friend.id}>
                <h2>{friend.name}</h2>
                <p>{friend.age}</p>
                <p>{friend.email}</p>
                <button>Delete</button>
                <Link to="/update-form"><button>Edit</button></Link>
            </div>

            
        ))}
    </div>
  );
}

export default FriendList;