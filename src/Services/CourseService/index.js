import Axios from "axios";
//Nâng cấp axios
class CourseService {
    FechCourse(){
        return  Axios({
            method:"GET",
            url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=GP01"
        })
    };
    FechCourseDetail(courseId){
        return Axios({
             method: "GET",
             url: `http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${courseId}`,
         })
     }
}

export default CourseService;