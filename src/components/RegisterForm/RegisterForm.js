import React, { useState } from "react";
import PropTypes from "prop-types";
import * as yup from "yup";

//Constans
import { PROVIDERS } from "../../constants/keys";

//Ui
import Row from "../../ui/Row";
import Col from "../../ui/Col";
import Heading from "../../ui/Heading";
import Space from "../../ui/Space";
import Input from "../../ui/Input";
import Link from "../../ui/Link";

//Hooks
import { useFormHook } from "../../hooks/form";
import Button from "../../ui/Button/Button";

//api
import { register } from "../../api/auth";
import { useHistory } from "react-router-dom";

//Regex
const phoneRegex = RegExp(
  /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/
);

//Validate schema
const validationSchema = yup.object().shape({
  taiKhoan: yup
    .string()
    .required("*Vui lòng nhập tài khoản"),
  matKhau: yup
    .string()
    .required("*Vui lòng nhập mật khẩu"),
  hoTen: yup
    .string()
    .required("*Vui lòng nhập họ tên"),
  soDT: yup
    .string()
    .matches(phoneRegex, "Số điện thoại không hợp lệ")
    .required("*Vui lòng nhập số điện thoại"),
  email: yup
    .string()
    .required("*Vui lòng nhập email")
    .email("*Email không hợp lệ"),
});

export const RegisterForm = () => {
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  //Form Hook
  const { form, errors, validate, onChange, onBlur } = useFormHook({
    schema: validationSchema,
    initialForm: {
      taiKhoan: "",
      matKhau: "",
      hoTen: "",
      soDT: "",
      email: "",
      maLoaiNguoiDung: "HV",
      maNhom: "GP01",
    },
  });

  const onSubmitClick = async () => {
    try {
      await validate();
    } catch (error) {
      return;
    }

    try {
      setLoading(true);
      const data = await register(form);
      if(data) {
        history.push('login')
      }
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <>
      <Row>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 11, offset: 0 }}
        >
          <Heading size="30px" paddingBottom={15}>
            Đăng kí tài khoản
          </Heading>
        </Col>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 11, offset: 0 }}
        >
          <Input
            name="taiKhoan"
            value={form.taiKhoan}
            label="Tài khoản"
            errors={errors}
            placeholder=""
            autoComplete="off"
            style={{ width: "100%" }}
            onChange={onChange}
            onBlur={onBlur}
          ></Input>
        </Col>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 11, offset: 0 }}
        >
          <Input
            name="matKhau"
            value={form.matKhau}
            label="Mật khẩu"
            type="password"
            errors={errors}
            placeholder=""
            autoComplete="off"
            style={{ width: "100%" }}
            onChange={onChange}
            onBlur={onBlur}
          ></Input>
        </Col>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 11, offset: 0 }}
        >
          <Input
            name="hoTen"
            value={form.hoTen}
            label="Họ tên"
            errors={errors}
            placeholder=""
            autoComplete="off"
            style={{ width: "100%" }}
            onChange={onChange}
            onBlur={onBlur}
          ></Input>
        </Col>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 11, offset: 0 }}
        >
          <Input
            name="soDT"
            value={form.soDT}
            label="Số điện thoại"
            type="number"
            errors={errors}
            placeholder=""
            autoComplete="off"
            style={{ width: "100%" }}
            onChange={onChange}
            onBlur={onBlur}
          ></Input>
        </Col>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 11, offset: 0 }}
        >
          <Input
            name="email"
            value={form.email}
            label="Email"
            errors={errors}
            placeholder=""
            autoComplete="off"
            style={{ width: "100%" }}
            onChange={onChange}
            onBlur={onBlur}
          ></Input>
        </Col>
        <Col
          xs={{ span: 10, offset: 1 }}
          sm={{ span: 8, offset: 2 }}
          md={{ span: 11, offset: 0 }}
        >
          <Button className='btn-primary --full-width' onClick={onSubmitClick} loading={loading}>
            Đăng kí
          </Button>
        </Col>
      </Row>
    </>
  );
};

RegisterForm.propTypes = {};

RegisterForm.defaultProps = {};

export default RegisterForm;