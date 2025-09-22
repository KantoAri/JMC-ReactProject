import { useState, useEffect } from "react";
import "../acceuil.css";

import "./HeroSection.css";
import backgroundImg from "../../../assets/computer-jm-contacts.webp";
import { Link } from "react-router-dom";
import { FaChevronCircleRight } from "react-icons/fa";

const HeroSection = () => {


  return (
    <div>
      <div
        className="container-fluid position-relative pt-3"
        style={{
          backgroundImage: ` linear-gradient(to right, rgba(52, 148, 206, 0.52), rgba(46, 206, 255, 0.5)), url(${backgroundImg})`,
          backgroundSize: "100% 120%",
          minHeight: "100vh",
          backgroundPosition: "top",
          backgroundRepeat: "no-repeat",
          border: "0",
          transition: "all 1.2s cubic-bezier(0.34, 1.56, 0.64, 1)",
        }}
      >
        <div className="container">
          <div className="row py-md-5 py-3 my-md-5 my-2">
            <div
              className="col-lg-6 col-md-8 col-12 text-left p-md-4 p-3 rounded text-white ms-5"
              style={{ marginLeft: "4rem" }}
            >
              <div className="mb-3 mb-md-5">
                <h1
                  className="fw-bold position-relative text-white"
                  style={{
                    paddingBottom: "20px",
                    marginTop: "50px",
                    fontSize: "5rem",
                  }}
                >
                  JM-Contacts{" "}
                  <span
                    style={{
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: "8rem",
                      height: "5px",
                      backgroundColor: "#ffffffff",
                    }}
                  ></span>
                </h1>
              </div>

              <p className="mb-3 mb-md-4">
                Votre partenaire pour la sous-traitance de vos développements
                informatiques, Windev, Webdev et Windev Mobile
              </p>
              <p className="mb-4 mb-md-5">
                Au service des SSII et éditeurs francophones
              </p>
              <button
                className="btn btn-lg px-md-5 px-3 py-2 py-md-3 w-60 w-md-auto"
                style={{ backgroundColor: "#fa9805ff" }}
              >
                <FaChevronCircleRight className="me-2 text-white" />
                <Link
                  to="/contact"
                  className="text-decoration-none text-white"
                  style={{ fontSize: "clamp(0.9rem, 2vw, 1rem)" }}
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
