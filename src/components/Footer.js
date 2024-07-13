import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AiFillGithub, AiFillMail } from 'react-icons/ai';

import { FaLinkedinIn } from 'react-icons/fa';
import { BsTelegram } from 'react-icons/bs';

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" />

        <Col md="4" className="footer-copyright">
          <h3>Copyright © {year} - Victor Zapata</h3>
        </Col>

        <Col md="4" className="footer-body">
          <ul>
            <li className="social-icons">
              <a
                className="footer-social-icons"
                href="https://github.com/vzapata007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons">
              <a
                className="footer-social-icons"
                href="https://www.linkedin.com/in/vzapata1985/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons">
              <a
                className="footer-social-icons"
                href="mailto:victor.zapata@msn.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillMail />
              </a>
            </li>
            {/* <li className="social-icons">
              <a
                className="footer-social-icons"
                href="https://hits.sh/vzapata007.github.io/hits/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  alt="Hits"
                  src="https://hits.sh/vzapata007.github.io/hits.svg?color=8e4b93"
                />
              </a>
            </li> */}
          </ul>
        </Col>
        <Col md="4" className="footer-body" />
      </Row>
    </Container>
  );
}

export default Footer;
