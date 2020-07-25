import React from "react";
import logo from "./logo.svg";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Table from "./components/table";
import "./App.css";

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

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Navbar.Brand href="#home">🐈</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://github.com/qh96/tacocat">About</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
              <Nav.Link href="https://github.com/qh96/tacocat">
                ⭐ Star on Github
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron className="text-center">
          <Container>
            <Row>
              <Col></Col>
              <Col xs={6}>
                <h1 className="jumbotron-heading">Tacocat</h1>
                <p className="lead ">
                  Tacocat is a platform for displaying the latest Software
                  Engineer job information to the new graduates. Supported by
                  automatic running crawlers targeting on LinkedIn & Indeed.
                </p>
                <p>
                  <Button
                    variant="outline-dark"
                    href="https://github.com/qh96/tacocat"
                  >
                    Contribute
                  </Button>
                </p>
              </Col>
              <Col></Col>
            </Row>
          </Container>
        </Jumbotron>
        <div className="table py-5 bg-light">
          <div className="table-header">
            <div className="pulse-container">
              <span className="pulse"></span>
            </div>
            <span className="pulse-right-span"> Updating Live</span>
          </div>
          <Container className="bg-white px-4 py-4 border border-dark rounded">
            <Tabs>
              <Tab eventKey="linkedin" title="LinkedIn">
                <Table source="linkedin"></Table>
              </Tab>
              <Tab eventKey="indeed" title="Indeed">
                <Table source="indeed"></Table>
              </Tab>
            </Tabs>
            <p className="my-5" style={{ textAlign: "center" }}>
              © 2020. All rights reserved.{" "}
              <a href="https://hits.seeyoufarm.com" />
              <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Feattacocat.herokuapp.com" />
            </p>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
