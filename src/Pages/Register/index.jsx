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
           <div className="bgRegister">
                <div  className="content" >
                <h3 className="text-center text-danger pb-3">ĐĂNG KÝ</h3>
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
                               
                                <Field type="text" placeholder="Tài Khoản*" name="taiKhoan" className="form-control" value={props.valuestaiKhoan} onChange={props.handleChange} 
                                
                                />
                                <ErrorMessage   name="taiKhoan">{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group">
                                
                                <Field  type="text" placeholder="Mật Khẩu*" name="matKhau" className="form-control" value={props.values.matKhau} onChange={props.handleChange} />
                                <ErrorMessage   name="matKhau">{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group">
                                
                                <Field type="text" name="hoTen" placeholder="Họ Tên*" className="form-control" value={props.values.hoTen} onChange={props.handleChange} />
                                <ErrorMessage   name="hoTen">{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group">
                               
                                <Field type="email" name="email" placeholder="Email*" className="form-control" value={props.values.email} onChange={props.handleChange} />
                                <ErrorMessage   name="email">{(msg) => <div className="text-danger">{msg}</div>}</ErrorMessage>
                            </div>
                            <div className="form-group">
                                
                                <Field type="number" name="soDT" placeholder="Số Điện Thoại*" className="form-control" value={props.values.soDT} onChange={props.handleChange} />
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