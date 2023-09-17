import React from "react";
import ReactDOM from "react-dom/client";

// React Element

const heading1 = (
  <h1 className="cid" tabIndex="4">
    This is heading 1 using React Element!
  </h1>
);

/** React Component: 2 ways
 * Class based - old way
 * Functional component - new way: Always name it with Capital letter
 *
 */

// functional component
const Heading2 = () => {
  return <h2 id="tid">Heading 2 functional component!</h2>;
};

const container = (
  <div id="container">
    {heading1}
    <Heading2 />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);
