import React from 'react';
import { Link, IndexLink } from 'react-router';

//  * @return {*} return the Header component
// */
export function Header(){
  return (<div className="navbar-fixed">
    <nav className="pink" role="navigation">
      <div className="nav-wrapper container">
        <IndexLink to="/" classID="logo-container" className="brand-logo">
          InTheKnow
        </IndexLink>
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
          <i className="material-icons">Menu</i>
        </a>
      </div>
    </nav>
  </div>);
}
