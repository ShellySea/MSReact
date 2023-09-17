import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    id: "tid",
    style: {
      fontStyle: "italic",
      fontFamily: "verdana",
    },
    key: "b",
  },
  "Hey Saily!"
);

const heading2 = React.createElement(
  "h1",
  {
    className: "cid",
    style: {
      fontStyle: "bold",
    },
    key: "a",
    xyz: "ppp",
  },
  "How you doin!!"
);

// using traditional createElement method by React

// const container = React.createElement("div", { id: "container" }, [
//   heading1,
//   heading2,
// ]);

// using JSX
const container = <div id="container">{[heading1, heading2]}</div>;

// For complex structure using JSX:

console.log(heading2); /* its basically an object and not an HTML element */

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
