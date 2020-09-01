import React, { Component } from 'react'
import Axios from 'axios'
import { createAction } from '../../Redux/Action/Action'
import { connect } from 'react-redux'
import swal from 'sweetalert';
import { NavLink } from 'react-router-dom';

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = {

            isRemove: false

        }
    }
    removeKhoaHoc = (maKH, username) => {
        // console.log(maKH, username)
        
        Axios({
            method: 'POST',
            url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh',
            data: {
                "maKhoaHoc": maKH,
                "taiKhoan": username
            }
        }).then((res) => {
            window.location.reload()
            swal("Hủy Đăng kí thành công", "", "success").then(res => {
                if (res) {
                   
                }
            })


        }).catch((err) => {
            console.log(err)
        })
    }
    render() {
        let { getProfile } = this.props;
        console.log(getProfile)
        return (
            <div>

                <h1 className="text-danger text-center my-5">Profile</h1>
                <div className="w-75 m-auto pt-5">
                    <p><b>Tài khoản</b>: {getProfile.taiKhoan}</p>
                    <p><b>Họ Tên</b>: {getProfile.họTên}</p>
                    <p><b>Email</b>: {getProfile.email}</p>
                    <p><b>Số Điện Thoại</b>: {getProfile.soDT}</p>
                </div>
                <div className="w-75 m-auto py-5">
                    <table className="table  table-hover table-bordered">
                        <thead className="thead-dark">
                            <tr>
                                <th>STT</th>
                                <th>Mã Khóa Học</th>
                                <th>Tên Khóa Học</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getProfile.chiTietKhoaHocGhiDanh.map((item, index) => {
                                    return (
                                        <tr>
                                            <td>{index + 1}</td>
                                            <td>{item.maKhoaHoc}</td>
                                            <td>{item.tenKhoaHoc}</td>
                                            <td><NavLink to="profile" className="btn btn-danger" onClick={() => this.removeKhoaHoc(item.maKhoaHoc, getProfile.taiKhoan)}>Hủy Đăng Kí</NavLink></td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )   
    }
    componentDidMount() {
        let user = JSON.parse(localStorage.getItem('userLogin'))
        Axios({
            method: "POST",
            url: 'http://elearning0706.cybersoft.edu.vn/api/QuanLyNguoiDung/ThongTinTaiKhoan',
            data: { "taiKhoan": user.taiKhoan },
            headers: {
                "Authorization": "Bearer  " + user.accessToken
            }

        }).then((res) => {
            this.props.dispatch(createAction('FECH_PROFILE', res.data))
        }).catch((err) => {
            console.log(err)
        })
    }
}
const mapStateToProps = (state) => {
    return {
        getProfile: state.UserReducer.profile || {
            hoTen: '',
            matKhau: '',
            chiTietKhoaHocGhiDanh: [{
                tenKhoaHoc: '',
                maKhoaHoc: '',
            }]
        }
    }
}
export default connect(mapStateToProps)(Profile)