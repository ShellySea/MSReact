import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

// let btnName = "Login";

// const [btnName, setBtnName] = useState("Login");

// const login = () => {
//   if (btnName === "Login") {
//     setBtnName("Logout");
//   } else {
//     setBtnName("Login");
//   }
// };

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const login = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
        <button className="login" onClick={login}>
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
