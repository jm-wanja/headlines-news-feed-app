import React from 'react';

/**
 * @param Footer
 * @return {*} render the footer component
*/

function Footer() {
  return (
    <footer className="page-footer pink">
    <div className="footer-copyright">
      <div className="container">
        <p className="copyright text-muted">
          Made with <span className='red'>&#x2764;</span> by Julie Wanja.
  Hosted on <a href='https://github.com/jm-wanja/headlines-news-feed-app'>
            Github</a>.Copyright &copy; Julie. M. Wanja, 2017 | All rights reserved
        </p>
      </div>
    </div>
  </footer>);
}


export default Footer;

