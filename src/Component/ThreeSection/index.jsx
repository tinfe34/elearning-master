import React, { Component } from 'react'
import './ThreeSection.scss'
import video1 from './../../Assets/img/video1.png'
import video2 from './../../Assets/img/video2.png'
import contact from './../../Assets/img/contact.png'
export default class ThreeSection extends Component {
    render() {
        return (
            <section className="threeSection">
                <div className="container">
                    <h1 className="my-5 text-center text-danger">HỌC VIÊN ĐÃ NÓI GÌ VỀ CYBERSOFT ACADEMY</h1>
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <div className="video mb-3">
                                <img src={video1} width="100%" height="auto" />
                                <div className="video_icon">
                                    <i class="fa fa-play-circle"></i>
                                </div>
                            </div>

                        </div>
                        <div className="col-12 col-md-6">
                            <div className="video mb-3">
                                <img src={video2} width="100%" height="auto" />
                                <div className="video_icon">
                                    <i class="fa fa-play-circle"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <img src={contact} width="100%"alt="" />
                            </div>
                            <div className="col-12 col-md-6">       
                                <form>
                                <h3 className="text-center text-danger mb-5">LIÊN HỆ TƯ VẤN</h3>
                                    <div className="form-group">
                                        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Họ và tên*" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Email liên hệ*" />
                                    </div>
                                    <div className="form-group">
                                        <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Điện thoại liên hệ*" />
                                    </div>
                                    <button type="submit" className="btn w-100 btn-primary">Submit</button>
                                </form>


                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}
