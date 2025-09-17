import React from "react";
import logoImg from "../assets/logoreact.png";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ height: "100px" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logoImg}
            alt="jmc logo"
            height="90"
            className="me-3"
            style={{ marginLeft: "-100px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item mx-2">
              <Link className="nav-link" to="/" style={{ color: "black" }}>
                <strong>ACCUEIL</strong>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link"
                to="/expertises"
                style={{ color: "black" }}
              >
                <strong>EXPERTISES</strong>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link"
                to="/offres-de-services"
                style={{ color: "black" }}
              >
                <strong>OFFRES DE SERVICES</strong>
              </Link>
            </li>
            <li className="nav-item mx-2">
              <Link
                className="nav-link"
                to="/contact"
                style={{ color: "black" }}
              >
                <strong>CONTACT</strong>
              </Link>
            </li>
          </ul>
          <a
            href="https://www.linkedin.com/in/jeanmorvan"
            target="_blank"
            rel="noopener noreferrer"
            className="ms-auto"
          >
            <img src={linkedin} alt="linkedin logo" height="50" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
