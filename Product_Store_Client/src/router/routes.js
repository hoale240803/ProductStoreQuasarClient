const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/user/UserList.vue") },
      {
        path: "/product",
        component: () => import("pages/product/ProductList.vue"),
      },
      {
        path: "/employee",
        component: () => import("pages/employee/EmployeeList.vue"),
      },
      {
        path: "/orders_history",
        component: () => import("pages/history_order/HistoryOrderList.vue"),
      },
      {
        path: "/orders_status",
        component: () => import("pages/order/OrderList.vue"),
      },
      {
        path: "/inventory",
        component: () => import("pages/inventory/Inventory.vue"),
      },
      {
        path: "/shipper",
        component: () => import("pages/shipper/ManageShipper.vue"),
      },
    ],
  },
  {
    path: "/profile",
    component: () => import("pages/profile/Profile.vue"),
  },
  {
    path: "/login",
    component: () => import("pages/login/Login.vue"),
  },
  {
    path: "/register",
    component: () => import("pages/register/Register.vue"),
  },
  {
    path: "/resetPassword",
    component: () => import("pages/authen/reset-password/ResetPassword.vue"),
  },
  {
    path: "/forgotPassword",
    component: () => import("pages/authen/forgot-password/ForgotPassword.vue"),
  },

  {
    path: "/authen",
    component: () => import("pages/register/Register.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/Error404.vue"),
  },
];

export default routes;
