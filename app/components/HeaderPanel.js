/* import React from 'react';
import { Header } from 'react-mdl';

export class HeaderPanel extends React.Component {
  render() {
    return (
            <div>
                 <div className='feed-name'>NEWSLY READER</div>
                <Header title="NEWSLY READER" style={{ marginLeft: '240px' }}>

                </Header>
            </div>
    );
  }
}*/

import React from 'react';
import { Link, hashHistory } from 'react-router';

class Header extends React.Component {
  constructor() {
    super();

    this.handleLogoutClick = this.handleLogoutClick.bind(this);
  }


  handleLogoutClick() {
    localStorage.removeItem('id_token');
    hashHistory.push('/login');
  }

  render() {
    function LogOutButton(props) {
      return (
      <li>
        <button className="btn btn-danger log" style={{ paddingLeft: 15 }} onClick={props.onClick}>Log out 
        </button>
      </li>
      );
    }

    let button = null;
    const IsLoggedIn = localStorage.getItem('id_token');
    if (IsLoggedIn) {
      button = < LogOutButton onClick={this.handleLogoutClick}/>;
    }

    return (
      <div className="col-sm-12" style={{ margin: 15 }}>
        <div className="navbar-header">
          <Link className="navbar-brand" to="/">InTheKnow</Link>

        </div>
        <ul className="nav navbar-nav">
          <li>
            <Link to="bookmarks">Favourites</Link>
          </li>
        </ul>
        <ul className="nav navbar-nav navbar-right" style={{ marginRight: 15 }}>
          {button}
        </ul>
      </div>

    );
  }
}

export default Header;
