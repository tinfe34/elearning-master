import React, { Component } from 'react'
import { connect } from 'react-redux'
import { asyncCourseDetail } from '../../Redux/Action/asyncCourseDetail'
import './CourseDetail.scss'
import Axios from 'axios'
import swal from 'sweetalert'

class CourseDetail extends Component {

    toBuyCourse = (maKH) => {
        let user = JSON.parse(localStorage.getItem('userLogin'))
        if (user) {
            Axios({
                method: 'POST',
                url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/DangKyKhoaHoc',
                data: {
                    "maKhoaHoc": maKH,
                    "taiKhoan": user.taiKhoan
                },

            }).then((res) => {
                swal("Đăng kí  Thành Công!", "", "success")
            }).catch((err) => {
                swal("Bạn đã mua khóa học này rồi!", "", "error")
                // console.log(err)
            })
        }
       else{
        swal({
            title: "Vui lòng đăng nhập!",
            text: '',
            icon: "warning",
            button: "OK",
        });

       }
        // console.log(err)
    }
    render() {
        let { courseDetail } = this.props;
        console.log(courseDetail)
        return (
            <div className="courseDetail">
                {/* mainTOP */}
                <div className="mainTop my-5">
                    <div className="content">
                        <div className="container-fluid">
                            <div className="row">

                                <div className="col-12 col-md-6">
                                    <div className="content_left">
                                        <h1 className=" my-3">CHUYÊN GIA {courseDetail.tenKhoaHoc}</h1>
                                        <p >
                                            <span className='review'> <i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span>
                                        </p>
                                        <p><b>Giảng viên: </b>{courseDetail.nguoiTao.hoTen}</p>
                                        <p><b>Lượt xem: </b>{courseDetail.luotXem}</p>
                                        <p><b>Khai giảng: </b>{courseDetail.ngayTao}</p>

                                        <div className="work mt-4">
                                            <h4 className="text-danger">HỌC XONG LÀM VIỆC TẠI ĐÂU ?</h4>
                                            <ol>
                                                <li>Apply vào tất cả công ty </li>
                                                <li>Các công ty outsourcing</li>
                                                <li>Các công ty startup</li>
                                                <li>Công ty, tập đoàn trong nước và nước ngoài...</li>
                                                <li>Xin thực tập, có dự án bảo vệ đề tài tốt nghiệp,...</li>
                                                <li>Tìm kiếm công việc freelancer</li>
                                            </ol>
                                        </div>
                                        <button className="btn btn-success p-3 my-3 w-100" onClick={()=>this.toBuyCourse(courseDetail.maKhoaHoc)}>ĐĂNG KÝ NGAY</button>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="content_right">
                                        <div className="video">
                                            <img src={courseDetail.hinhAnh} /><br />
                                            <div className="video_icon">
                                                <i class="fa fa-play-circle"></i>
                                            </div>
                                        </div>
                                        <div className="time mt-5 text-danger">
                                            <div className="row">
                                                <div className="col-4">
                                                   
                                                    <p>21 TUẦN</p>
                                                    <p>OFFLINE</p>

                                                </div>
                                                <div className="col-4">

                                                    <p>126 GIỜ</p>
                                                    <p>OFFLINE</p>

                                                </div>
                                                <div className="col-4">

                                                    <p>ONLINE</p>
                                                    <p>SUPPORT</p>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }

    componentDidMount() {

        this.props.dispatch(asyncCourseDetail(this.props.match.params.id))
    }
}

const mapStateToProps = (state) => {
    // console.log(state.CourseReducer.courseDetail)
    return {
        courseDetail: state.CourseReducer.courseDetail || {
            hinhAnh: "",
            nguoiTao: [
                {
                    hoTen: ''
                }
            ]
        }
    }
}

export default connect(mapStateToProps)(CourseDetail)