import http from "../http";

class ProductServices {
  getAll() {
    return http.get("/products");
  }

  get(id) {
    return http.get(`/products/${id}`);
  }

  create(data) {
    return http.post("/products", data);
  }

  update(id, data) {
    return http.put(`/products/${id}`, data);
  }

  delete(id) {
    return http.delete(`/products/${id}`);
  }

  //   deleteAll() {
  //     return http.delete(`/products`);
  //   }

  findByName(name) {
    return http.get(`/products?name=${name}`);
  }
}

export default new ProductServices();
