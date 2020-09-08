import React, { Component } from 'react'
import logo from './../../Assets/img/logo.png'
import { Link, NavLink } from 'react-router-dom'
import './Header.scss';
import { connect } from 'react-redux'
import swal from 'sweetalert';
import { Button, Menu, MenuItem, TextField } from '@material-ui/core';

import Autocomplete from '@material-ui/lab/Autocomplete';
import { withStyles } from '@material-ui/core/styles';
import ModalCart from '../ModalCart';
import { createAction } from '../../Redux/Action/Action';
import { REMOVE_USER } from '../../Redux/Action/Constans';
import imgUser from './../../Assets/img/user.jpg'

//material design
const StyledMenu = withStyles({
    paper: {
        border: '1px solid #d3d4d5',

    },
})((props) => (
    <Menu
        elevation={0}
        getContentAnchorEl={null}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
        {...props}
    />
));



class Header extends Component {

    state = {
        anchorEl: false,
    }

    handleClick = (event) => {

        this.setState({
            anchorEl: event.currentTarget
        })

    };

    handleClose = () => {
        this.setState({
            anchorEl: false
        })

    };
    //end material design

    //code chay

    logOut = () => {

        localStorage.removeItem("userLogin");
        swal("Đăng Xuất thành công", "", "success").then(res => {
            if (res) {
            }
        })
        this.props.dispatch(createAction(REMOVE_USER, null))
    }
    render() {

      
        let { listCart, isLogin,listCourse} = this.props;

        return (
            <>
                <header className="header" id="back-to-top-anchor">
                    <div className="container-fluid">
                        <div className="header-top ">
                            <div className="header-logo">
                                <Link to="/home"><img src={logo} /></Link>
                            </div>
                            <div className="search">
                                <Autocomplete
                                    freeSolo
                                    size="small"
                                    id="free-solo-2-demo"
                                    disableClearable
                                    options={listCourse.map((option) => option.tenKhoaHoc
                                    )}
                                    renderInput={(params) => (
                                        <TextField
                                            {...params}
                                            label="Tim Kiem Khoa Hoc"
                                            margin="normal"
                                            variant="outlined"
                                            InputProps={{ ...params.InputProps, type: 'search' }}
                                        />
                                    )}
                                />

                            </div>
                            <div className="cart">

                                <i className="fa fa-shopping-cart" data-toggle="modal" data-target="#modelCart">
                                    <span className="cartVal">{listCart.length}</span>
                                </i>

                            </div>
                            {/* Kiểm tra isLogin */}
                            {isLogin ?
                                <>
                                    <Button id="simple-menu"  aria-haspopup="true" onClick={this.handleClick} color="primary"  >
                                        <img className="logoUser" src={imgUser} />
                                    </Button>
                                    <StyledMenu

                                        id="simple-menu"
                                        anchorEl={this.state.anchorEl}

                                        open={Boolean(this.state.anchorEl)}
                                        onClose={this.handleClose}

                                    >

                                        <MenuItem ><NavLink className="dropdown-item" to="/profile">Xem thông tin</NavLink></MenuItem>

                                        <MenuItem ><NavLink to="/home" onClick={this.logOut} >Đăng Xuất</NavLink></MenuItem>
                                    </StyledMenu>
                                </>
                                : <Button aria-controls="fade-menu" aria-haspopup="true" className="accout ">
                                    <NavLink to="/login"><i className="fa fa-user-circle"></i></NavLink>
                                </Button>




                            }
                        </div>
                    </div>
                    <div className="header-bottom">
                        <nav className="navbar navbar-expand-md">
                            <button className="navbar-toggler d-lg-none " type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"><i className="fa fa-bars text-white"></i></span>
                            </button>
                            
                            <div className="collapse navbar-collapse" id="collapsibleNavId">
                                <ul className="navbar-nav m-auto mt-2 mt-lg-0">
                                    <li className="nav-item active">
                                        <NavLink className="nav-link" to="/">TRANG CHỦ <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/login">LỘ TRÌNH HỌC</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">DANH SÁCH KHÓA HỌC</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">HỌC ONLINE</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/">VỀ CYBERSOFT</NavLink>
                                    </li>
                                </ul>

                            </div>
                        </nav>
                    </div>
                </header>
                <ModalCart />
            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        listCart: state.CourseReducer.listToCart,
        isLogin: state.UserReducer.credential,
        listCourse : state.CourseReducer.listCourse,
    }
}

export default connect(mapStateToProps, null)(Header)