// const user = JSON.parse(localStorage.getItem("user"));

// const userStates = user
//   ? { isLoggedIn: true, userInfo: user.userInfo }
//   : { isLoggedIn: false, userInfo: null };

const initialState = {
  userStates: {
    isLoggedIn: false,
    userInfo: null,
  },
  accessToken: "",
  errorResponse: null,
};
export default {
  loginSuccess(state = initialState, user) {
    debugger;
    state.userStates = user.userInfo;
    state.accessToken = user.accessToken;
  },
  loginFailure(state = initialState) {
    state.userStates.isLoggedIn = false;
    state.userStates = null;
  },
  logout(state = initialState) {
    state.userStates.isLoggedIn = false;
    state.userStates = null;
  },
  registerSuccess(state = initialState) {
    state.userStates.isLoggedIn = false;
  },
  registerFailure(state = initialState, payload) {
    state.userStates.isLoggedIn = false;
    state.errorResponse = payload;
  },
};
