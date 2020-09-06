import React /* useState */ from "react";
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
              <a href="#">Bootcamp 2020</a>
            </li>
            <li>
              <a href="#">Pricing</a>
            </li>
            <li className="highlight">
              <a href="#">About us</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};
export default Header;
