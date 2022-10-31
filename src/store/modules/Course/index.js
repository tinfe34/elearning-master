import { createSlice, createAsyncThunk, current  } from "@reduxjs/toolkit";

//Api
import { getCourses, getCoursesDetail } from "../../../api/course";

//Thunk
export const GET_COURSE = createAsyncThunk("Course/GET_CUORSE", async () => {
  return await getCourses();
});

export const GET_DETAIL_COURSE = createAsyncThunk(
  "Course/GET_DETAIL_COURSE",
  async (id) => {
    try {
      return await getCoursesDetail(id);
    } catch (err) {
      console.log(err);
    }
  }
);

const Course = createSlice({
  name: "Course",

  initialState: {
    listCourse: [],
    listToCart: [],
    isCheckToCart: false,
    courseDetail: {},
  },

  reducers: {
    ADD_TO_CART: (state, { payload }) => {
      const arr = [...state.listCourse];
      const item = arr.find(item => item.maKhoaHoc === payload)
      
      state.listToCart = [...state.listToCart, item];

      //Save localstorge
      localStorage.setItem("cart_item", JSON.stringify(state.listToCart));
    },

    REMOVE_TO_CART: (state, { payload }) => {
      let arr = [...state.listToCart];
      state.listToCart = arr.filter((sp) => sp.maKhoaHoc !== payload);

      //Save localstorge
      localStorage.setItem("cart_item", JSON.stringify(state.listToCart));
    },

    LOCAL_CART: (state, { payload }) => {
      state.listToCart = payload
    },

    FETCH_COURSE_DETAIL: (state, { payload }) => (state.courseDetail = payload),
  },

  extraReducers: {
    [GET_COURSE.pending]: (state, { payload }) => {},
    [GET_COURSE.fulfilled]: (state, { payload }) => {
      state.listCourse = payload.map((obj) => ({
        ...obj,
        giaBan: "999,999",
      }));
    },
    [GET_COURSE.rejected]: (state, { payload }) => {},

    [GET_DETAIL_COURSE.pending]: (state, { payload }) => {},
    [GET_DETAIL_COURSE.fulfilled]: (state, { payload }) => {
      state.courseDetail = payload;
    },
    [GET_DETAIL_COURSE.rejected]: (state, { payload }) => {},
  },
});

const { actions, reducer } = Course;

export const {
  ADD_TO_CART,
  REMOVE_TO_CART,
  LOCAL_CART,
  FETCH_COURSE_DETAIL,
} = actions;

export default reducer;
