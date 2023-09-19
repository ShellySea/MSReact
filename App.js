import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return <div>Header</div>;
};

// Functional component
const Body = () => {
  return <div>Body</div>;
};

// React Element
const Body1 = <div>This is Body of React Element</div>;

const Footer = () => {
  return <div>Footer</div>;
};

const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      {Body1}
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
