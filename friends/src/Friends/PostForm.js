import React from 'react';


class PostForm extends React.Component {
    constructor() {
        super();
        this.state= {
            friend:{
                name: '',
                age: '',
                email: ''
            }
        };
    }

    handleChange = e => {
        e.persist();
        let value = e.target.value;
        if (e.target.name === 'age') {
            value = parseInt(value, 10)
        }
        this.setState(prevState => ({
            friend: {
                ...prevState.friend,
                [e.target.name]: value
            }
        }))
    }

    handleSubmit = e => {
        e.preventDefault();
        
 
        this.props.addFriend(this.state.friend);
        e.target.reset()

        this.setState({
            friend: {
                name: '',
                age: '',
                email: ''
            }
        })
    }

    



    render() {
        return (
            <div className="form-container">
                <h1>Friends</h1>
                
                <form onSubmit={this.handleSubmit}>
                    
                    <div>
                        
                        <input 
                            name ="name" 
                            type="text" 
                            placeholder="name" 
                            onChange={this.handleChange} 
                            value={this.state.friend.name} 
                        />
                    </div>
                    <div>
                        <input 
                            className="input" 
                            name="age"
                            type="text" 
                            placeholder="age"
                            onChange={this.handleChange}
                            value={this.state.friend.age}
                        />
                    </div>
                    <div>
                        <input 
                            className="input" 
                            name="email"
                            type="text" 
                            placeholder="email"
                            onChange={this.handleChange}
                            value={this.state.friend.email}
                        />
                    </div>
                    <button>Add New Friend</button>
                </form>
            </div>
        )
    }
}

export default PostForm;