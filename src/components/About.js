import React from "react";
import { Component } from "react"; // destructure instead of import React
import UserContext from "../contexts/UserContext";

import UserClass from "./UserClass";
import { ThemeContext } from "../contexts/ThemeContext";

// class About extends Component{} // can do this way and destructure while importing
class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // place for doing API calls in class comp
    console.log("Parent component did mount");
  }

  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme }) => (
          <div
            className={
              theme === "dark" ? "bg-slate-900 text-zinc-100" : "bg-white"
            }
          >
            <h3>This is About Component!</h3>
            <div>
              LoggedIn User:
              <UserContext.Consumer>
                {(data) => <h1 className="font-bold">{data.loggedInUser}</h1>}
              </UserContext.Consumer>
            </div>
            <UserClass
              type={"Class"}
              name={"First"}
              location={"Jersey"}
              contact={"shellyseasail"}
            />
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default About;
