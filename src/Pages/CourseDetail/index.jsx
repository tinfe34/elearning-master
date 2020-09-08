import React, { Component } from 'react'
import { connect } from 'react-redux'
import { asyncCourseDetail } from '../../Redux/Action/asyncCourseDetail'
import './CourseDetail.scss'
import Axios from 'axios'
import swal from 'sweetalert'
import imgUser from './../../Assets/img/user.jpg'
import logo from './../../Assets/img/logo.png'
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
        else {
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
                        <div className="container">
                            <div className="row">

                                <div className="col-12 col-md-6">
                                    <div className="content_left">
                                        <h1 className=" my-3">CHUYÊN GIA {courseDetail.tenKhoaHoc}</h1>
                                        <p >
                                            <span className='review'> <i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i><i className="fa fa-star"></i></span>
                                        </p>
                                        <p><b>Giảng viên: </b>{courseDetail.nguoiTao.hoTen}</p>
                                        <p><b>Lượt xem: </b>{courseDetail.luotXem}</p>
                                        <p><b>Khai giảng: </b>{courseDetail.ngayTao}</p>


                                        <button className="btn btn-success p-3 my-3 w-100" onClick={() => this.toBuyCourse(courseDetail.maKhoaHoc)}>ĐĂNG KÝ NGAY</button>
                                    </div>
                                </div>

                                <div className="col-12 col-md-6">
                                    <div className="content_right">
                                        <div className="video">
                                            <img src={courseDetail.hinhAnh} /><br />
                                            <div className="video_icon">
                                                <i className="fa fa-play-circle" data-toggle="modal" data-target="#courseDetail"></i>
                                            </div>
                                        </div>
                                    </div>
                                      {/* <!-- The Modal --> */}
                            <div class="modal fade" id="courseDetail">
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        
                                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/0LTO0H2Duuc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                                    </div>
                                </div>
                            </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mainBottom">
                    <div className="container">
                        <div>
                            <ul className="nav nav-tabs" id="myTab" role="tablist">
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Mô Tả khóa học</a>
                                </li>
                                <li className="nav-item" role="presentation">
                                    <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Cảm nhận học viên </a>
                                </li>

                            </ul>
                            <div className="tab-content p-3" id="myTabContent">
                                <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">{courseDetail.moTa}</div>
                                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                                    <div className="media p-3">
                                        <img src={imgUser} alt="John Doe" className="mr-3 mt-3 rounded-circle" style={{ width: 60 }} />
                                        <div className="media-body">
                                            <h4>Lê Hữu Tín <small><i>19 tháng 9, 2020</i></small></h4>
                                            <p>Khóa Học chất lượng tốt mentor hổ trợ nhiệt tình, và hiện mình đang tìm việc </p>
                                            <div className="media p-3">
                                                <img src={logo} alt="Jane Doe" className="mr-3 mt-3 rounded-circle" style={{ width: 45 }} />
                                                <div className="media-body">
                                                    <h4>Admin <small><i>20 tháng 9, 2020</i></small></h4>
                                                    <p>Cảm ơn bạn đã quan tâm khóa học , mong bạn sớm tìm được việc làm</p>
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

