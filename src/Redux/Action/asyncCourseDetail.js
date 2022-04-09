import { createAction } from "./Action";

import { FETCH_COURSE_DETAIL } from "./Constans";
import { courseService } from "../../Services";

export const asyncCourseDetail = (id) => {
  return (dispatch) => {
    courseService
      .fechCourseDetail(id)
      .then((res) => {
        // console.log(res)
        dispatch(createAction(FETCH_COURSE_DETAIL, res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
