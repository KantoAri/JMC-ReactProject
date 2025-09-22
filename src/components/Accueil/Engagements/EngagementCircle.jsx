import { Col } from "react-bootstrap";
import "./Engagements.css";
import { useEffect, useState } from "react";

const EngagementCircle = ({ icon, text, color, absolute, zIndex }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const circleStyle = {
    backgroundColor: color,
    boxShadow: "10px 10px 15px rgba(0, 0, 0, 0.5)",
    height: isMobile ? "300px" : "23rem",
    width: isMobile ? "300px" : "23rem",
  };

  if (!isMobile) {
    circleStyle.zIndex = zIndex;
  }

  return (
    <Col
      md={4}
      className="mb-3 d-flex justify-content-center my-3 my-md-0"
      style={{
        position: !isMobile ? absolute : "static",
        width: !isMobile ? "38.333%" : "100%",
      }}
    >
      <div className="engagement-circle" style={circleStyle}>
        {icon}
        <p className="circle-text">{text}</p>
      </div>
    </Col>
  );
};

export default EngagementCircle;
