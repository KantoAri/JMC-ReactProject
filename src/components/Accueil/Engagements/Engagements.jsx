import React from "react";
import { Container, Row } from "react-bootstrap";
import {
  FaCode,
  FaCog,
  FaExchangeAlt,
  FaCheckSquare,
  FaUserShield,
} from "react-icons/fa";
import { PiWavesBold } from "react-icons/pi";
import CredoCard from "./CredoCard";
import EngagementCircle from "./EngagementCircle";
import "./CredoCard.css";
import "./Engagements.css";

const Engagements = () => {
  return (
    <div className="my-5">
      <h2
        className="display-5 text-center mb-5"
        style={{
          fontWeight: "bold",
          position: "relative",
        }}
      >
        Nos engagements
        <div
          style={{
            width: "120px",
            height: "5px",
            backgroundColor: "#fd7e14",
            margin: "15px auto",
            borderRadius: "2px",
          }}
        ></div>
      </h2>
      <div style={{ width: "80%", margin: " 0 auto" }}>
        <p className="mb-5">
          Au fil des années, nous avons eu le privilège de collaborer avec de
          nombreuses entreprises françaises et francophones, en leur offrant des
          services de:
        </p>
      </div>

      <Row className="justify-content-center " style={{ maxWidth: "99vw" }}>
        <EngagementCircle
          icon={<FaCode />}
          text="Développement sur mesure"
          color="#c7e1ef79"
          absolute="relative"
          zIndex={2}
        />
        <EngagementCircle
          icon={<FaExchangeAlt />}
          text="Migration d'applications "
          color="#ccccccb6"
          absolute="relative"
          zIndex={2}
        />
        <EngagementCircle
          icon={<FaCog />}
          text="Tierce maintenance applicative"
          color="#f7e1b5d3"
          absolute="absolute"
          zIndex={-3}
        />
      </Row>
      <div style={{ width: "80%", margin: "0 auto" }}>
        <p className="mt-5">
          Chez <strong>JM-CONTACTS, </strong> nous sommes fiers de notre
          parcours et de notre engagement envers l'excellence. Nous sommes
          déterminés à continuer à fournir à nos clients des services de haute
          qualité, en restant à l'écoute de leurs besoins et en nous adaptant
          aux evolutions du marché.
        </p>
      </div>
      <Container className="my-5">
        <h2
          className="display-5 text-center mb-5"
          style={{
            fontWeight: "bold",
            position: "relative",
          }}
        >
          Notre crédo
          <div
            style={{
              width: "120px",
              height: "5px",
              backgroundColor: "#fd7e14",
              margin: "15px auto",
              borderRadius: "2px",
            }}
          ></div>
        </h2>
        <Row className="justify-content-center">
          <CredoCard icon={<FaCheckSquare />} text="Qualité" />
          <CredoCard icon={<PiWavesBold />} text="Souplesse" />
          <CredoCard icon={<FaUserShield />} text="Confidentialité" />
        </Row>
      </Container>
    </div>
  );
};

export default Engagements;
