import React, { Component, Fragment } from "react";

import BackToTop from "../BackToTop";

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <footer className="site-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-6">
                <h6>Giới thiệu</h6>
                <p className="text-justify">
                  CyberSoft Academy là học viện tiên phong tại Việt Nam áp dụng
                  phương pháp đào tạo Active Learning và Flipped Learning thông
                  qua các dự án thực tiễn trong lĩnh vực đào tạo CNTT. Học viên
                  sẽ đóng vai trò là một Scrum member trong mô hình Agile để trở
                  thành một lập trình chuyên nghiệp, đáp ứng mọi nhu cầu tuyển
                  dụng của Doanh nghiệp.”
                </p>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>TRUNG TÂM</h6>
                <ul className="footer-links">
                  <li>
                    <a href="#">Giảng viên</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Liện Hệ</a>
                  </li>
                  <li>
                    <a href="#">Hướng nghiệp</a>
                  </li>
                  <li>
                    <a href="#">Để trở nên tốt hơn</a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-6 col-md-3">
                <h6>ĐÀO TẠO</h6>
                <ul className="footer-links">
                  <li>
                    <a href="#">C</a>
                  </li>
                  <li>
                    <a href="#">UI Design</a>
                  </li>
                  <li>
                    <a href="#">PHP</a>
                  </li>
                  <li>
                    <a href="#">Java</a>
                  </li>
                  <li>
                    <a href="#">Android</a>
                  </li>
                </ul>
              </div>
            </div>
            <hr />
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-sm-6 col-xs-12">
                <p className="copyright-text">
                  Copyright © Bản quyền CyberSoft 2020
                </p>
              </div>
              <div className="col-md-4 col-sm-6 col-xs-12">
                <ul className="social-icons">
                  <li>
                    <a className="facebook" href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a className="twitter" href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a className="dribbble" href="#">
                      <i className="fa fa-dribbble" />
                    </a>
                  </li>
                  <li>
                    <a className="linkedin" href="#">
                      <i className="fa fa-linkedin" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>

        <BackToTop />
      </Fragment>
    );
  }
}
