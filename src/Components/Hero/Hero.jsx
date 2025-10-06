import React from "react";
import "./HeroStyle.css";

const Hero = () => {
  return (
    <section
      className="hero"
      style={{
        background:
          "black url('/Assets/BannerHero.jpg') no-repeat center center / cover",
      }}
    >
      <h1 className="heroTitle">New Era of Finance Solutions</h1>
      <p className="heroSubtitle">
        Fast Funds, Flexible Choices: Quick Settlement & Multiple Payment
        Methods
      </p>

      <button className="exploreBtn">Explore more</button>

      <p className="heroFooter">
        Empowering Your Financial Future, Today and Tomorrow One-Stop Solution
      </p>
    </section>
  );
};

export default Hero;
