import React, { Component } from "react";

import video1 from "./../../Assets/img/video1.png";
import video2 from "./../../Assets/img/video2.png";
import contact from "./../../Assets/img/contact.png";

export default class ThreeSection extends Component {
  render() {
    return (
      <section className="three-section">
        <div className="container">
          <h1 className="my-5 text-center text-danger">
            HỌC VIÊN ĐÃ NÓI GÌ VỀ CYBERSOFT ACADEMY
          </h1>
          <div className="row">
            <div className="col-12 col-md-6">
              <div className="three-section__video mb-3">
                <img src={video1} width="100%" height="auto" />
                <div className="three-section__video-icon">
                  <i
                    className="fa fa-play-circle"
                    data-toggle="modal"
                    data-target="#myModal"
                  ></i>
                </div>
              </div>
              {/* <!-- The Modal --> */}
              <div className="modal fade" id="myModal">
                <div className="modal-dialog">
                  <div className="modal-content">
                    <iframe
                      width="100%"
                      height="400"
                      src="https://www.youtube.com/embed/4tXk_QiT8cA?enablejsapi=1"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              <div className="three-section__video mb-3">
                <img src={video2} width="100%" height="auto" />
                <div className="three-section__video-icon">
                  <i
                    className="fa fa-play-circle"
                    data-toggle="modal"
                    data-target="#myModal"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="three-section__contact">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                <img src={contact} width="100%" alt="" />
              </div>
              <div className="col-12 col-md-6">
                <form>
                  <h3 className="text-center heading-2 mb-5">LIÊN HỆ TƯ VẤN</h3>
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Họ và tên*"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Email liên hệ*"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      className="form-control"
                      id="exampleInputEmail1"
                      aria-describedby="emailHelp"
                      placeholder="Điện thoại liên hệ*"
                    />
                  </div>
                  <button type="submit" className="w-100 btn-primary">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
