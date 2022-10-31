import React, { Component, Fragment } from "react";
import CourseList from "../../components/CourseList";
import PromoBanner from "../../components/PromoBanner";

//
import HeroBanner from "../../components/HeroBanner";
import GraduateVideo from "../../components/GraduateVideo";
import VideoBanner from "../../components/VideoBanner/VideoBanner";

const HomePage = () => {
  return (
    <Fragment>
      <PromoBanner />
      <CourseList />
      {/* <HeroBanner /> */}

      {/* <PromoBanner /> */}

      {/* <VideoBanner /> */}

      {/* <GraduateVideo /> */}
    </Fragment>
  );
};
export default HomePage;
