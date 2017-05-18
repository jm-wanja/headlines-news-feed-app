import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
// import { hashHistory } from 'react-router';
// import user from './UserDetails';

/**
 * Class displaying Login Page
 * @extends React.Component
 */
class Login extends React.Component {
//   constructor() {
    // super();
//   }
// store user data in local storage html5
//   storeUserData(response) {
//     localStorage.setItem('id_token', response.googleId);
//     console.log(response);
//     console.log('response id', response.googleId);
//     hashHistory.push('/');
//   }

//   responseGoogle(googleUser) {
//     const idToken = googleUser.getAuthResponse().id_token;
//     console.log({ accessToken: idToken });
//   }

  /**
   * Display the login Component
   * @return {jsx} render the login Content
   */
  render() {
    const clientId = '598243534771-kfb4g1rpan869pnhoj8167j22fm5io7h.apps.googleusercontent.com';
    this.clientId = clientId;
    // const responseGoogle = (response) => {
    // user.login(response);
    // document.location.reload();
    // };
    return (
            <div>
                <nav className="pink">
                    <div className="nav-wrapper">
                        <a href="" className="brand-logo center">InTheNow!</a>
                    </div>
                </nav>
                <div id="index-banner" className="parallax-container">
                    <div className="section no-pad-bot">
                        <div className="container">
                            <br />
                            <h1 className="header center pink-text text-lighten-2">
                                InTheNow!
              </h1>
                            <div className="row center">
                                <h5 className="header col s12 light">
                                    Be in the know now...
                </h5>
                                <br /><br />

                                <p>Please Login to continue</p>
                            </div>
                            <div className="row center">
                                <GoogleLogin
                                    socialId={clientId}
                                    class="google-login"
                                    scope="profile"
                                    responseHandler={this.responseGoogle}
                                    buttonText="Login With Google+"
                                    onSuccess={this.storeUserData}
                                    onFailure={this.responseGoogle}
                                    className="btn-large waves-effect waves-light pink lighten-1"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
  }
}
export default Login;
