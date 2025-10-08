import React, { useState } from "react";
import "./PaymentGatewayStyle.css";
import { Col, Container, Row } from "react-bootstrap";

const tabs = ["Payments", "Payout", "Payroll", "AI Banking"];

const tabContent = {
  Payments: {
    title: "Elevate Your Online Store's Payment Experience",
    description:
      "Our payment gateway simplifies transactions for e-commerce businesses, delivering fast and secure processing. With smooth integration, we enhance your store's payment capabilities. Optimize your checkout process and boost customer satisfaction easily.",
    features: [
      { icon: "/Assets/msgIcon1.svg", text: "Optimize Your Checkout" },
      { icon: "/Assets/msgIcon2.svg", text: "Fast and Secure" },
      { icon: "/Assets/msgIcon3.svg", text: "Smooth Integration" },
    ],
  },
  Payout: {
    title: "Streamline Your Business Payouts",
    description:
      "Automate and manage your business payouts efficiently with our comprehensive payout solution. Handle vendor payments, affiliate commissions, and employee reimbursements seamlessly.",
    features: [
      { icon: "/Assets/msgIcon1.svg", text: "Optimize Your Checkout" },
      { icon: "/Assets/msgIcon2.svg", text: "Fast and Secure" },
      { icon: "/Assets/msgIcon3.svg", text: "Smooth Integration" },
    ],
  },
  Payroll: {
    title: "Simplified Payroll Management",
    description:
      "Manage employee salaries, taxes, and benefits with our automated payroll system. Ensure compliance and accuracy while saving time on administrative tasks.",
    features: [
      { icon: "/Assets/msgIcon1.svg", text: "Optimize Your Checkout" },
      { icon: "/Assets/msgIcon2.svg", text: "Fast and Secure" },
      { icon: "/Assets/msgIcon3.svg", text: "Smooth Integration" },
    ],
  },
  "AI Banking": {
    title: "Intelligent Banking Solutions",
    description:
      "Leverage AI-powered banking features for smart financial management. Get insights, predictions, and automated recommendations for your business finances.",
    features: [
      { icon: "/Assets/msgIcon1.svg", text: "Optimize Your Checkout" },
      { icon: "/Assets/msgIcon2.svg", text: "Fast and Secure" },
      { icon: "/Assets/msgIcon3.svg", text: "Smooth Integration" },
    ],
  },
};

const PaymentGateway = () => {
  const [activeTab, setActiveTab] = useState("Payments");
  const currentContent = tabContent[activeTab];

  return (
    <div className="feature-card">
      <div className="feature-card-innerDiv">
        {/* Tabs */}
        <div className="tabsDiv" role="tablist">
          <span className="tabsMainDiv">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`panel-${tab.replace(/\s+/g, "-").toLowerCase()}`}
              >
                {tab}
              </button>
            ))}
          </span>
        </div>

        {/* Panel */}
        <div
          className="feature-content"
          role="tabpanel"
          id={`panel-${activeTab.replace(/\s+/g, "-").toLowerCase()}`}
        >
          <Container>
            <Row>
              <Col lg={6} md={6} sm={12}>
                <div className="feature-left">
                  <h3>{currentContent.title}</h3>
                  <p>{currentContent.description}</p>

                  <ul className="features-list">
                    {currentContent.features.map((f, i) => (
                      <li key={i} className="feature-item">
                        {f.icon && (
                          <img
                            src={f.icon}
                            alt=""
                            className="feature-icon"
                            loading="lazy"
                          />
                        )}
                        <span>{f.text}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="glow-btn-sel">Get Started</button>
                </div>
              </Col>

              <Col lg={6} md={6} sm={12}>
                <div className="feature-right">
                  <img
                    src="/Assets/feature-cardImg.svg"
                    alt={`${activeTab} feature illustration`}
                    className="img-fluid"
                    loading="lazy"
                  />
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </div>
  );
};

export default PaymentGateway;
