import React, { Component } from 'react'
import { userService } from '../../Services';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux'
import { createAction } from '../../Redux/Action/Action';
import { USER } from '../../Redux/Action/Constans';
import swal from 'sweetalert';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: {
                taiKhoan: '',
                matKhau: '',
            }
        }
    }

    handleOnchange = (e) => {
        let { name, value } = e.target;
        // console.log(name,value)

        this.setState({
            user: { ...this.state.user, [name]: value }
        }, () => {
            // console.log(this.state.user)
        })

    }
    //Gửi dữ liệu lên server
    submitForm = (e) => {
        e.preventDefault();
        userService.sigIn(this.state.user).then((res) => {
            //sau khi server trả dữ liệu về đem xuống cất local
            localStorage.setItem('userLogin', JSON.stringify(res.data))
            this.props.dispatch(createAction(USER, res.data))
            swal("Đăng nhập thành công", "", "success").then(res => {
                if (res) {
                }
            })
            this.props.history.replace('/home')

        }).catch((err) => {
            console.log(err)
        })


    }
    render() {
        return (
            <div className="m-auto py-5" style={{ width: 444 }}>
                <h1 className="text-center text-danger my-3">Đăng Nhập</h1>
                <div className="form-group">
                    <label>Tài Khoản</label>
                    <input type="text" name="taiKhoan" className="form-control" value={this.state.user.taiKhoan} onChange={this.handleOnchange} />
                </div>
                <div className="form-group">
                    <label>Mật Khẩu</label>
                    <input type="password" name="matKhau" className="form-control" value={this.state.user.matKhau} onChange={this.handleOnchange} />
                </div>
                <div classname="form-check">
                    <input classname="form-check-input" style={{marginRight:10}} type="checkbox" defaultvalue id="defaultCheck1" />
                    <label classname="form-check-label" htmlfor="defaultCheck1">
                        Nhớ mật khẩu
                     </label>
                </div>

                <div className="form-group">
                    <NavLink to="/home" className="btn btn-success w-100" onClick={this.submitForm} >Đăng Nhập</NavLink>
                </div>

                <NavLink to="/register" className="text-danger">Đăng kí tài khoản</NavLink>
            </div>
        )
    }
}


export default connect()(Login)