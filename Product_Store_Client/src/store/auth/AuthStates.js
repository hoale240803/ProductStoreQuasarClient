const user = JSON.parse(localStorage.getItem("user"));

const userStates = user
  ? { isLoggedIn: true, userInfo }
  : { isLoggedIn: false, userInfo: null };

export default {
  userStates: userStates,
  accessToken: "",
  errorResponse: null,
};
