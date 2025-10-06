import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import "./GridBoxSelStyle.css";

const GridBoxSel = () => {
  return (
    <>
      <section className="SubHero">
        <div className="SubHeroMainTitle">
          <p>Reasons to Partner</p>
        </div>
        <div className="SubHeroSubTitle">
          <p className="mb-0">Exceptional Support for Your </p>
          <p>Success</p>
        </div>
      </section>
      <div className="GridBoxSel-div">
        <Container>
          <Row
            className="g-5"
            style={{ display: "flex", justifyContent: "center" }}
          >
            {/* Card 1 */}
            <Col md={4}>
              <div className="glass-card">
                <div className="icons-algin">
                  <img
                    src="/Assets/payment1.svg"
                    alt="payment illustration"
                    className="card-icon img-fluid"
                  />
                </div>
                <div className="mt-4">
                  <p className="cardHeading-Sel">Optimize customer journeys</p>
                  <p className="cardMainTitle-sel">
                    Streamlined transactions enhancing efficiency and customer
                    satisfaction.
                  </p>
                  <Button variant="light" className="glass-btn">
                    Explore →
                  </Button>
                </div>
              </div>
            </Col>

            {/* Card 2 */}
            <Col md={7}>
              <div className="glass-card">
                <p className="cardHeading-Sel">Faster Processing Time</p>
                <p className="cardMainTitle-sel">
                  Quick and efficient payment processing for a seamless user
                  experience.
                </p>
                <Button variant="light" className="glass-btn">
                  Learn more →
                </Button>
                <div className="icons-algin" style={{ marginTop: "26px" }}>
                  <img
                    src="/Assets/payment2.svg"
                    alt="payment illustration"
                    className="card-icon img-fluid"
                  />
                </div>
              </div>
            </Col>

            {/* Card 3 */}
            <Col md={7}>
              <div className="glass-card">
                <div className="icons-algin" style={{ marginBottom: "26px" }}>
                  <img
                    src="/Assets/payment3.svg"
                    alt="payment illustration"
                    className="card-icon img-fluid"
                  />
                </div>
                <p className="cardHeading-Sel">Flexible Solutions</p>
                <p className="cardMainTitle-sel">
                  Customizable options to meet the unique needs of your
                  business.
                </p>
                <Button variant="light" className="glass-btn">
                  Explore more →
                </Button>
              </div>
            </Col>

            {/* Card 4 */}
            <Col md={4}>
              <div className="glass-card">
                <p className="cardHeading-Sel">Effortless Integration</p>
                <p className="cardMainTitle-sel">
                  Simple API integration with your existing systems and
                  platforms.
                </p>
                <Button variant="light" className="glass-btn">
                  Learn more →
                </Button>
                <div className="icons-algin" style={{ marginTop: "26px" }}>
                  <img
                    src="/Assets/payment4.svg"
                    alt="payment illustration"
                    className="card-icon img-fluid"
                  />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default GridBoxSel;
