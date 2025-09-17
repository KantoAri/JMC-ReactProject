import React from "react";
import { Card } from "react-bootstrap";
import "./ValueCard.css";

const ValueCard = ({ icon, title, description, height, width }) => {
  return (
    <Card
      className="value-card h-100 shadow border-0"
      style={{ borderRadius: 0 }}
    >
      <Card.Body className="d-flex flex-row align-items-center p-4 text-left ">
        <div className="value-card-icon-wrapper mb-3" style={{ height, width }}>
          {icon}
        </div>
        <div className="ms-3">
          <Card.Title className="value-card-title fw-bold mt-0">
            {title}
          </Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ValueCard;
