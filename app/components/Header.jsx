import React from 'react';
import { Link } from 'react-router-dom';

/**
 * @return {*} render the Header component
*/
function Header() {
  return (
      <div className="navbar-fixed">
        <nav className="pink" role="navigation">
          <div className="nav-wrapper container">
            <Link to="/" classID="logo-container" className="brand-logo center">
              InTheNow
            </Link>
          </div>
        </nav>
      </div>
  );
}

export default Header;
