import React from "react";
import { Component } from "react"; // destructure instead of import React

import UserClass from "./UserClass";

// class About extends Component{} // can do this way and destructure while importing
class About extends Component {
  constructor(props) {
    super(props);
    // console.log("parent constructor");
  }

  componentDidMount() {
    // place for doing API calls in class comp
    console.log("Parent component did mount");
  }

  render() {
    // console.log("parent render");
    return (
      <div>
        <h3>This is About Component!</h3>
        <UserClass
          type={"Class"}
          name={"First"}
          location={"Jersey"}
          contact={"shellyseasail"}
        />
      </div>
    );
  }
}

export default About;
