import axios from "axios";

export function search({ commit, dispatch, getters }, form) {
  return axios.post("user", form).then((response) => {
    const users = response.data;
    commit("USERS", users);
    return users;
  });
}

export function create({ dispatch, state }, form) {
  return axios.post("user/store", form).then((response) => {
    dispatch("search", { code: "", name: "", group: "" });
    return response;
  });
}

export function update({ dispatch, state }, form) {
  return axios.post("user/update", form).then((response) => {
    dispatch("search", { code: "", name: "", group: "" });
    return response;
  });
}

export function remove({ dispatch, state }, id) {
  return axios.post("user/" + id + "/delete").then((response) => {
    dispatch("search", { code: "", name: "", source: "" });
    return response;
  });
}

export function roleCodeDropDown({ commit, dispatch, getters }) {
  return axios.get("user/roles").then((response) => {
    let roleCodeOptions = response.data;
    commit("ROLECODE_OPTIONS", roleCodeOptions);
    // console.log(roleCodeOptions);
    return roleCodeOptions;
  });
}

export function changepass({ dispatch, state }, form) {
  return axios.post("user/changepass", form).then(() => {
    dispatch("search", { code: "", name: "", group: "" });
  });
}

export function getUserAdmin({ commit, dispatch, getters }) {
  return axios.get("user/user-admin").then((response) => {
    let hrUserOptions = response.data.hrUsers;
    let lwtUserOptions = response.data.lwtUsers;
    commit("HR_USER_OPTIONS", hrUserOptions);
    commit("LWT_USER_OPTIONS", lwtUserOptions);
    return response.data;
  });
}
/*
 */
