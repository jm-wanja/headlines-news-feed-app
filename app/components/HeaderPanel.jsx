import React from 'react';
// const Link = require('react-router-dom').Link;
import { Link } from 'react-router-dom';

//  * @return {*} return the Header component
// */
// export function Header(){
//   return 
// const Header = () => (
class Header extends React.Component {
  render() {
    return (
      <div className="navbar-fixed">
        
        <nav className="pink" role="navigation">
          
          <div className="nav-wrapper container">
            <Link to="/" classID="logo-container" className="brand-logo">
              InTheKnow
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
              <i className="material-icons">Menu</i>
            </a>
          </div>
        </nav>
      </div>
    );
  }
};

export default Header;
