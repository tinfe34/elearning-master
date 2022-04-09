import Axios from "axios";
import {
  API_GET_COURSE,
  API_GET_COURSE_DETAIL,
  API_REGISTER_COURSE,
} from "../Constants/endpoints";

class CourseService {
  fechCourse() {
    return Axios({
      method: "GET",
      url: `${API_GET_COURSE}?MaNhom=GP01`,
    });
  }

  fechCourseDetail(courseId) {
    return Axios({
      method: "GET",
      url: `${API_GET_COURSE_DETAIL}?maKhoaHoc=${courseId}`,
    });
  }

  fechCourseDetail(courseId) {
    return Axios({
      method: "GET",
      url: `${API_GET_COURSE_DETAIL}?maKhoaHoc=${courseId}`,
    });
  }

  registerCourse(params) {
    return Axios({
      method: "POST",
      url: API_REGISTER_COURSE,
      data: params,
    })
  }
  
}

export default CourseService;
