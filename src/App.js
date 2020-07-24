import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "react-bootstrap-table-next/dist/react-bootstrap-table2.min.css";
import "bootstrap/dist/css/bootstrap.css";
import Table from "./components/table";
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
          <Navbar.Brand href="#home">Tacocat</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://github.com/qh96/tacocat">About</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
              <Nav.Link href="#home">Like❤me</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron className="text-center">
          <h1>🐈!</h1>
          <p>
            Tacocat is a platform for supporting the latest free software
            engineer job information for the new graduates. Temporarily
            supported by a hard-working LinkedIn scraper, which works 996 and
            never sleep.
          </p>
          <p>
            <Button variant="primary" href="https://github.com/qh96/tacocat">
              Learn more
            </Button>
          </p>
        </Jumbotron>
        <Container>
          <Tabs>
            <Tab eventKey="linkedin" title="LinkedIn">
              <div className="margin-bottom-1p5"></div>
              <Table source="linkedin"></Table>
            </Tab>
            <Tab eventKey="indeed" title="Indeed">
              <div className="margin-bottom-1p5"></div>
              <Table source="indeed"></Table>
            </Tab>
          </Tabs>
          <p>
            © 2020. All rights reserved.{" "}
            <a href="https://hits.seeyoufarm.com" />
            <img src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Feattacocat.herokuapp.com" />
          </p>
        </Container>
      </div>
    );
  }
}

export default App;
