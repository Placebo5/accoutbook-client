import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <div className="header__contents">
        <div className="header__logo">가계부</div>
        <nav className="header__menu">
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/monthly">수입/지출(월별)</Link>
            </li>
            <li>
              <Link to="/yearly">수입/지출(년도별)</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
