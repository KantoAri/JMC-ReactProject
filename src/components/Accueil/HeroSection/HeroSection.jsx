import { useState, useEffect } from "react";
import "../acceuil.css";
import "./HeroSection.css";
import backgroundImg from "../../../assets/computer-jm-contacts.jpg";
import { Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";

const HeroSection = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setAnimationComplete(true);
  }, []);

  return (
    <div>
      <div
        className="container-fluid hello position-relative pt-3"
        style={{
          backgroundImage: ` linear-gradient(to right, rgba(52, 148, 206, 0.52), rgba(46, 206, 255, 0.5)), url(${backgroundImg})`,
          backgroundSize: "100% 110%",
          minHeight: "100vh",
          backgroundPosition: animationComplete ? "bottom" : "top",
          backgroundRepeat: "no-repeat",
          transition: "background-position 2s ease-in-out",
          animation: animationComplete ? "jump 1s ease-in-out" : "none",
        }}
      >
        <div className="container">
          <div className="row py-md-5 py-3 my-md-5 my-2s">
            <div
              className="col-lg-6 col-md-8 col-12 text-left p-md-4 p-3 rounded text-white"
              style={{
                marginLeft: "4rem",
                "@media (maxWidth: 768px)": {
                  marginLeft: "0",
                },
              }}
            >
              <div className="mb-3 mb-md-5">
                <h1
                  className="fw-bold position-relative text-white"
                  style={{
                    paddingBottom: "20px",
                    fontSize: "clamp(3.2rem, 8vw, 5rem)",
                    marginTop: "clamp(20px, 5vw, 50px)",
                  }}
                >
                  JM-Contacts{" "}
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      height: "5px",
                      backgroundColor: "#ffffffff",
                      width: "clamp(4rem, 20vw, 8rem)",
                    }}
                  ></span>
                </h1>
              </div>
              <p className="mb-3 mb-md-4 text-us">
                Votre partenaire pour la sous-traitance de vos développements
                informatiques, Windev, Webdev et Windev Mobile
              </p>
              <p className="mb-4 mb-md-5 text-us">
                Au service des SSII et éditeurs francophones
              </p>
              <button
                className="btn btn-animated2 btn-lg px-md-5 px-3  py-md-3 w-60 w-md-auto"
                style={{
                  backgroundColor: "#fa9805ff",
                }}
              >
                <FaChevronCircleRight className="me-2 text-white" />
                <Link
                  to="/contact"
                  className="text-decoration-none text-white"
                  style={{ fontSize: "clamp(1rem, 2vw, 1rem)" }}
                >
                  Parlons De Votre Projet
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
