import React from "react";
import "./companies.css";
import companies from "./company_data.json";

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
      <div className="companies-container">
        <div className="header">
          <span>☆ Openings so far: </span>
          <span className="clickable-span">Tip: Clickable with link 🔗</span>
        </div>
        <div className="tags">
          {Object.keys(companies).map(item => (
            <Button
              key={item}
              variant="outline-dark"
              href={companies[item]}
              target="_blank"
            >
              {item}
            </Button>
          ))}
        </div>
        <hr />
      </div>
    );
  }
}

export default Companies;
