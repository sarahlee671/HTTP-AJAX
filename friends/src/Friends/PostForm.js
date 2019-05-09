import React from 'react';
import Axios from 'axios';

class PostForm extends React.Component {
    constructor() {
        super();
        this.state= {
                name: '',
                age: '',
                email: ''
        };
    }

    handleChange = e => {
        this.setState({ [e.target.name]: e.target.value})
    }

    postFriend = e => {
        e.preventDefault();
        const { name, age, email} = this.state;
        Axios.post('http://localhost:5000/friends', {
            name,
            age,
            email
        })
            .then(res => {console.log(res)})
            .catch(err => {console.log(err)})
    }
    



    render() {
        return (
            <div className="form-container">
                <h1>Add New Friend</h1>
                <form onSubmit={this.postFriend}>
                    
                    <div>
                        <input 
                            className="input"
                            name ="name" 
                            type="text" 
                            placeholder="name" 
                            onChange={this.handleChange} 
                            value={this.state.name} 
                        />
                    </div>
                    <div>
                        <input 
                            className="input" 
                            name="age"
                            type="text" 
                            placeholder="age"
                            onChange={this.handleChange}
                            value={this.state.age}
                        />
                    </div>
                    <div>
                        <input 
                            className="input" 
                            name="email"
                            type="text" 
                            placeholder="email"
                            onChange={this.handleChange}
                            value={this.state.email}
                        />
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm;