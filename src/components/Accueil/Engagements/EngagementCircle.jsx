import { Col } from "react-bootstrap";
import "./Engagements.css";

const EngagementCircle = ({ icon, text, color, absolute, zIndex }) => {
  const circleStyle = {
    backgroundColor: color,
    zIndex: zIndex,
    boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.5)",
  };

  return (
    <Col
      md={4}
      className="d-flex justify-content-center  my-md-0"
      style={{ position: absolute, width: "38.333%" }}
    >
      <div className="engagement-circle" style={circleStyle}>
        {icon}
        <p className="circle-text">{text}</p>
      </div>
    </Col>
  );
};

export default EngagementCircle;
