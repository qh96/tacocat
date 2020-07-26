import React from "react";
import "./companies.css";

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

const companies = {
  Facebook:
    "https://www.linkedin.com/jobs/view/software-engineer-university-grad-at-facebook-1946701054/?refId=87a0eb60-64a1-42b8-a029-3bcf6e326a48&position=1&pageNum=0&trk=public_jobs_job-result-card_result-card_full-click",
  VMware:
    "https://careers.vmware.com/main/jobs/R2007877?utm_campaign=google_jobs_apply&utm_source=google_jobs_apply&utm_medium=organic",
  PayPal:
    "https://www.linkedin.com/jobs/view/software-engineer-university-graduate-at-paypal-1938039921/?refId=8e8cdff9-b54c-4010-b5f9-0d719e2f3919&position=1&pageNum=0&trk=public_jobs_job-result-card_result-card_full-click",
  Goldman_Sachs:
    "https://www.goldmansachs.com/careers/students/programs/americas/new-analyst-program.html",
  SAP:
    "https://jobs.sap.com/job/Palo-Alto-Silicon-Valley-Next-Talent-Rotational-Program-2021-Job-CA-94303/609822201/",
  Asana: "https://boards.greenhouse.io/asana/jobs/2236571?gh_src=89bd80a91"
};

class Companies extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="companies-container">
        <div className="header">
          <span>☆ Openings so far: </span>
          <span className="clickable-span">(clickable with link🔗)</span>
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
