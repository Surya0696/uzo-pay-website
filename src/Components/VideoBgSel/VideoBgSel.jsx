import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./VideoMaskStyle.css"; // Use your CSS here

gsap.registerPlugin(ScrollTrigger);

const VideoMaskScroll = () => {
  useEffect(() => {
    gsap.to(".mask h2", {
      scale: 10, // adjust scale as needed
      scrollTrigger: {
        trigger: ".container",
        start: "top top",
        end: "+=1000", // scroll distance
        scrub: 1,
        pin: true,
      },
    });
  }, []);

  return (
    <div className="container">
      <video autoPlay loop muted>
        <source
          src="https://videos.pexels.com/video-files/19026925/19026925-uhd_2560_1440_25fps.mp4"
          type="video/mp4"
        />
      </video>

      <div className="mask">
        <h2>CIRCUS</h2>
      </div>
    </div>
  );
};

export default VideoMaskScroll;
