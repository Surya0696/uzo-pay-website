import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import "./FnanceSelStyle.css";

const FnanceSel = () => {
  return (
    <div className="FnanceSel-mainOuter">
      <div
        className="FnanceSel-mainDiv"
        style={{
          background:
            "url('/Assets/CTA-BG.svg') center center / cover no-repeat",

          width: "100%",
          backgroundColor: "#010203",
        }}
      >
        <div className="overlay">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <p className="FnanceSel-txt">
                  Let’s build the future of finance together
                </p>
              </Col>
              <Col
                lg={6}
                className="d-flex justify-content-lg-end justify-content-center"
              >
                <div className="glow-btn-sel-div">
                  <button className="glow-btn-sel">Get Started</button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default FnanceSel;
