import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm Victor Zapata, a passionate programmer dedicated to learning
              and innovation.
              <br />
              <br /> I am proficient in classic languages and frameworks such as{" "}
              <b className="purple"> C#, ASP.NET, JavaScript, and VB.NET </b>
              <br />
              <br />
              My interests include developing new{" "}
              <b className="purple">Web Technologies and Products</b> and
              exploring areas related to <b className="purple">AI</b> to harness
              its full potential.
              <br />
              <br />I enjoy building products with{" "}
              <b className="purple">Node.js</b> and modern JavaScript frameworks
              like <b className="purple">React.js</b>.
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt>
              <img
                src={myImg}
                className="img-fluid"
                alt="avatar"
                style={{ width: "300px", height: "300px" }}
                margin="5px"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect</span> with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vzapata007"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vzapata1985/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
