import AuthenticationService from "../services/AuthenticationService";

describe("AuthenticationService", () => {
  test("should throw no username/password provided error", () => {
    const user = {};
    expect(() =>
      AuthenticationService.authenticateUserCredentials(user)
    ).toThrowError(new Error("Username or Password not provided"));
  });
  test("should return true", () => {
    const user = {
      username: "amar",
      password: "amar123",
    };
    expect(
      AuthenticationService.authenticateUserCredentials(user)
    ).toBeTruthy();
  });
  test("should return false", () => {
    const user = {
      username: "A",
      password: "X",
    };
    expect(AuthenticationService.authenticateUserCredentials(user)).toBeFalsy();
  });
});
