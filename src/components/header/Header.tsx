import React /* useState */ from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import logo from "../../images/logo3-transparent.png";

const Header: React.FC = () => {
  return (
    <div>
      <header className="container">
        <div className="logo">
          <img
            src={logo}
            className="App-logo"
            alt="diagram"
            width="150px"
            height="150px"
          />
        </div>

        <nav>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Panacloud</a>
            </li>
            <li className="highlight">
              <a href="#">Notification</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
