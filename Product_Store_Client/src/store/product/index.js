import state from "./ProductState";
import * as mutations from "./ProductMutation";
import * as getters from "./ProductGetter";
import * as actions from "./ProductAction";

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
