import React, { Component } from 'react'
import './Cart.scss';
import { connect } from 'react-redux'
import { createAction } from '../../Redux/Action/Action';
import { REMOVE_TO_CART } from '../../Redux/Action/Constans';
import swal from 'sweetalert';
import { browserHistory, Redirect } from 'react-router';

class ModalCart extends Component {
 
    
    removeToCart = (masp)=>{
        this.props.dispatch(createAction(REMOVE_TO_CART,masp));
    }
    chekoutToCart = () =>{
      let userLogin =  JSON.parse(localStorage.getItem('userLogin'))
        if(userLogin){
            swal("Thanh Toán Thành Công!", "", "success").then(
                (res)=>{
                    window.location.reload();
                    localStorage.removeItem("cart");

                }
            )
            

        }
        
        else{
         
                swal("", "Bạn cần phải đăng nhập", "warning")
        }



         



        
    }

   

    renderTable=(arrayCourseCart) =>{
            return(
                
                <table className="table table-bordered table-hover" >
                <thead className="thead-dark">
                    <tr>
                        <th>Mã SP</th>
                        <th>Hình Ảnh</th>
                        <th>Tên Sản Phẩm</th>
                        <th>Giá Bán</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        arrayCourseCart.map((course, index) => {
                            return (
                                <tr key={index}>
                                    <td>{index+1}</td>
                                    <td><img width={100} height={70} src={course.hinhAnh} /></td>
                                    <td>{course.tenKhoaHoc}</td>
                                    <td> {course.giaBan.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")+ ' VNĐ'}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={()=>this.removeToCart(course.maKhoaHoc)} ><i class="fa fa-trash"></i></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="6">
                            <h3 className="float-right text-success">
                            Tổng Tiền: {(arrayCourseCart.reduce((tt, sp, index) => {
                                return (tt = tt + parseFloat(sp.giaBan))
                            }, 0)).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")+ ' VNĐ'
                            }
                            </h3>
                        </th>
                    </tr>
                </tfoot>
            </table>
            )
    }
    render() {
        let { arrayCourseCart } = this.props;

       
        return (
            <div className="modal w-100 fade" id="modelCart" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2 className="modal-title text-danger">Giỏ hàng của bạn</h2>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">
                           {arrayCourseCart.length ? this.renderTable(arrayCourseCart) :
                            <div className="text-center">
                               
                                 <h5 className="text-dark">Không Có Khóa học nào ,hãy mua sắm ngay nào!!!</h5>
                            </div>
                           }
                        </div>
                        <div className="modal-footer">
                        {arrayCourseCart.length ? 
                            <>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            {}
                            <button type="button" className="btn btn-primary" onClick={this.chekoutToCart}>Thanh Toán</button>
                            </>
                         : '' }
                            
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        arrayCourseCart: state.CourseReducer.listToCart,

    }

}
export default connect(mapStateToProps)(ModalCart)