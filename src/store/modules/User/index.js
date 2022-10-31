import { createSlice } from "@reduxjs/toolkit";

const User = createSlice({
  name: "User",

  initialState: {
    credential: null,
    profile: null,
  },

  reducers: {
    USER: (state, { payload }) => state.credential = payload,
    REMOVE_USER: (state, { payload }) => state.credential = payload,
    FECH_PROFILE: (state, { payload }) => state.profile = payload,
  },
  extraReducers: {},
});

const { actions, reducer } = User;

export const { USER, REMOVE_USER, FECH_PROFILE } = actions;

export default reducer;
