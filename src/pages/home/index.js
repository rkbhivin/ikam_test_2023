import LocalBody from "./components/localBody";
import "./style.css";

import Accordion from "react-bootstrap/Accordion";
import { Component } from "react";

function App() {
  const accordionDetails = [
    {
      name: "Local Body Details",
      component: <LocalBody />,
    },
    {
      name: "Permit & Occupancy Details",
      component: <LocalBody />,
    },
    {
      name: "Survey Details || Village Details",
      component: <LocalBody />,
    },
  ];

  return (
    <div class="root">
      <Accordion defaultActiveKey="0">
        {accordionDetails.map((el, index) => (
          <Accordion.Item eventKey={index}>
            <Accordion.Header>{el.name}</Accordion.Header>
            <Accordion.Body>{el.component}</Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
      <div className="row btn-container">
        <button type="button" className="btn-outline">
          Next
        </button>
        <button type="button" className="btn-submit">
          Save
        </button>
      </div>
    </div>
  );
}

export default App;
