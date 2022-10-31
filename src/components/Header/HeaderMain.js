import React, { useState, useRef, useEffect } from "react";

//Component
import HeaderCart from "../../components/Header/HeaderCart";
import HeaderLanguage from "../../components/Header/HeaderLanguage";
import HeaderLogged from "./HeaderLogged";

const HeaderMain = () => {
  return (
    <div className="x-header-main">
      <div className="d-flex align-items-center">
        <HeaderCart />
        <HeaderLanguage />
        <HeaderLogged />
      </div>
    </div>
  );
};

export default HeaderMain;
