import React, { Component } from "react";
import Axios from "axios";
import { createAction } from "../../Redux/Action/Action";
import { connect } from "react-redux";
import swal from "sweetalert";
import { NavLink } from "react-router-dom";

import imgUser from "./../../Assets/img/user.jpg";
import { userService } from "../../Services";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRemove: false,
    };
  }
  removeKhoaHoc = (maKH, username) => {
    Axios({
      method: "POST",
      url: "https://elearning0706.cybersoft.edu.vn/api/QuanLyKhoaHoc/HuyGhiDanh",
      data: {
        maKhoaHoc: maKH,
        taiKhoan: username,
      },
    })
      .then((res) => {
        if (!res.data) return;
        const courseListFilter =
          this.props.getProfile.chiTietKhoaHocGhiDanh.filter((i) => {
            return i.maKhoaHoc !== maKH;
          });

        this.props.dispatch(
          createAction("FECH_PROFILE", {
            ...this.props.getProfile,
            chiTietKhoaHocGhiDanh: courseListFilter,
          })
        );

        swal("Hủy Đăng kí thành công", "", "success");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    let { getProfile } = this.props;

    return (
      <div className="profile my-5">
        <div className="container">
          <div className="row">
            <div className="col-6 col-lg-3">
              <img src={imgUser} />
            </div>
            <div className="col-6 col-lg-3">
              <div className="profile-user-settings ">
                <h1 className="profile-user-name">{getProfile.hoTen}</h1>
              </div>
              <div className="profile-stats mt-3">
                <p>
                  <b className="profile-stat-count">Tài khoản:</b>{" "}
                  {getProfile.taiKhoan}
                </p>
                <p className="">
                  <b className="profile-stat-count">Email:</b>
                  {getProfile.email}
                </p>
                <p>
                  <b className="profile-stat-count">Số điện thoại:</b>{" "}
                  {getProfile.soDT}
                </p>
                <button className="btn btn-outline-primary">
                  Chỉnh sửa thông tin
                </button>
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <div className="w-100 py-5">
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
                    {getProfile.chiTietKhoaHocGhiDanh.map((item, index) => {
                      return (
                        <tr key={index}>
                          <td>{index + 1}</td>
                          <td>{item.maKhoaHoc}</td>
                          <td>{item.tenKhoaHoc}</td>
                          <td>
                            <NavLink
                              to="profile"
                              className="btn btn-danger"
                              onClick={() =>
                                this.removeKhoaHoc(
                                  item.maKhoaHoc,
                                  getProfile.taiKhoan
                                )
                              }
                            >
                              Hủy Đăng Kí
                            </NavLink>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    const userLogin = JSON.parse(localStorage.getItem("userLogin"));
    const params = { taiKhoan: userLogin.taiKhoan };

    userService
      .infoProfile(params)
      .then((res) => {
        this.props.dispatch(createAction("FECH_PROFILE", res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }
}

const mapStateToProps = (state) => {
  return {
    getProfile: state.UserReducer.profile || {
      hoTen: "",
      matKhau: "",
      chiTietKhoaHocGhiDanh: [
        {
          tenKhoaHoc: "",
          maKhoaHoc: "",
          hoTen: "",
        },
      ],
    },
  };
};

export default connect(mapStateToProps)(Profile);
