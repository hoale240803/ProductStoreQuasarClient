import { createStore } from "vuex";
import auth from "./auth";
import user from "./user";

export default function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      auth,
      user,
    },

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
}
