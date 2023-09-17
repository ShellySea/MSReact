import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading1 = (
  <h1 className="head1" tabIndex="4">
    This is heading 1 using React Element!
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading1);
