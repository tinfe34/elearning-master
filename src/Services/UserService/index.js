import Axios from 'axios'

class UserService{
    
   sigIn(user){
        return Axios({
            method:"POST",
            url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangNhap",
            data : user
        })
     };

     sigUp(obj){
         console.log(obj)
        return Axios({
            method:"POST",
            url:"http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/DangKy",
            data : obj
        })
     }
}
export default  UserService;
    