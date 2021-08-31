import state from "./AuthStates";
import mutations from "./AuthMutation";
import actions from "./AuthActions";
import getters from "./AuthGetter";

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
