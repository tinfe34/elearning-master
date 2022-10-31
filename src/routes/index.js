
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import CourseDetail from "../pages/CourseDetail";

import { PATH, PATH_DETAIL, PATH_HOME, PATH_LOGIN, PATH_REGISTER } from "./paths";
import React, { lazy } from 'react';

export default [
  //Home
  {
    path: PATH,
    exact: true,
    homeTemplate: true,
    Component: HomePage,
    title: 'Home'
  },

  {
    path: PATH_HOME,
    exact: true,
    Component: HomePage,
    title: 'Home'
  },
  {
    path: PATH_DETAIL,
    exact: true,
    Component: CourseDetail,
    title: 'detail'
  },
  //Login
  {
    path: PATH_LOGIN,
    exact: true,
    Component: Login,
    title: 'Login'
  },

  //Register
  {
    path: PATH_REGISTER,
    exact: true,
    Component: Register,
    title: 'Register'
  },
]


