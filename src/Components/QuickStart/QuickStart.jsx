import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./QuickStartStyle.css";

const QuickStart = () => {
  return (
    <section className="QuickStart-mainDiv">
      <div className="QuickStart-div">
        <Container>
          <Row>
            <Col lg={6}>
              <span className="tagModif">Reliable, and Efficient</span>
              <h2 className="titlesele">Simplify the payments process</h2>
              <p className="featureSubText">
                Tools crafted to simplify and enhance your payout processes.
              </p>
            </Col>
            <Col lg={6}>
              <div className="QuickStartImg">
                <img
                  src="/Assets/QuickStartbox.svg"
                  alt="payment illustration"
                  className="card-icon img-fluid"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default QuickStart;
