import React from 'react';

const Friend = props => {
    const { name, age, email } = props.friend;
    return (
        <div>
            < div className="friend-card">
                <h2>{name}</h2>
                <p>{age}</p>
                <p>{email}</p>
                <button>Delete</button>
                <button>Edit</button>
            </div>
        </div>
    );
}

export default Friend;