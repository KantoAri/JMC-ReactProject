import React from "react";
import { Card, Col } from "react-bootstrap";
import "./CredoCard.css";

const CredoCard = ({ icon, text }) => {
  return (
    <Col md={4} className="mb-3">
      <Card className="credo-card2 ">
        <Card.Body className="d-flex align-items-center justify-content-center">
          {icon}
          <span className="ms-3 fw-bold">{text}</span>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CredoCard;
