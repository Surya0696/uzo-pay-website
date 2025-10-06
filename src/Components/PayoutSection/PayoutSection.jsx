import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./PayoutSectionStyle.css";

const PayoutSection = () => {
  return (
    <div
      className="payout-section"
      style={{
        position: "relative",
        background: "url('/Assets/bgImg2.jpg') no-repeat center center / cover",
        minHeight: "100%",
      }}
    >
      <div
        className="blur-overlay"
        style={{
          backdropFilter: "blur(500px)",
          WebkitBackdropFilter: "blur(300px)",
          backgroundColor: "rgba(0,0,0,0.75)",
          minHeight: "100%",
          width: "100%",
        }}
      >
        <Container fluid>
          <Row className="align-items-center p-5">
            <Col xs={12} md={6}>
              <div className="content">
                <span className="tagModif">Payout Service Centric</span>
                <h2 className="titlesele">
                  Streamlined for Payout Ease and Efficiency
                </h2>

                <div className="feature">
                  <h5>Comprehensive Documentation</h5>
                  <p className="featureSubText">
                    Access clear, detailed documentation that simplifies
                    integration and accelerates your payout setup.
                  </p>
                </div>

                <div className="feature">
                  <h5>Quick Start SDKs</h5>
                  <p className="featureSubText">
                    Leverage our ready-to-use SDKs for various programming
                    languages, enabling quick and smooth payout implementation.
                  </p>
                </div>

                <div className="feature">
                  <h5>Sandbox Environment</h5>
                  <p className="featureSubText">
                    Test and refine your payout integration in a secure sandbox
                    environment before going live, ensuring a seamless launch.
                  </p>
                </div>

                <button className="glow-btn-sel">Get Started</button>
              </div>
            </Col>

            <Col xs={12} md={6}>
              <div className="hexagon-grid">
                <img
                  src="/Assets/Hexagons.svg"
                  alt="Hexagons"
                  className="img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default PayoutSection;
