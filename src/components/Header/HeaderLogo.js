import React from "react";

import Navbar from "react-bootstrap/Navbar";

//Img
import Logo from "../../../src/assets/img/logo.png";
import Link from "../../ui/Link";

const HeaderLogo = () => {
  return (
    <Navbar.Brand className="x-header__logo">
      <Link to="/">
        <img
          src={Logo}
          height="55"
          className="d-inline-block align-top"
          alt="logo"
        />
      </Link>
    </Navbar.Brand>
  );
};

export default HeaderLogo;
