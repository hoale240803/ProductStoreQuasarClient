import AuthServices from "../../services/auth/AuthServices";

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
        debugger;
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
};
