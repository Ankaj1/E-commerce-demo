import React from "react";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <>
      <div className="sidbar">
        <ul>
          <li>
            <Link to="/">
              <i className="fa fa-tachometer" aria-hidden="true"></i>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/user">
              <i className="fa fa-users" aria-hidden="true"></i>
              Users
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/products">
              {" "}
              <i className="fa fa-list" aria-hidden="true"></i>
              Products
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
