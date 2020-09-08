import React, { Component } from 'react'
import imgOnline from './../../Assets/img/online.png'
import './TwoSection.scss'
export default class TwoSection extends Component {
    render() {
        return (
            <div className="trueSection">
                <div className="cyberlearn">
                <div className="container">
                    <div className="row text-center">
                        <div className="col-12 col-lg-6">
                            <img src={imgOnline}/>
                        </div>
                        <div className="col-12 col-lg-6">
                            <h3 className="title my-5">Học Online tại CyberLearn.vn</h3>
                            <p className="desc">Hơn 92% trên hơn 3000 học viên học tại CyberSoft học theo lộ trình và có việc làm tốt. CyberSoft đã triển khai chương trình Học lập trình trực tuyến Online tại CyberLearn để tạo điều kiện cho các bạn không có điều kiện học trực tiếp tại HCM có thể tham gia. </p>
                            <button className="btn mb-3 mb-sm-0 btn-left">DANH SÁCH KHÓA HỌC</button>
                            <button  className="btn btn-right">INBOX ĐỂ TƯ VẤN LỘ TRÌNH HỌC</button>
                        </div>
                    </div>
                </div>
                </div>
                <div className="bg-attachment">
                    
                </div>
            </div>
        )
    }
}
