import React from 'react';
import { GoogleLogin } from 'react-google-login-component';
import user from './UserDetails';

/**
 * Class displaying Login Page
 * @extends React.Component
 */
class Login extends React.Component {

  responseGoogle(googleUser) {
    const idToken = googleUser.getAuthResponse().id_token;
    localStorage.setItem('id_token', idToken);
    document.location.reload();
    console.log({ accessToken: idToken });
  }

  /**
   * Display the login Component
   *
   * @return {jsx} render the login Content
   */
  render() {
    const clientId = '598243534771-kfb4g1rpan869pnhoj8167j22fm5io7h.apps.googleusercontent.com';
    this.clientId = clientId;
    const responseGoogle = (response) => {
      user.login(response);
    };
    return (
            <div id="Login">
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
                                    className="btn-large waves-effect waves-light red lighten-1"
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
