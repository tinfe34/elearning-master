import React, { Component } from "react";
import bg1 from "./../../Assets/img/final_location.png";
import bg2 from "./../../Assets/img/cybersoft-lap-trinh-.jpg";

import CountUp, { startAnimation } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

export default class OneSection extends Component {
  state = {
    scrollStatus: true,
  };

  onVisibilityChange = (isVisible) => {
    if (isVisible) {
      if (this.state.scrollStatus) {
        startAnimation(this.myCountUp);
        this.setState({ scrollStatus: false });
      }
    }
  };

  render() {
    return (
      <section className="one-section my-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-7 col-lg-8">
              <div className="one-section__left">
                <h3 className="one-section__title mb-5">
                  CyberSoft - Đào tạo chuyên gia lập trình theo dự án
                </h3>
                <div className="row">
                  <div className="col-4">
                    <div className="one-section__counter">
                      <p className="one-section__counter-number">
                        <CountUp end={4} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </p>
                      <p className="one-section__counter-title">Trung Tâm</p>
                    </div>
                  </div>
                  <div className="col-4">
                    <div className="one-section__counter">
                      <p className="one-section__counter-number">
                        <CountUp end={3250} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </p>
                      <p className="one-section__counter-title">Học Viên</p>
                    </div>
                  </div>

                  <div className="col-4">
                    <div className="one-section__counter">
                      <p className="one-section__counter-number">
                        <CountUp end={54} redraw={true}>
                          {({ countUpRef, start }) => (
                            <VisibilitySensor onChange={start} delayedCall>
                              <span ref={countUpRef} />
                            </VisibilitySensor>
                          )}
                        </CountUp>
                      </p>
                      <p className="one-section__counter-title">Đối Tác</p>
                    </div>
                  </div>
                  <div className="col-12">
                    <img src={bg1} />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-5 col-lg-4 ">
              <div className="one-section__right">
                <img className="logo" src={bg2} />
                <h3 className="title my-3">
                  <i className="fa fa-graduation-cap mr-3"></i>Đào tạo nghề lập
                  trình chuyên sâu
                </h3>
                <p className="one-section__content">
                  CyberSoft khai thác nhu cầu tuyển dụng lập trình từ doanh
                  nghiệp và tích hợp các dự án với công nghệ mới nhất vào phương
                  pháp đào tạo tích cực cho các học viên. Chương trình giảng dạy
                  được biên soạn may đo dành riêng cho các bạn Lập trình, chúng
                  tôi luôn được tinh chỉnh và tối ưu hóa theo thời gian bởi các
                  thành viên sáng lập của chúng tôi - một nhóm các nhà phát
                  triển phần mềm và giám đốc công nghệ dày dạn kinh nghiệm.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
