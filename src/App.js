import React from 'react';
import logo from './logo.svg';
// import './App.css';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';
import 'bootstrap/dist/css/bootstrap.css'; 
import MultiSortTable from './components/table'
import { Container, Row, Col, Navbar, Nav, Jumbotron, Button, ModalFooter} from 'react-bootstrap';

function App() {
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
    Tacocat is a platform for supporting the latest free software engineer job information for the new graduates.
    Temporarily supported by a hard-working LinkedIn scraper, which works 996 and never sleep.
  </p>
  <p>
    <Button variant="primary" href="https://github.com/qh96/tacocat">Learn more</Button>
  </p>
</Jumbotron>
<Container>
      
       <MultiSortTable></MultiSortTable>
© 2020. All rights reserved.

    </Container>

    </div>
    
   
   
  );
}

export default App;
