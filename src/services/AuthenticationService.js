import USERS from "../constants/users";

class AuthenticationServiceBean {
  authenticateUserCredentials({ username, password }) {
    const loggedInUser = USERS.find(
      (user) => user.username === username && user.password === password
    );
    if (loggedInUser && loggedInUser.id) {
      return true;
    }
    return false;
  }
}
const AuthenticationService = new AuthenticationServiceBean();
export default AuthenticationService;
