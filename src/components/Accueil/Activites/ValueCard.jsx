import React from "react";
import { Card } from "react-bootstrap";
import "./ValueCard.css";

const ValueCard = ({ icon, title, description, height, width }) => {
  return (
    <Card
      className="value-card h-100 border-0"
      style={{
        borderRadius: 0,
        boxShadow: "8px 8px 12px rgba(0, 0, 0, 0.62)",
      }}
    >
      <Card.Body className="d-flex flex-column flex-md-row align-items-center p-4 text-left">
        <div 
          className="value-card-icon-wrapper mb-3 mb-md-0" 
          style={{ height, width }}
        >
          {icon}
        </div>
        <div className="ms-md-3 text-center text-md-start">
          <Card.Title className="value-card-title fw-bold mt-2 mt-md-0">
            {title}
          </Card.Title>
          <Card.Text className="text-muted">{description}</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default ValueCard;
