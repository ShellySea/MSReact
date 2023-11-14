import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }

  render() {
    const { name, location, contact, type } = this.props;
    const { count, count2 } = this.state;

    return (
      <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: {contact}</h4>
        <h4>Type: {type}</h4>
        <h4>Count: {count}</h4>
        <span>
          <button
            onClick={() => {
              this.setState({
                count: this.state.count + 1,
              });
            }}
          >
            Click
          </button>
        </span>
        <h4>Count2: {this.state.count2}</h4>
      </div>
    );
  }
}

export default UserClass;
