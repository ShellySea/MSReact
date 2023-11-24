import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import useTheme from "../utils/useTheme";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const login = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  const onlineStatus = useOnlineStatus();

  const { currentTheme, toggleTheme } = useTheme();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg sm:bg-amber-200 lg:bg-lime-100">
      <div className="logo-container">
        <img className="w-28" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li>
            <button
              className="border-solid border-2 border-indigo-600"
              onClick={toggleTheme}
            >
              Dark Mode
            </button>
          </li>
          <li>
            <p>Current Theme: {currentTheme}</p>
          </li>
          <li className="px-4">Online Status: {onlineStatus ? "✅" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4">
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <button className="login" onClick={login}>
          {btnName}
        </button>
      </div>
    </div>
  );
};

export default Header;
