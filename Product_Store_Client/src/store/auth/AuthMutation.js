export default {
  loginSuccess(state, user) {
    debugger;
    state.isLoggedIn = true;
    state.userStates = user.userInfo;
    state.accessToken = user.accessToken;
  },
  loginFailure(state) {
    state.isLoggedIn = false;
    state.userStates = null;
  },
  logout(state) {
    state.isLoggedIn = false;
    state.userStates = null;
  },
  registerSuccess(state) {
    state.isLoggedIn = false;
  },
  registerFailure(state, payload) {
    state.isLoggedIn = false;
    state.errorResponse = payload;
  },
};
