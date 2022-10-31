import React from "react";

const VideoBanner = () => {
  return (
    <section className="video-banner">
      <div className="video-iframe">
        <div className="video-iframe__wrap">
          <div className="video-iframe__inner">
					<iframe src="http://www.youtube.com/embed/oHg5SJYRHA0?autoplay=1" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoBanner;
