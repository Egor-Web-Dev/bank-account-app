class AuthToken {
  static get() {
    return sessionStorage.getItem("token");
  }

  static set(token) {
    sessionStorage.setItem("token", token);
  }

  static delete() {
    sessionStorage.removeItem("token");
  }
}

export default AuthToken;
