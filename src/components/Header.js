import { LOGO_URL } from "../utils/constants";

const login = (el) => {
  if (el.target.innerHTML === "Login") {
    console.log("login");
    el.target.innerHTML = "Logout";
  } else {
    console.log("logout");
    el.target.innerHTML = "Login";
  }
};

const Header = () => {
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
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
