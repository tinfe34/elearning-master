import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createAction } from "../../Redux/Action/Action";
import { ADD_TO_CART } from "../../Redux/Action/Constans";
import swal from "sweetalert";
class Course extends Component {
  state = {
    isCheck: false,
  };

  addToCart = (course) => {
    this.props.dispatch(createAction(ADD_TO_CART, course));
    
    swal("Thêm sản phẩm thành công!!!", "", "success");
    this.setState({
      isCheck: true,
    });
  };

  render() {
    let { course } = this.props;

    return (
      <div className="card mb-5" style={{ border: "none" }}>
        <img
          className="card-img-top"
          src={course.hinhAnh}
          height={280}
          width={"100%"}
        />
        <div className="card-body">
          <h4 className="card-title">{course.tenKhoaHoc}</h4>
          <p className="review">
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
            <i className="fa fa-star" />
          </p>

          <div className="row">
            <div className="col-9">
              <p>
                <b>Học phí:</b>{" "}
                {course.giaBan
                  .toString()
                  .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + " VNĐ"}
              </p>
              <p>
                <b>Giảng viên:</b> {course.nguoiTao.hoTen}
              </p>
            </div>
            <div className="col-3">
              {course.active ? (
                <div
                  className="cart-right text-danger"
                  style={{ fontSize: "40px" }}
                  data-toggle="modal"
                  data-target="#modelCart"
                >
                  <i className="fa fa-cart-arrow-down"></i>
                </div>
              ) : (
                <div
                  className="cart-right text-success"
                  style={{ fontSize: "40px" }}
                  onClick={() => this.addToCart(course)}
                >
                  <i className="fa fa-cart-plus"></i>
                </div>
              )}
            </div>
          </div>

          <NavLink to={`/courseDetail/${course.maKhoaHoc}`}>
            <button className="btn-primary">Chi Tiết Khóa Học</button>
          </NavLink>
        </div>
      </div>
    );
  }
}

export default connect()(Course);
