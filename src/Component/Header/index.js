import React, { Component } from "react";
import logo from "./../../Assets/img/logo.png";
import imgUser from "./../../Assets/img/user.jpg";

import { Link, NavLink } from "react-router-dom";
import { connect } from "react-redux";
import swal from "sweetalert";

import ModalCart from "../ModalCart";
import { createAction } from "../../Redux/Action/Action";
import { REMOVE_USER } from "../../Redux/Action/Constans";


class Header extends Component {
  constructor(props) {
    super(props);

    this.wrapperRef = React.createRef();
  }

  state = {
    anchorEl: false,
    isOpen: false,
  };

  handleOutsideClick = (e) => {
    if (this.wrapperRef && !this.wrapperRef.current.contains(e.target)) {
      this.setState({
        isOpen: false,
      });
    }

    return;
  };

  handleClickAvatar = (event) => {
    this.state.isOpen
      ? this.setState({
          isOpen: false,
        })
      : this.setState({
          isOpen: true,
        });
  };

  handleClose = () => {
    this.setState({
      anchorEl: false,
    });
  };

  logOut = () => {
    localStorage.removeItem("userLogin");
    swal("Đăng Xuất thành công", "", "success").then((res) => {
      if (res) {
      }
    });
    this.props.dispatch(createAction(REMOVE_USER, null));
  };

  render() {
    let { listCart, isLogin, listCourse } = this.props;

    return (
      <>
        <header className="site-header" id="back-to-top-anchor">
          <div className="site-header__wrapper">
            <div className="site-header__top">
              <div className="site-header__row">
                <div className="site-header__top-left">
                  <ul className="site-header__social">
                    <li className="topnav-li social-icons-li">
                      <a className="facebook .hover-linear-text" href="#">
                        <i className="fa fa-facebook" />
                      </a>
                    </li>
                    <li className="topnav-li social-icons-li">
                      <a className="youtube" href="#">
                        <i className="fa fa-play" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="site-header__top-logo">
                  <Link to="/home">
                    <img src={logo} />
                  </Link>
                </div>
                <div className="site-header__top-right">
                  <div className="site-header__utility">
                    <div className="site-header__utility-toogle">
                      <i className="fa fa-bars"></i>
                    </div>
                    <ul className="site-header__utility-list">
                      <li className="site-header__utility-item">
                        <a href="/">
                          <i className="fa fa-home" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="site-header__utility-item">
                        <a href="https://cybersoft.edu.vn/blog/">BÀI VIẾT</a>
                      </li>
                      <li className="site-header__utility-item">
                        <a target="_blank" href="https://cyberlearn.vn">
                          HỌC ONLINE CYBERLEARN.VN
                        </a>
                      </li>
                      <li className="site-header__utility-item">
                        <a href="/lien-he">
                          <i className="fa fa-envelope" aria-hidden="true"></i>
                        </a>
                      </li>
                      <li className="site-header__utility-item">
                        <a href="/">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </a>
                        <a href="tel:+84961051014" className="hotline">
                          Hotline: 0961.05.10.14
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="site-header__bottom">
              <div className="site-header__cart btn-primary">
                <i
                  className="fa fa-shopping-cart"
                  data-toggle="modal"
                  data-target="#modelCart"
                ></i>
                <span className="site-header__cart-val">{listCart.length}</span>
              </div>
              <div ref={this.wrapperRef}>
                {isLogin ? (
                  <div className="site-header__logged">
                    <img
                      onClick={this.handleClickAvatar}
                      className="site-header__avatar"
                      src={imgUser}
                    />
                    {this.state.isOpen && (
                      <ul className="site-header__info-list">
                        <li className="site-header__info-item">
                          <NavLink to="/profile">Xem thông tin</NavLink>
                        </li>
                        <li className="site-header__info-item">
                          <NavLink to="/home" onClick={this.logOut}>
                            Đăng Xuất
                          </NavLink>
                        </li>
                      </ul>
                    )}
                  </div>
                ) : (
                  <NavLink
                    to="/login"
                    className="site-header__login btn-primary"
                  >
                    Đăng Nhập
                  </NavLink>
                )}
              </div>
            </div>
            <div className="site-header__main">
              <nav className="navbar navbar-expand-md site-header__nav">
                <button
                  className="navbar-toggler site-header__nav-toggler d-lg-none "
                  type="button"
                  data-toggle="collapse"
                  data-target="#collapsibleNavId"
                  aria-controls="collapsibleNavId"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon  site-header__toggler-icon">
                    <i className="fa fa-bars text-white"></i>
                  </span>
                </button>

                <div className="collapse navbar-collapse" id="collapsibleNavId">
                  <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                    <li className="site-header__nav-item active">
                      <NavLink className="nav-link" to="/">
                        TRANG CHỦ <span className="sr-only">(current)</span>
                      </NavLink>
                    </li>
                    <li className="site-header__nav-item">
                      <NavLink className="nav-link" to="/">
                        LỘ TRÌNH HỌC
                      </NavLink>
                    </li>
                    <li className="site-header__nav-item">
                      <NavLink className="nav-link" to="/">
                        DANH SÁCH KHÓA HỌC
                      </NavLink>
                    </li>
                    <li className="site-header__nav-item">
                      <NavLink className="nav-link" to="/">
                        HỌC ONLINE
                      </NavLink>
                    </li>
                    <li className="site-header__nav-item">
                      <NavLink className="nav-link" to="/">
                        VỀ CYBERSOFT
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </header>

        <ModalCart />
      </>
    );
  }

  componentWillMount() {
    document.body.addEventListener("click", this.handleOutsideClick);
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.handleOutsideClick);
  }
}

const mapStateToProps = (state) => {
  return {
    listCart: state.CourseReducer.listToCart,
    isLogin: state.UserReducer.credential,
    listCourse: state.CourseReducer.listCourse,
  };
};

export default connect(mapStateToProps, null)(Header);
