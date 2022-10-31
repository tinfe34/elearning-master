import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import PropTypes from 'prop-types'
import * as yup from 'yup'

//Constans
import { PROVIDERS } from "../../constants/keys"
import {PATH_HOME} from '../../routes/paths'

//Ui
import Row from "../../ui/Row"
import Col from "../../ui/Col"
import Heading from "../../ui/Heading"
import Space from "../../ui/Space"
import Input from "../../ui/Input"
import Link from "../../ui/Link"

//Hooks
import { useFormHook } from '../../hooks/form'
import Button from "../../ui/Button/Button"

//api
import { login } from "../../api/auth"
import { useDispatch } from "react-redux"
import { USER_LOGGED } from "../../store/modules/Auth"

//antd
import { message } from 'antd';

//Validate schema
const validationSchema = yup.object().shape({
  taiKhoan: yup
    .string()
    .trim()
    .required('*Vui lòng nhập tài khoản'),
  matKhau: yup
    .string()
    .trim()
    .required('*Vui lòng nhập mật khẩu')
})

export const LoginForm = () => {
    const history = useHistory()
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch();
    //Form Hook
    const {
      form,
      errors,
      validate,
      onChange,
      onBlur
    } = useFormHook({
      schema: validationSchema,
      initialForm: {
        taiKhoan: '',
        matKhau: '',
      }
    })
    
    const onSubmitClick = async () => {
      try {
        await validate()

      } catch (error) {

        return
      }

      try {
        setLoading(true)
        const data = await login(form)
        dispatch(USER_LOGGED(data));

        message.loading({ content: 'Loading...' });
        setTimeout(() => {
          message.success({ content: 'Đăng Nhập thành công!', duration: 2 });
          history.replace(PATH_HOME)
        }, 1000);       
      } catch (error) {
        setLoading(false)
        //alear error login
      }
    }

    return <>
      <Row>
        <Col
          xs={{ span:10, offset: 1 }}
          sm={{ span:8, offset: 2 }}
          md={{ span:11, offset: 0}}
        >
          <Heading size='30px' paddingBottom={15}>
            Đăng nhập
          </Heading>
          <Space>
            {PROVIDERS.map((x, index) => {
              return (
                <x.icon
                key={index}
                ></x.icon>
              )
            })}
          </Space>
        </Col>
        <Col
          xs={{ span:10, offset: 1 }}
          sm={{ span:8, offset: 2 }}
          md={{ span:11, offset: 0}}
        >
          <Input
            name="taiKhoan"
            value={form.taiKhoan}
            label="Tài khoản"
            errors={errors}
            placeholder=""
            autoComplete="off"
            style={{ width: '100%'}}
            onChange={onChange}
            onBlur={onBlur}
          ></Input>
        </Col>
        <Col
          xs={{ span:10, offset: 1 }}
          sm={{ span:8, offset: 2 }}
          md={{ span:11, offset: 0}}
        >
          <Input
            name="matKhau"
            value={form.matKhau}
            label="Mật khẩu"
            type="password"
            errors={errors}
            placeholder=""
            autoComplete="off"
            style={{ width: '100%'}}
            onChange={onChange}
            onBlur={onBlur}
          ></Input>
        </Col>
        <Col
          xs={{ span:10, offset: 1 }}
          sm={{ span:8, offset: 2 }}
          md={{ span:11, offset: 0}}
        >
          <Link
            underline
            path="/password/forgot"
          >
            Quên mật khẩu?
          </Link>
        </Col>
        <Col
          xs={{ span:10, offset: 1 }}
          sm={{ span:8, offset: 2 }}
          md={{ span:11, offset: 0}}
        >
          <Button className='btn-primary --full-width' onClick={onSubmitClick} loading={loading}>
            Login
          </Button>
        </Col>
        <Col
          xs={{ span:10, offset: 1 }}
          sm={{ span:8, offset: 2 }}
          md={{ span:11, offset: 0}}
        >
          <Link
            path="/register"
          >
            Đăng kí tài khoản
          </Link>
        </Col>
      </Row>  
    </>
}

LoginForm.propTypes = {
}

LoginForm.defaultProps = {
}

export default LoginForm

