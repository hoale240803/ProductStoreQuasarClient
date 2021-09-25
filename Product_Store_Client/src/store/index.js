import { createStore } from "vuex";
import auth from "./auth";
import user from "./user";
import product from "./product";
// import product from "./product";
// export default function (/* { ssrContext } */) {
//   const Store = createStore({
//     modules: {
//       auth,
//       user,
//     },

//     // enable strict mode (adds overhead!)
//     // for dev mode and --debug builds only
//     strict: process.env.DEBUGGING,
//   });

//   return Store;
// }
const modules = {
  auth,
  user,
};

// for (const moduleName of Object.keys(modules)) {
//   if (modules[moduleName].actions.init) {
//     store.dispatch(`${moduleName}/init`);
//   }
// }
export default createStore({
  modules: {
    auth,
    user,
    product,
  },
});

/// SAMPLE

// import Vue from 'vue'
// import Vuex from 'vuex'

// import common from './common'
// import session from './session'
// import product from './product'
// import plan from './plan'
// import benefit from './benefit'
// import company from './company'
// import employee from './employee'
// import redeem from './redeem'
// import reimbursement from './reimbursement'
// import user from './user'
// import role from './role'
// import groupbenefits from './groupbenefit'
// import productgroup from './productgroup'
// import report from './report'
// import upload from './upload'
// import client from './client'
// import annoucement from './annoucement'

// Vue.use(Vuex)

// const modules = {
//   common,
//   session,
//   product,
//   plan,
//   benefit,
//   company,
//   employee,
//   redeem,
//   reimbursement,
//   user,
//   role,
//   groupbenefits,
//   productgroup,
//   report,
//   upload,
//   client,
//   annoucement
// }

// const store = new Vuex.Store({modules})

// // Automatically run the `init` action if available for every module.
// for (const moduleName of Object.keys(modules)) {
//   if (modules[moduleName].actions.init) {
//     store.dispatch(`${moduleName}/init`)
//   }
// }

// export default store
