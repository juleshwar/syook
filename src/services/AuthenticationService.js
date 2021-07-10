import USERS from "../constants/users";

class AuthenticationServiceBean {
  authenticateUserCredentials({ username, password }) {
    if(!username || !password) {
      throw new Error("Username or Password not provided")
    }
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
