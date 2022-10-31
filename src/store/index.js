import { configureStore } from "@reduxjs/toolkit";

//MODULE
import Course from "./modules/Course";
import Auth from "./modules/Auth";

const store = configureStore({
  reducer: {
    Course,
    Auth
  },
});

export default store;
