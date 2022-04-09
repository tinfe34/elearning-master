import React, { Component } from "react";
import { userService } from "../../Services";
import { Formik, Field, FastField, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import swal from "sweetalert";

let SignupSchema = Yup.object().shape({
  taiKhoan: Yup.string().required("*Tài khoản không được để trống"),
  matKhau: Yup.string().required("*Mật khẩu  không được để trống"),
  hoTen: Yup.string().required("*Họ tên không được để trống"),
  soDT: Yup.number().required("*Số điện thoại không được để trống"),
  email: Yup.string()
    .required("*Email  không để trống")
    .email("*Email không đúng định dạng"),
});

export default class Register extends Component {
  submitForm = (values) => {
    // e.preventDefault();
    userService
      .signUp(values)
      .then((res) => {
        swal("Đăng ky thành công", "", "success").then((res) => {
          if (res) {
            this.context.router.push("/login");
          }
        });
      })
      .catch((err) => {
        swal("Đăng ki that bai", "", "error");
      });
  };

  _handleChange = (e) => {
    console.log(e);
  };

  render() {
    return (
      <div className="register-page">
        <div className="register-page-wrapper">
          <h3 className="text-center text-danger pb-3">ĐĂNG KÝ</h3>
          <Formik
            initialValues={{
              taiKhoan: "",
              matKhau: "",
              hoTen: "",
              soDT: "",
              maLoaiNguoiDung: "HV",
              maNhom: "GP01",
              email: "",
            }}
            validationSchema={SignupSchema}
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
                  <Field
                    type="text"
                    name="hoTen"
                    placeholder="Họ Tên*"
                    className="form-control"
                    value={props.values.hoTen}
                    onChange={props.handleChange}
                  />
                  <ErrorMessage name="hoTen">
                    {(msg) => <div className="text-danger">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <Field
                    type="email"
                    name="email"
                    placeholder="Email*"
                    className="form-control"
                    value={props.values.email}
                    onChange={props.handleChange}
                  />
                  <ErrorMessage name="email">
                    {(msg) => <div className="text-danger">{msg}</div>}
                  </ErrorMessage>
                </div>
                <div className="form-group">
                  <Field
                    type="number"
                    name="soDT"
                    placeholder="Số Điện Thoại*"
                    className="form-control"
                    value={props.values.soDT}
                    onChange={props.handleChange}
                  />
                  <ErrorMessage name="soDT">
                    {(msg) => <div className="text-danger">{msg}</div>}
                  </ErrorMessage>
                </div>

                <div className="form-group">
                  <input
                    type="submit"
                    value="Đăng Ký"
                    className="btn-linear-gradient w-100"
                  />
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    );
  }
}
