const user = JSON.parse(localStorage.getItem("user"));
const userStates = user
  ? { isLoggedIn: true, user }
  : { isLoggedIn: false, user: null };

export default auth = {
  namespaced: true,
  userStates,
};
