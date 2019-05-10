import React from 'react';

class UpdateForm extends React.Component {
  state = {
    friend: this.props.activeFriend
  };

  changeHandler = e => {
    e.persist();
    let value = e.target.value;
    if (e.target.name === 'age') {
      value = parseInt(value, 10);
    }

    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: value
      }
    }));
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.friend);
  };

  render() {
    return (
        <div>
            <h2>Edit Friend</h2>
            <form onSubmit={this.handleSubmit}>
                <div>

                    <input
                        name="name"
                        type="text"
                        placeholder="name"
                        onChange={this.changeHandler}
                        value={this.state.name}
                    />
                </div>
                <div>
                    <input
                        className="input"
                        name="age"
                        type="text"
                        placeholder="age"
                        onChange={this.changeHandler}
                        value={this.state.age}
                    />
                </div>
                <div>
                    <input
                        className="input"
                        name="email"
                        type="text"
                        placeholder="email"
                        onChange={this.changeHandler}
                        value={this.state.email}
                    />
                </div>
                <button>Edit Friend</button>
            </form>
        </div>
    );
  }
}

export default UpdateForm;
