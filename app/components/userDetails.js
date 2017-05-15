import Cookies from 'js-cookie';
/**
 * @class User
 */
class User {
  constructor() {
    this.userDetails = Cookies.get('') // get cookie
      === undefined ? undefined : JSON.parse(Cookies.get('ITN'));
    this.isLogin = this.isLoggedIn();
    // this.favorites = '';
    this.name = '';
    this.imageUrl = '';
    this.email = '';
    this.assignUserValues();
  }
  /**
   * @description  logs the user in.
   * @param {any} response an object containing user profile
   * @returns {undefined} it returns no value
   */
  login(response) {
    const user = response.w3;
    Cookies.set('ITN', { // set cookie
      name: user.ig,
      email: user.U3,
      imageUrl: user.Paa,
    });
    this.userDetails = {
      name: user.ig,
      email: user.U3,
      imageUrl: user.Paa,
    };
  }

  isLoggedIn() {
    return !(this.userDetails === undefined);
  }
  /**
   * @description assigns User values
   * @returns {boolean} returns true or false
   */
  assignUserValues() {
    if (this.isLogin) {
    //   this.favorites = this.userDetails.favorites;
      this.name = this.userDetails.name;
      this.email = this.userDetails.email;
      this.imageUrl = this.userDetails.imageUrl;
    }
  }

//   removeFavourite(item, index) {
//     this.favorites.splice(index, 1);
//   }
  /**
   * @returns {*} returns updated cookie storage
   */
  logOut() {
    this.isLogin = false;
    Cookies.remove('ITN'); // remove cookie
  }
}
const user = new User();

export default user;
