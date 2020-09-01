import React, { Component } from 'react'
 import {connect} from 'react-redux'
import Course from '../Course'
import './CourseList.scss'
import {asyncFechCourse} from '../../Redux/Action/asyncCourse'
import ModalCart from '../ModalCart'
 class CourseList extends Component {
     
    //render danh sach Khoa Hoc
    renderCourse = () =>{
        return(
            this.props.listCourse.map((course,index)=>{
                    return(
                <div className="col-12 col-md-6 col-lg-4" key={index}>
                        <Course course={course}/>
                </div>
                    
                    )
            })
        )
    }
    render() {
        
        return (
            <div className="container">
               <div className="row">
                   <div className="col-12 m-auto">
                   <div class="main-title text-center text-danger"><h2 class="mt0">Các khóa học lập trình offline tại Hồ Chí Minh</h2><p>Các khóa học lập tình offline sẽ cung cấp đầy đủ kiến thức chuyên môn và giúp học viên trải nghiệm môi trường vừa học vừa làm trong thực tế, giúp các bạn tự tin khi đi làm.</p></div>

                   </div>
                    <ModalCart/>
                {this.renderCourse()}
               </div>
               
            </div>
        )
    }

    //goi axios lay ds khoa hoc ve 
    componentDidMount(){
       this.props.dispatch(asyncFechCourse())
    }
}
const mapStateToProps = (state) =>{
    // console.log(state)
    return{ 
        listCourse : state.CourseReducer.listCourse,
      
    } 
    
}
export default connect(mapStateToProps)(CourseList)