import React, { Component } from 'react';
// import './Assets/scss/main.scss';

import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Profile from './Pages/Profile';

import HomePage from './Pages/HomePage';
import Register from './Pages/Register';
import { HomeTemplate } from './Templates/HomeTemplate';
import { AdminTemplate } from './Templates/AdminTemplate';
import AdminPage from './Pages/AdminPage';
import CourseDetail from './Pages/CourseDetail';
import Login from './Pages/Login';
import { createAction } from './Redux/Action/Action';
import { USER, LOCAL_CART } from './Redux/Action/Constans';
import {connect} from 'react-redux';
import Axios from 'axios';
import ModalCart from './Component/ModalCart';

class App extends Component{
   render(){
      return (
        <BrowserRouter>
        
              <Switch>
                <HomeTemplate exact path='/courseDetail/:id' Component={CourseDetail} />
                  <HomeTemplate exact path='/profile' Component={Profile} />
                  <HomeTemplate exact path='/login' Component={Login} />
                  <HomeTemplate exact path='/register' Component={Register} />
                  <HomeTemplate exact path='profile' Component={Profile}/>
                  <HomeTemplate exact path='/home' Component={HomePage} />
                  <HomeTemplate exact path='/' Component={HomePage} />
                  <AdminTemplate exact path='/admin' Component={AdminPage} />
              </Switch>
        </BrowserRouter>
      );
   }

   componentDidMount(){

     const isLogin = JSON.parse(localStorage.getItem('userLogin'));
     const isCart = JSON.parse(localStorage.getItem('cart'));

    //Sending the bearer token with axios
    if(isLogin){
      Axios.defaults.headers.common = {'Authorization': `Bearer ${isLogin.accessToken}`}
    }

     if(isLogin !== null){
       this.props.dispatch(createAction(USER,isLogin))
     }
     if(isCart !== null){
      this.props.dispatch(createAction(LOCAL_CART,isCart))
    }
   }
}

export default connect() (App);
