import React from "react";
import "./about.css";

import {
  Container,
  Row,
  Col,
  Navbar,
  Nav,
  Jumbotron,
  Button,
  ModalFooter,
  Tabs,
  Tab
} from "react-bootstrap";

class Companies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Brand href="#home">🐈</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="https://github.com/qh96/tacocat">About ME</Nav.Link>
            <Nav.Link href="#home">Contact</Nav.Link>
            <Nav.Link href="https://github.com/qh96/tacocat">
              Contribute
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default Companies;
