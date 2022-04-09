import React, { Component } from "react";
import { connect } from "react-redux";
import Course from "../Course";

import { asyncFechCourse } from "../../Redux/Action/asyncCourse";
import ModalCart from "../ModalCart";

import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/swiper.scss";
import 'swiper/components/navigation/navigation.scss';
import "swiper/components/pagination/pagination.scss";

SwiperCore.use([Pagination, Autoplay,Navigation]);

const params = {
  slidesPerView: 3,
  slidesPerColumn: 2,
  slidesPerColumnFill: "row",
  loop: false,
  pagination: { clickable: true, dynamicBullets: true },
  scrollbar: { draggable: true },

  breakpoints: {
    450: {
      slidesPerView: 1,
    },
    700: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    },
  },
};

class CourseList extends Component {

  renderCourse = () => {
    return this.props.listCourse.map((course, index) => {
      return (
        <SwiperSlide key={index}>
          <Course course={course} />
        </SwiperSlide>
      );
    });
  };

  render() {
    return (
      <section className="courses-slider">
        <div className="container">
          <div className="row">
            <div className="col-12 m-auto">
              <div className="courses-slider__title text-center">
                <h1 className="mt0">
                  Các khóa học lập trình offline tại Hồ Chí Minh
                </h1>
                <p>
                  Các khóa học lập tình offline sẽ cung cấp đầy đủ kiến thức
                  chuyên môn và giúp học viên trải nghiệm môi trường vừa học vừa
                  làm trong thực tế, giúp các bạn tự tin khi đi làm.
                </p>
              </div>
            </div>
            <ModalCart />
            <div className="col-12">
              <Swiper spaceBetween={50} {...params}>

                {this.renderCourse()}

              </Swiper>
              <div className="swiper-button-next"></div>
                <div className="swiper-button-prev"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  componentDidMount() {
    this.props.dispatch(asyncFechCourse());
  }
}

const mapStateToProps = (state) => {
  return {
    listCourse: state.CourseReducer.listCourse,
  };
};

export default connect(mapStateToProps)(CourseList);
