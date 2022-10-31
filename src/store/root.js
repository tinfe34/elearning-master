import { createSlice } from "@reduxjs/toolkit";

const Root = createSlice({
  name: "Root",

  initialState: {
    isLoading: false,
  },

  reducers: {
    UPDATE_IS_LOADING: (state, { payload }) => {
      state.isLoading = payload;
    },
  },
});

const { actions, reducer } = Root;

export const { UPDATE_IS_LOADING } = actions;

export default reducer;
