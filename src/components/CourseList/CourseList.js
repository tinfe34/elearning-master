import React, { Component, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import { useLoader } from "../../context/LoaderContext";
//Store
import { GET_COURSE } from "../../store/modules/Course";

//Comp
import Course from "../Course";

//swiper
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
import "swiper/components/pagination/pagination.scss";

//Bs
import { Container} from "react-bootstrap";

//Ui
import Heading from "../../ui/Heading";
import Text from "../../ui/Text";

SwiperCore.use([Pagination, Autoplay, Navigation]);

const params = {
  loop: false,
  scrollbar: { draggable: true },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.5,
      slidesPerColumn: 1,
      slidesPerColumnFill: "row",
    },
    700: {
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 3.5,
      slidesPerColumn: 2,
      slidesPerColumnFill: "row",
    },
  },
};

const CourseList = ({ title, descTxt }) => {
  const { setLoading } = useLoader();
  const dispatch = useDispatch();

  const { listCourse } = useSelector((state) => state.Course);

  useEffect(() => {
    setLoading(true)

    dispatch(GET_COURSE()).then((res) => {
      res && setLoading(false)
    });
    
  }, []);

  const renderCourse = () => {
    return listCourse.map((course, index) => {
      return (
        <SwiperSlide key={index}>
          <Course course={course} />
        </SwiperSlide>
      );
    });
  };

  return (
    <section className="course-slider">
      <Container>
        <div className="course-list__wrap">
          <div className="course-slider__title">
            <Heading>{title}</Heading> 
            <Text>{descTxt}</Text>
          </div>
          <div className="slider" style={{margin: '50px 0'}}>
            <Swiper spaceBetween={50} {...params}>
              {renderCourse()}
            </Swiper>
            <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div>
          </div>
        </div>
      </Container>
    </section>
  );
};

CourseList.propTypes = {
  title: PropTypes.string,
  descTxt: PropTypes.string,
};

CourseList.defaultProps = {
  title: `Các khóa học lập trình offline tại Hồ Chí Minh`,
  descTxt: `Các khóa học lập tình offline sẽ cung cấp đầy đủ kiến thức
  chuyên môn và giúp học viên trải nghiệm môi trường vừa học vừa
  làm trong thực tế, giúp các bạn tự tin khi đi làm.`,
};

export default CourseList;
