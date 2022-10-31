import React from "react";

//Lib
import CountUp, { startAnimation } from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const Counter = ({ end }) => {
  return (
    <CountUp end={end} redraw={true}>
      {({ countUpRef, start }) => (
        <VisibilitySensor onChange={start} delayedCall>
          <span ref={countUpRef} />
        </VisibilitySensor>
      )}
    </CountUp>
  );
};

export default Counter;
