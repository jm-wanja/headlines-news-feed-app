import React from 'react';
import { Link } from 'react-router-dom';

//  * @return {*} return the Header component
// */
function Header() {
  return (
      <div className="navbar-fixed">
        <nav className="pink" role="navigation">
          <div className="nav-wrapper container">
            <Link to="/" classID="logo-container" className="brand-logo">
              InTheNow
            </Link>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>

            <ul classID="nav-mobile" className="side-nav">
              <li>
                <Link to="/logout">Logout</Link>
              </li>
            </ul>
            <a href="/#" data-activates="nav-mobile" className="button-collapse">
            </a>
          </div>
        </nav>
      </div>
  );
}

export default Header;
