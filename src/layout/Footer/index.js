import React, { Component, Fragment } from "react";

//Component
import SocialList from "../../components/SocialList/SocialList";

//icon
import IconYT from "../../ui/Icons/IconYT";
import IconIns from "../../ui/Icons/IconLinked";
import IconTwitter from "../../ui/Icons/IconTwitter";
import IconFacebook from "../../ui/Icons/IconFacebook";

//bs
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "../../ui/Link";


export default class Footer extends Component {
  render() {
    return (
      <footer className="x-footer">
        <Container>
          <Row>
            <Col sm={12} md={6}>
              <h6>Giới thiệu</h6>
              <p className="text-justify">
                CyberSoft Academy là học viện tiên phong tại Việt Nam áp dụng
                phương pháp đào tạo Active Learning và Flipped Learning thông
                qua các dự án thực tiễn trong lĩnh vực đào tạo CNTT. Học viên sẽ
                đóng vai trò là một Scrum member trong mô hình Agile để trở
                thành một lập trình chuyên nghiệp, đáp ứng mọi nhu cầu tuyển
                dụng của Doanh nghiệp.”
              </p>
            </Col>
            <Col xs={6} md={3}>
              <h6>TRUNG TÂM</h6>
              <ul className="footer-links">
                <li>
                  <Link>Giảng viên</Link>
                </li>
                <li>
                  <Link>Blog</Link>
                </li>
                <li>
                  <Link>Liện Hệ</Link>
                </li>
                <li>
                  <Link>Hướng nghiệp</Link>
                  <Link></Link>
                </li>
                <li>
                  <Link>Để trở nên tốt hơn</Link>
                </li>
              </ul>
            </Col>
            <Col xs={6} md={3}>
              <h6>ĐÀO TẠO</h6>
              <ul className="footer-links">
                <li>
                  <Link>C</Link>
                </li>
                <li>
                  <Link>UI Design</Link>
                </li>
                <li>
                  <Link>PHP</Link>
                </li>
                <li>
                  <Link>Java</Link>
                </li>
                <li>
                  <Link>Android</Link>
                </li>
              </ul>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col xs={12} sm={6} md={8}>
              <p className="copyright-text">
                Copyright © Bản quyền CyberSoft 2020
              </p>
            </Col>
            <Col xs={12} sm={6} md={4}>
              <SocialList/>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}
