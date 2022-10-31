import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";

const User = createSlice({
  name: "Auth",

  initialState: {
    userLogged: null,
    isLoggedIn: false,
  },

  reducers: {
    USER_LOGGED: (state, { payload }) => {
      state.userLogged = payload;

      state.isLoggedIn = true;

      //set localStorage
      localStorage.setItem('user_logged', JSON.stringify(payload))
      localStorage.setItem('access_token', JSON.stringify(payload.accessToken))
    },
    USER_LOGOUT: (state) => {
      state.userLogged = null;
      state.isLoggedIn = false;
    },
  },
  extraReducers: {},
});

const { actions, reducer } = User;

export const { USER_LOGGED, USER_LOGOUT } = actions;

export default reducer;
