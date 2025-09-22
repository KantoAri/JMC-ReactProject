import React from "react";
import { Card, Col } from "react-bootstrap";
import "./CredoCard.css";

const CredoCard = ({ icon, text }) => {
  return (
    <Col md={4} className="mb-3">
      <Card
        className="credo-card2 "
        style={{
          backgroundColor: "#798188ff",
          color: "white",
          border: "1px solid #ffffffff",
          boxShadow: "5px 5px 10px rgba(0, 0, 0, 0.51)",
        }}
      >
        <Card.Body className="d-flex align-items-center justify-content-center ">
          <span className="credo-cardIcon"> {icon}</span>

          <span className="ms-3 fw-bold">{text}</span>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CredoCard;
