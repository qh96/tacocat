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
          <Navbar.Brand href="#home">🐈</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="https://github.com/qh96/tacocat">About</Nav.Link>
              <Nav.Link href="#home">Contact</Nav.Link>
              <Nav.Link href="https://github.com/qh96/tacocat">
                Contribute
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Jumbotron className="text-center">
          <h1>Tacocat</h1>
          <p>
            This is a platform for displaying the latest Software Engineer job
            information to the new graduates. Supported by automatic
            hard-working website scrapers targeting on LinkedIn & Indeed. This
            website is only for self study purpose.{" "}
            <b>No commercial usage permitted.</b>
          </p>
          <p>
            <Button variant="primary" href="https://github.com/qh96/tacocat">
              ⭐ Star
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
