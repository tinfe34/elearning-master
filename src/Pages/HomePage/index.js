import React, { Component } from "react";
import Slider from "../../Component/Slider";
import CourseList from "../../Component/CourseList";
import OneSection from "../../Component/OneSection";
import TwoSection from "../../Component/TwoSection";
import ThreeSection from "../../Component/ThreeSection";

export default class HomePage extends Component {
  render() {
    return (
      <div>
        <Slider />

        <OneSection />

        <CourseList />

        <TwoSection />

        <ThreeSection />
      </div>
    );
  }
}
