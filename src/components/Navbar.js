import React, { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import BtnToggleTheme from './BtnTottleTheme';
import { Col, Dropdown, Row } from 'react-bootstrap';
import { CgFileDocument } from 'react-icons/cg';
import Button from 'react-bootstrap/Button';
import { CgGitFork } from 'react-icons/cg';

import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from 'react-icons/ai';

import { MdLanguage } from 'react-icons/md';

function NavBar() {
  const [expand, updateExpanded] = useState(false);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className="sticky"
    >
      <Navbar.Toggle
        aria-controls="responsive-navbar-nav"
        onClick={() => {
          updateExpanded(expand ? false : 'expanded');
        }}
      >
        <span />
        <span />
        <span />
      </Navbar.Toggle>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto" defaultActiveKey="#home">
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineHome style={{ marginBottom: '3px' }} /> Home
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/about"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineUser style={{ marginBottom: '3px' }} /> About
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/project"
              onClick={() => updateExpanded(false)}
            >
              <AiOutlineFundProjectionScreen
                style={{ marginBottom: '3px' }}
              />{' '}
              Projects
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link
              as={Link}
              to="/resume"
              onClick={() => updateExpanded(false)}
            >
              <CgFileDocument style={{ marginBottom: '2px' }} />{' '}
              Resume
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>

      {!expand && (
        <Row>
          <Col className="col-sm-4">
            <BtnToggleTheme />
          </Col>
          {/* <Col className="col-sm-4">
            <Button
              href="https://github.com/vzapata007/vzapata007.github.io"
              target="_blank"
              className="fork-btn-inner"
            >
              <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
            </Button>
          </Col> */}
        </Row>
      )}
    </Navbar>
  );
}

export default NavBar;
