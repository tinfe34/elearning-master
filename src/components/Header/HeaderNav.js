import React from "react";

import Nav from "react-bootstrap/Nav";

const HeaderNav = (props) => {
  return (
    <Nav className="x-header__nav" {...props}>
      <Nav.Link className="--active"><span>Trang chủ</span></Nav.Link>
      <Nav.Link><span>Lộ trình học</span></Nav.Link>
      <Nav.Link><span>Danh sách khóa học </span></Nav.Link>
      <Nav.Link><span>Stories</span></Nav.Link>
      <Nav.Link><span>Góc học viên</span></Nav.Link>
      <Nav.Link><span>Về CyberSoft</span></Nav.Link>
    </Nav>
  );
};

export default HeaderNav;
