import React, { useState } from "react";

//Component
import HeaderMain from "../../components/Header/HeaderMain";
import HeaderLogo from "../../components/Header/HeaderLogo";
import HeaderNav from "../../components/Header/HeaderNav";
import SocialList from "../../components/SocialList/SocialList";

// bootstrap
import Offcanvas from "react-bootstrap/Offcanvas";

import { AlignLeftOutlined } from "@ant-design/icons";

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <header className="x-header">
      <div className="x-heder__inner">
        <div className="x-header-top m-4 d-flex justify-content-between align-items-center">
          <div className="d-none d-md-flex">
            <SocialList />
          </div>
          <div className="nav-mobile d-md-none">
            <AlignLeftOutlined
              className="x-heder__toggle"
              onClick={handleShow}
            />
            <Offcanvas show={show} onHide={handleClose} responsive="md">
              <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <HeaderNav className="x-header-bottom flex-column" />
                <SocialList className="d-flex m-3" />
              </Offcanvas.Body>
            </Offcanvas>
          </div>
          <HeaderLogo />
          <HeaderMain />
        </div>
        <div className="x-header-bottom d-none d-md-block">
          <HeaderNav className="nav-pc justify-content-center" />
        </div>
      </div>
    </header>
  );
}

export default Header;
