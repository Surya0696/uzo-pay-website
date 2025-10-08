import React, { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import "./VideoBgSelStyle.css";

gsap.registerPlugin(ScrollTrigger);

const VideoBgSel = () => {
  const rootRef = useRef(null);
  const textRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=200vh",
          scrub: true,
          pin: true,
          anticipatePin: 1,
        },
      });

      gsap.set(textRef.current, { scale: 0.7, opacity: 0.2, yPercent: 0 });

      tl.to(textRef.current, {
        scale: 1.8,
        opacity: 1,
        ease: "power2.out",
        duration: 1,
      });

      tl.to(textRef.current, {
        scale: 1.0,
        opacity: 0.9,
        ease: "power2.inOut",
        duration: 1,
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="vs-hero" ref={rootRef}>
      <div className="vs-bg">
        <video
          className="vs-bg-media"
          src="/assets/bg-city-loop.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        <div className="vs-overlay" aria-hidden="true" />
      </div>

      <div className="vs-center">
        <h1
          className="vs-title"
          ref={textRef}
          style={{ backgroundImage: "url(/Assets/videoBg.svg)" }}
        >
          BizSettle
        </h1>
      </div>
    </section>
  );
};

export default VideoBgSel;
