import UsersService from "../../services/user/UserServices";

export default {
  getCurrent({ commit }) {
    return UsersService.getCurrent()
      .then((user) => commit("SET_CURRENT_USER", user.data))
      .catch((error) =>
        commit(
          "toast/NEW",
          { type: "error", message: error.message },
          { root: true }
        )
      );
  },
};
