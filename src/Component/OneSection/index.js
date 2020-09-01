import React, { Component } from 'react'
import bg1 from './../../Assets/img/final_location.png'
import bg2 from './../../Assets/img/cybersoft-lap-trinh-.jpg'
import './OneSection.scss';

export default class OneSection extends Component {
    render() {
        return (
            <div className="oneSection my-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-8">
                            <div className="oneSection-left">
                                <h3 class="title mb-5" >CyberSoft - Đào tạo chuyên gia lập trình theo dự án</h3>
                                <div class="row">
                                    <div className="col-4">
                                        <div className="counter">
                                            <p className="counter_number">4</p>
                                            <p className="counter_title">Trung Tâm</p>
                                        </div>
                                    </div>
                                    <div className="col-4">
                                        <div className="counter">
                                            <p className="counter_number">3250</p>
                                            <p className="counter_title">Học Viên</p>
                                        </div>

                                    </div>

                                    <div className="col-4">
                                        <div className="counter">
                                            <p className="counter_number">54</p>
                                            <p className="counter_title">Đối Tác</p>
                                        </div>

                                    </div>
                                    <div className="col-12">
                                        <img src={bg1} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4 ">
                            <div className="oneSection-right">
                                
                                <img className="logo" src={bg2} />
                                <h3 class="title my-3" ><i className="fa fa-graduation-cap mr-3"></i>Đào tạo nghề lập trình chuyên sâu</h3>
                                <p className="content">
                                    CyberSoft khai thác nhu cầu tuyển dụng lập trình từ doanh nghiệp và tích hợp các dự án với công nghệ mới nhất vào phương pháp đào tạo tích cực cho các học viên. Chương trình giảng dạy được biên soạn may đo dành riêng cho các bạn Lập trình, chúng tôi luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên sáng lập của chúng tôi - một nhóm các nhà phát triển phần mềm và giám đốc công nghệ dày dạn kinh nghiệm.
                            </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
