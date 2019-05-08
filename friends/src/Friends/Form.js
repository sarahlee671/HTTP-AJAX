import React from 'react';

class Form extends React.Component {
    constructor() {
        super();
        this.state= {
            name: '',
            age: '',
            email: '',
        }
    }

    render() {
        return (
            <div className="form-container">
                <form>
                    <h1>Add New Friend</h1>
                    <div>
                        <input className="input" type="text" placeholder="name"/>
                    </div>
                    <div>
                        <input className="input" type="text" placeholder="age"/>
                    </div>
                    <div>
                        <input className="input" type="text" placeholder="email"/>
                    </div>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default Form;