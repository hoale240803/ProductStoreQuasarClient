// const user = JSON.parse(localStorage.getItem("user"));
// const userStates = user
//   ? { isLoggedIn: true, user }
//   : { isLoggedIn: false, user: null };

export default {
  userStates: {
    isLoggedIn: false,
    userInfo: null,
  },
  accessToken: "",
  errorResponse: null,
  forgotInfo: {
    email: "",
    token: "",
  },
};
