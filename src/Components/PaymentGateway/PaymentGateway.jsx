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
      "📧 Optimize Your Checkout",
      "📊 Fast and Secure",
      "💬 Smooth Integration",
    ],
  },
  Payout: {
    title: "Streamline Your Business Payouts",
    description:
      "Automate and manage your business payouts efficiently with our comprehensive payout solution. Handle vendor payments, affiliate commissions, and employee reimbursements seamlessly.",
    features: [
      "⚡ Instant Transfers",
      "🔒 Secure Processing",
      "📊 Real-time Tracking",
    ],
  },
  Payroll: {
    title: "Simplified Payroll Management",
    description:
      "Manage employee salaries, taxes, and benefits with our automated payroll system. Ensure compliance and accuracy while saving time on administrative tasks.",
    features: [
      "💼 Automated Processing",
      "📋 Tax Compliance",
      "📈 Detailed Reports",
    ],
  },
  "AI Banking": {
    title: "Intelligent Banking Solutions",
    description:
      "Leverage AI-powered banking features for smart financial management. Get insights, predictions, and automated recommendations for your business finances.",
    features: [
      "🤖 AI-Driven Insights",
      "📊 Predictive Analytics",
      "🎯 Smart Recommendations",
    ],
  },
};

const PaymentGateway = () => {
  const [activeTab, setActiveTab] = useState("Payments");
  const currentContent = tabContent[activeTab];

  return (
    <div className="feature-card">
      <div className="feature-card-innerDiv">
        {/* Tab Header */}
        <div className="tabsDiv" role="tablist">
          <span className="tabsMainDiv">
            {tabs.map((tab) => (
              <button
                key={tab}
                className={`tab-btn ${activeTab === tab ? "active" : ""}`}
                onClick={() => setActiveTab(tab)}
                role="tab"
                aria-selected={activeTab === tab}
                aria-controls={`panel-${tab
                  .replace(/\s+/g, "-")
                  .toLowerCase()}`}
              >
                {tab}
              </button>
            ))}
          </span>
        </div>

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
                    {currentContent.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
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
