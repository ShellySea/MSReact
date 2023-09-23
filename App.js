import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const styleCard = {
  backgroundColor: "pink",
};

const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://www.tastingtable.com/img/gallery/17-celebrity-chefs-and-their-favorite-fast-food-restaurants/l-intro-1674674335.jpg"
      />
      <h3 style={{ color: "green" }}>{props.resname}</h3>
      <h4>{props.cusines} North Indian, Biryani, Asian</h4>
      <h4>4.5 stars</h4>
      <h4>38 mins</h4>
    </div>
  );
};

// Functional component
const Body = () => {
  return (
    <div className="res-container">
      <RestaurantCard resname="Meghana Food" cusines="NN" />
      <RestaurantCard resname="KFC" />
      <RestaurantCard resname="McDonald" />
      <RestaurantCard resname="Sai Biryani" />
      <RestaurantCard resname="Chaitanya" />
    </div>
  );
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
