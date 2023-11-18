import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        name: "Dummy",
        following: 0,
        avatar_url:
          "https://cdn.pixabay.com/photo/2013/07/13/12/07/avatar-159236_640.png",
      },
      id: 0,
    };
    // console.log(this.props.name + "child constructor");
  }

  async componentDidMount() {
    console.log(this.props.name + "Child component did mount");

    const data = await fetch("https://api.github.com/users/shellysea");
    const json = await data.json();
    console.log(json);

    this.setState({
      userData: json,
    });
    console.log("componentDidMount");
  }

  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  render() {
    const { name, following, avatar_url, id } = this.state.userData;

    return (
      <div className="user-card">
        <img style={{ height: "75px", width: "75px" }} src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Following: {following}</h3>
        <h3>ID: {id}</h3>
      </div>
    );
  }
}

export default UserClass;

/* 
parent constructor
parent render

-- react batches the render phase of both the instances of UseClass Class --
Firstchild constructor
First child render
Secondchild constructor
Second child render
--

-- Now Dom manipulation happens --

-- then componentdidmount() is called --
FirstChild component did mount
SecondChild component did mount
Parent component did mount
--
*/
