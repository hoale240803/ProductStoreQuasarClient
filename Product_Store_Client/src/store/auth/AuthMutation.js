export default {
  loginSuccess(state, user) {
    debugger;
    state.userStates.isLoggedIn = user.isAuthenticated;
    state.userStates.userInfo = user;
  },
  loginFailure(state) {
    state.userStates.isLoggedIn = false;
    state.userStates = null;
  },
  logout(state) {
    state.userStates.isLoggedIn = false;
  },
  registerSuccess(state) {
    state.userStates.isLoggedIn = false;
  },
  registerFailure(state, payload) {
    state.userStates.isLoggedIn = false;
    state.errorResponse = payload;
  },
  forgotToken(state, payload) {
    state.forgotInfo.token = payload.token;
    state.forgotInfo.email = payload.email;
  },
};
