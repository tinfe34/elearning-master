import React, { useState } from "react";
import PropTypes from "prop-types";
//Img
import bg1 from "./../../assets/img/final_location.png";
import bg2 from "./../../assets/img/cybersoft-lap-trinh-.jpg";

//Ui
import Heading from "../../ui/Heading";

// Lib
import Counter from "../../ui/Counter/Counter";

const PromoBanner = ({text}) => {
  return (
    <section className="promo-banner">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-7 col-lg-8">
            <div className="promo-banner__left">
              <Heading className="promo-banner__title heading-3 mb-5">
                CyberSoft - Đào tạo chuyên gia lập trình theo dự án
              </Heading>
              <div className="row">
                <div className="col-4">
                  <div className="promo-banner__counter">
                    <p className="promo-banner__number">
                      <Counter end={4} />
                    </p>
                    <p className="promo-banner__txt">Trung Tâm</p>
                  </div>
                </div>
                <div className="col-4">
                  <div className="promo-banner__counter">
                    <p className="promo-banner__number">
                      <Counter end={3250} />
                    </p>
                    <p className="promo-banner__txt">Học Viên</p>
                  </div>
                </div>

                <div className="col-4">
                  <div className="promo-banner__counter">
                    <p className="promo-banner__number">
                      <Counter end={54} />
                    </p>
                    <p className="promo-banner__txt">Đối Tác</p>
                  </div>
                </div>
                <div className="col-12">
                  <img src={bg1} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-4 ">
            <div className="promo-banner__right">
              <img className="promo-banner__logo" src={bg2} />
              <Heading className="promo-banner__title heading-3 mb-5">
                <i className="fa fa-graduation-cap mr-3"></i>Đào tạo nghề lập
                trình chuyên sâu
              </Heading>

              <p className="promo-banner__content">{text}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

PromoBanner.propTypes = {
  text: PropTypes.string,
};

PromoBanner.defaultProps = {
  text: `CyberSoft khai thác nhu cầu tuyển dụng lập trình từ doanh nghiệp
  và tích hợp các dự án với công nghệ mới nhất vào phương pháp đào
  tạo tích cực cho các học viên. Chương trình giảng dạy được biên
  soạn may đo dành riêng cho các bạn Lập trình, chúng tôi luôn
  được tinh chỉnh và tối ưu hóa theo thời gian bởi các thành viên
  sáng lập của chúng tôi - một nhóm các nhà phát triển phần mềm và
  giám đốc công nghệ dày dạn kinh nghiệm.`,
};

export default PromoBanner;
