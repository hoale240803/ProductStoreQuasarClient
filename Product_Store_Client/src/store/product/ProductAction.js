import ProductServices from "../../services/product/ProductServices";

// const initialState = {
//   productsStates: {
//     isLoggedIn: false,
//     productsInfo: null,
//   },
//   accessToken: "",
//   errorResponse: null,
// };

export function update({ dispatch, state }, form) {
  return axios.post("user/update", form).then((response) => {
    dispatch("search", { code: "", name: "", group: "" });
    return response;
  });
}

export function createProduct({ commit }, productForm) {
  return ProductServices.create(productForm).then(
    (products) => {
      return Promise.resolve(products.data);
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
export function createManyProduct({ commit }, productList) {
  return ProductServices.createManyProduct(productList).then(
    (products) => {
      return Promise.resolve(products);
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
export function getProductList({ commit }, productParameters) {
  return ProductServices.getAll(productParameters).then(
    (products) => {
      commit("LIST_PRODUCT", products.data);
      return Promise.resolve(products.data);
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
export function getProductListGroupByCategoryDate(
  { commit },
  searchCategories
) {
  return ProductServices.getAllGroupByCategoryLastest(searchCategories).then(
    (products) => {
      commit("LIST_PRODUCT_GROUP_BY_CATEGORY_DATE", products);
      return Promise.resolve(products);
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
export function getProductListGroupBySeller({ commit }, seller) {
  return ProductServices.getAllGroupByCategoryLastest(seller).then(
    (products) => {
      commit("LIST_PRODUCT_GROUP_BY_SELLER", products);
      return Promise.resolve(products);
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
export function getProductById({ commit }, idProduct) {
  ProductServices.getById(idProduct).then(
    (product) => {
      return Promise.resolve(product);
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
export function updateProduct({ commit }, product) {
  return ProductServices.update(product.id, product).then(
    (response) => {
      return Promise.resolve(response.data);
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
export function updateManyProduct({ commit }, productList) {
  return ProductServices.updateManyProduct(productList).then(
    (response) => {
      return Promise.resolve(response.data);
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
export function deleteProduct({ commit }, idProduct) {
  return ProductServices.delete(idProduct).then(
    (res) => {
      return Promise.resolve(res);
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
export function deleteManyProduct({ commit }, productList) {
  return ProductServices.deleteManyProduct(productList).then(
    (res) => {
      return Promise.resolve(res);
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
export function findByName({ commit }, name) {
  return ProductServices.findByName(name).then(
    (res) => {
      return Promise.resolve(res);
    },
    (error) => {
      return Promise.reject(error);
    }
  );
}
