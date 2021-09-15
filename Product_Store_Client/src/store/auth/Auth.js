// const user = JSON.parse(localStorage.getItem("user"));
// const userStates = user
//   ? { isLoggedIn: true, user }
//   : { isLoggedIn: false, user: null };

const initialState = {
  userStates: {
    isLoggedIn: false,
    userInfo: null,
  },
  accessToken: "",
  errorResponse: null,
};
export default auth = {
  namespaced: true,
  userStates: {
    isLoggedIn: false,
    userInfo: null,
  },
};
