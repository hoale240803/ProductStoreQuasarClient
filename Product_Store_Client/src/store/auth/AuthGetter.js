export default {
  getIsLoggedIn: (state, getters) => {
    return state.userStates.isLoggedIn;
  },
  getUserInfo: (state, getters) => {
    return state.userStates.userInfo;
  },
  getFogotToken: (state, getters) => {
    return state.forgotInfo;
  },
};
