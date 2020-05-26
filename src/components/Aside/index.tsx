import React from "react";
import "./styles.scss";
import { Link } from "react-router-dom";

const Aside: React.FC = () => {
  return (
    <div className="aside">
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
    </div>
  );
};

export default Aside;
