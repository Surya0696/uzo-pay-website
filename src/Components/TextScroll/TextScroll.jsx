import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./TextScrollStyle.css";

const TextScroll = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    gsap.fromTo(
      ".txtScroll span",
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        stagger: 0.5, 
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".txtScroll",
          start: "top 80%",
          end: "top 40%",
          scrub: true,
          markers: false, 
        },
      }
    );
  }, []);

  const text =
    "We focus on your finances, you focus on what matters most. Your finance our pride, Always Safe & Reliable.";

  return (
    <div className="TextScrollDiv">
      <p className="txtScroll">
        {text.split(" ").map((word, i) => (
          <span key={i}>{word}&nbsp;</span>
        ))}
      </p>
    </div>
  );
};

export default TextScroll;
