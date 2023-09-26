import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import logo from "../../images/logo.png";

import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <Container>
        <Row>
          <Col xs={2}>
            <div className="footer-logo">
              {/* <img src={icon} alt="logo" /> */}
          <img className="nav-logo" src={logo} alt="logo" />
      
            </div>
          </Col>
          <Col xs={6}>
            <div className="footer-text">
              <h2>Support</h2>
              <p>
                We are a team of students who are passionate about learning and
                sharing knowledge. We are always open to new ideas and
                collaborations.
              </p>
            </div>
          </Col>
          <Col className="colum">
            <Row>
              <div className="footer-contact">
                <h2>Contact Us</h2>
                <Row>
                  <a href="mailto:support@knowledgecube.com">
                    <MdEmail className="contact-icon"/>{" "}
                    support@knowledgecube.com
                  </a>
                </Row>
               
              </div>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
