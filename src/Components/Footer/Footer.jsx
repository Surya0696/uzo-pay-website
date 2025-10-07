import React from "react";
import { Container, Row, Col } from "react-bootstrap";
// import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
// import { IoArrowUpOutline } from "react-icons/io5";
import "./FooterStyle.css";
import {
  ArrowUpCircle,
  Facebook,
  Instagram,
  Twitter,
} from "react-bootstrap-icons";

const Footer = () => {
  return (
    <footer className="footer text-light pt-5 pb-4 footerMainOuter">
      <Container>
        <Row>
          {/* Left section - Brand + Description */}
          <Col md={6} className="mb-4">
            <h5 className="footer-title">UzOPay</h5>
            <p className="footer-description">
              Our payment gateway simplifies transactions for e-commerce
              businesses, delivering fast and secure processing. With smooth
              integration, we enhance your store's payment capabilities.
              Optimize your checkout process and boost customer satisfaction
              easily.
            </p>
            <div className="footer-social mt-3">
              <a
                href="https://facebook.com"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://x.com"
                aria-label="Twitter (X)"
                target="_blank"
                rel="noreferrer"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://instagram.com"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <Instagram size={20} />
              </a>
            </div>
          </Col>

          {/* Payment */}
          <Col md={2} sm={6} className="mb-4">
            <h6 className="footer-heading">Payment</h6>
            <ul className="footer-links">
              <li>
                <a href="#">Payment Gateway</a>
              </li>
              <li>
                <a href="#">Payment Links</a>
              </li>
              <li>
                <a href="#">Payment Methods</a>
              </li>
              <li>
                <a href="#">Bulk Payment</a>
              </li>
              <li>
                <a href="#">Invoice</a>
              </li>
            </ul>
          </Col>

          {/* All Banking */}
          <Col md={2} sm={6} className="mb-4">
            <h6 className="footer-heading">All Banking</h6>
            <ul className="footer-links">
              <li>
                <a href="#">Current Account</a>
              </li>
              <li>
                <a href="#">Accounting</a>
              </li>
              <li>
                <a href="#">API Banking</a>
              </li>
              <li>
                <a href="#">UPI Autopay</a>
              </li>
              <li>
                <a href="#">Tax Payment</a>
              </li>
            </ul>
          </Col>
          <Col md={2} sm={6} className="mb-4">
            <h6 className="footer-heading">All Banking</h6>
            <ul className="footer-links">
              <li>
                <a href="#">Current Account</a>
              </li>
              <li>
                <a href="#">Accounting</a>
              </li>
              <li>
                <a href="#">API Banking</a>
              </li>
              <li>
                <a href="#">UPI Autopay</a>
              </li>
              <li>
                <a href="#">Tax Payment</a>
              </li>
            </ul>
          </Col>
        </Row>

        {/* Bottom Bar */}
        <Row className="footer-bottom mt-4 pt-3 border-top">
          <Col md={6} className="text-center text-md-start">
            <small>© 2025 UzOPay</small>
          </Col>
          <Col md={6} className="text-center text-md-end">
            <span href="#" className="me-3" style={{ color: "FFFFFFB2" }}>
              Terms of Service
            </span>
            <span href="#" className="me-3" style={{ color: "FFFFFFB2" }}>
              Privacy Policy
            </span>
            <a
              href="#top"
              className="scroll-top-btn"
              aria-label="Scroll to top"
            >
              <ArrowUpCircle size={22} />
            </a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
