// import React from 'react';

// class Footer extends React.Component{
//   constructor(){
//     super();
//   }

//   render() {
//     const footerText = {};
//     return (
//       React.createElement('footer', null,
//         React.createElement('p', { dangerouslySetInnerHTML: {
//           __html: "Made with <span class='red'>&#x2764;</span> by Julie Wanja</a>. Hosted on <a href='https://github.com/jm-wanja/headlines-news-feed-app'>Github</a>."
//         }
//         })
//       )
//     );
//   }
// });

// module.exports = Footer;


import React from 'react';

const Footer = () => (
  <footer className="page-footer pink">
    <div className="footer-copyright">
      <div className="container">
        <p className="copyright text-muted">
          "Made with <span class='red'>&#x2764;</span> by Julie Wanja.
  Hosted on <a href='https://github.com/jm-wanja/headlines-news-feed-app'>
            Github</a>.Copyright &copy; Julie. M. Wanja, 2017 | All rights reserved"
        </p>
      </div>
    </div>
  </footer>
);


export default Footer;

