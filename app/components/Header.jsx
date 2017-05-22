import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @return {*} render the Header component
 * @param {nav} nav header and login
*/
function Header(nav) {
  return (
      <div className="navbar-fixed">
        <nav className="pink" role="navigation">
          <div className="nav-wrapper container">
            <Link to="/" classID="logo-container" className="brand-logo center">
              InTheNow
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/login">Login</Link>
                </li>
            </ul>
          </div>
        </nav>
      </div>
  );
}

export default Header;
