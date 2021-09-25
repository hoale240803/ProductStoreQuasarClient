import http from "../http";

class ProductServices {
  getAll(productParameters) {
    return http.post("/Products/search/paging", productParameters);
  }

  getById(id) {
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

  getAllGroupByCategoryLastest(searchCategories) {
    return http.post("/products/groupbycategoryLatest", searchCategories);
  }
  updateManyProduct(productList) {
    return http.put(`/products/updateManyProduct`, productList);
  }
  createManyProduct(productList) {
    return http.post(`/products/createManyProduct`, productList);
  }
  deleteManyProduct(productList) {
    return http.delete(`/products/deleteManyProduct`, productList);
  }
}

export default new ProductServices();
