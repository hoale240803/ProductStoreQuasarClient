const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/user/UserList.vue") },
    ],
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
    component: () => import("pages/register/Register.vue"),
  },
  {
    path: "/forgotPassword",
    component: () => import("pages/register/Register.vue"),
  },
  {
    path: "/product",
    component: () => import("pages/register/Register.vue"),
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
