import state from "./UserState";
import mutations from "./UserMutation";
import getters from "./UserGetter";
import actions from "./UserAction";

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
