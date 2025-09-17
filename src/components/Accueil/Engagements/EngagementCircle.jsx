import { Col } from "react-bootstrap";
import "./Engagements.css";

const EngagementCircle = ({ icon, text, color }) => {
  const circleStyle = {
    backgroundColor: color,
  };

  return (
    <Col md={4} className="d-flex justify-content-center  my-md-0">
      <div className="engagement-circle" style={circleStyle}>
        {icon}
        <p className="circle-text">{text}</p>
      </div>
    </Col>
  );
};

export default EngagementCircle;
