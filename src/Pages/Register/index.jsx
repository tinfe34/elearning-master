import React, { Component } from 'react'
import { userService } from '../../Services';
import { Formik, Field, FastField, Form,ErrorMessage  } from 'formik';
import * as Yup from "yup";
import  './Register.scss';
let SignupSchema = Yup.object().shape({
    taiKhoan: Yup.string().required('Tài khoản không được để trống'),
    matKhau: Yup.string().required('Mật khẩu  không được để trống'),
    hoTen: Yup.string().required('Họ tên không được để trống'),
    soDT: Yup.number().required('Số điện thoại không được để trống'),
    email: Yup.string()
        .required('email  không để trống')
        .email('email không đúng định dạng'),
    // soDT:Yup.string().matches(/^[0-9]+$/)
   
});

export default class Register extends Component {



    //Gửi dữ liệu lên server
    // submitForm = (e) => {
    //     e.preventDefault();
    //     userService.sigUp(this.state.user).then((res) => {
    //         console.log(res)
    //     }).catch((err) => {
    //         console.log(err)
    //     })
    // }

    _handleChange = (e) => {
        console.log(e)

    }

    render() {
        return (
           <div className="bg-wrapper">
                <div  className="m-auto py-5" style={{ width: 444 }}>
                <h1 className="text-center text-danger">ĐĂNG KÝ</h1>
                <Formik
                    initialValues={
                        {
                            taiKhoan: "",
                            matKhau: "",
                            hoTen: "",
                            soDT: "",
                            maLoaiNguoiDung: "HV",
                            maNhom: "GP01",
                            email: ""
                        }
                    }
                    validationSchema={SignupSchema}
                    onSubmit={this._handleChange}
                    
                >
                    
                    {props => (
                        <Form onSubmit={props.handleSubmit}>

                            <div className="form-group">
                                <label>Tài Khoản</label>
                                <Field type="text" name="taiKhoan" className="form-control" value={props.valuestaiKhoan} onChange={props.handleChange} 
                                
                                />
                                <ErrorMessage   name="taiKhoan">{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label>Mật Khẩu</label>
                                <Field  type="text" name="matKhau" className="form-control" value={props.values.matKhau} onChange={props.handleChange} />
                                <ErrorMessage   name="matKhau">{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label>Họ Tên</label>
                                <Field type="text" name="hoTen" className="form-control" value={props.values.hoTen} onChange={props.handleChange} />
                                <ErrorMessage   name="hoTen">{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label>Email</label>
                                <Field type="email" name="email" className="form-control" value={props.values.email} onChange={props.handleChange} />
                                <ErrorMessage   name="email">{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group">
                                <label>Số Điện Thoại</label>
                                <Field type="number" name="soDT" className="form-control" value={props.values.soDT} onChange={props.handleChange} />
                                <ErrorMessage  name="soDT">{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
                            </div>

                            <div className="form-group">
                                <input type="submit" value="Đăng Ký" className="btn btn-success w-100" />
                            </div>
                            
                        </Form>
                    )}
                </Formik>
            </div>
           </div>
        )
    }
}


// <Formik
//     initialValues={{ name: '', age: '' }}
//     onSubmit={this._handleChange}
// >
//     {props => (
//         <Form onSubmit={props.handleSubmit}>
//             <Field
//                 type="text"
//                 onChange={props.handleChange}
//                 value={props.values.name}
//                 name="name"
//             />
//             <FastField name="age" placeholder="Weezy" onChange={props.handleChange}
//                 value={props.values.age} />
//             <button type="submit">Submit</button>
//         </Form>
//     )}
// </Formik>