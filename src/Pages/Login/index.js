import React, { Component } from "react";
import { userService } from "../../Services";
import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { createAction } from "../../Redux/Action/Action";
import { USER } from "../../Redux/Action/Constans";
import swal from "sweetalert";
import { Formik, Field, FastField, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  taiKhoan: Yup.string().required("*Tài khoản không được để trống"),
  matKhau: Yup.string().required("*Mật Khẩu không được để trống"),
});

class Login extends Component {
  submitForm = (values) => {
    userService
      .signIn(values)
      .then((res) => {
        localStorage.setItem("userLogin", JSON.stringify(res.data));

        this.props.dispatch(createAction(USER, res.data));
        
        swal("Đăng nhập thành công", "", "success");
        this.props.history.replace("/home");
      })
      .catch((err) => {
        swal("Tài khoản hoặc mật khẩu không hợp lệ", "", "error");
      });
  };

  render() {
    return (
      <div className="login-page">
        <div className="login-page-wrapper ">
          <h3 className="text-center text-danger pb-3">Đăng Nhập</h3>
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
            }}
            validationSchema={LoginSchema}
            onSubmit={this.submitForm}
          >
            {(props) => (
              <Form onSubmit={props.handleSubmit}>
                <div className="form-group">
                  <Field
                    type="text"
                    placeholder="Tài Khoản*"
                    name="taiKhoan"
                    className="form-control"
                    value={props.valuestaiKhoan}
                    onChange={props.handleChange}
                  />
                  {props.errors.taiKhoan && props.touched.taiKhoan ? (
                    <div className="text-danger">{props.errors.taiKhoan}</div>
                  ) : (
                    <div></div>
                  )}
                </div>
                <div className="form-group">
                  <Field
                    type="text"
                    placeholder="Mật Khẩu*"
                    name="matKhau"
                    className="form-control"
                    value={props.values.matKhau}
                    onChange={props.handleChange}
                  />
                  <ErrorMessage name="matKhau">
                    {(msg) => <div className="text-danger">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <input
                    type="submit"
                    value="Đăng Nhập"
                    className="btn-linear-gradient w-100"
                  />
                </div>

                <NavLink to="/register">Đăng kí tài khoản</NavLink>
              </Form>
            )}
          </Formik>
          ;
        </div>
      </div>
    );
  }
}

export default connect()(Login);
