import http from "../http";

class UserServices {
  getAll() {
    return http.get("/users");
  }

  get(id) {
    return http.get(`/users/${id}`);
  }

  create(data) {
    return http.post("/users", data);
  }

  update(id, data) {
    return http.put(`/users/${id}`, data);
  }

  delete(id) {
    return http.delete(`/users/${id}`);
  }

  findByName(title) {
    return http.get(`/users?name=${title}`);
  }
  login(dataLogin) {
    return http.post("/users", dataLogin).then((response) => {
      if (response.data.token) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    });
  }
  register(dataRegister) {
    return http.post("/users", dataRegister);
  }
  logout() {
    localStorage.removeItem("user");
  }

  //   deleteAll() {
  //     return http.delete(`/users`);
  //   }
}

export default new UserServices();
