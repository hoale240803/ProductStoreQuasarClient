import AuthServices from "../../services/auth/AuthServices";

// const initialState = {
//   userStates: {
//     isLoggedIn: false,
//     userInfo: null,
//   },
//   accessToken: "",
//   errorResponse: null,
// };
export default {
  login({ commit }, userLogin) {
    return AuthServices.login(userLogin).then(
      (user) => {
        commit("loginSuccess", user);
        return Promise.resolve(user);
      },
      (error) => {
        commit("loginFailure");
        return Promise.reject(error);
      }
    );
  },
  googleLogin({ commit }) {
    return AuthServices.googleSignIn().then(
      (user) => {
        commit("loginSuccess", user);
        return Promise.resolve(user);
      },
      (error) => {
        commit("loginFailure");
        return Promise.reject(error);
      }
    );
  },
  logout({ commit }) {
    AuthServices.logout();
    commit("logout");
  },
  register({ commit }, user) {
    return AuthServices.register(user).then(
      (response) => {
        if (response.status === 400) {
          // commit("registerFailure", response.data);
          return Promise.resolve(response.data);
        } else {
          commit("registerSuccess");
          return Promise.resolve(response.data);
        }
      },
      (error) => {
        commit("registerFailure", error);
        return Promise.reject(error);
      }
    );
  },
  forgotPassword({ commit }, email) {
    return AuthServices.forgotPassword(email).then(
      (res) => {
        commit("forgotToken", res.data);
        return Promise.resolve(res);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  },
  resetPassword({ commit }, form) {
    return AuthServices.resetPassword(form).then(
      (res) => {
        return Promise.resolve(res);
      },
      (error) => {
        return Promise.reject(error);
      }
    );
  },
};
