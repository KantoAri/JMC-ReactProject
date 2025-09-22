import React, { useState } from "react";
import logoImg from "../../assets/logoreact.png";
import linkedin from "../../assets/linkedin.png";
import { Link } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light position-absolute top-0 w-100"
      style={{ backgroundColor: "#c6eef365", zIndex: "9999" }}
    >
      <div className="container">
        <Link className="navbar-brand" to="/">
          <img
            src={logoImg}
            alt="jmc logo"
            height="70"
            className="d-inline-block align-top"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={!isNavCollapsed ? true : false}
          aria-label="Toggle navigation"
          onClick={handleNavCollapse}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className={`navbar-collapse sidebar-menu ${
            isNavCollapsed ? "collapsed" : "expanded"
          }`}
          id="navbarNav"
        >
          {/* Close button for mobile sidebar */}
          <button
            className="btn-close d-lg-none position-absolute top-0 end-0 mt-3 me-3"
            onClick={handleNavCollapse}
            aria-label="Close menu"
          ></button>

          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item mx-md-2">
              <Link
                className="nav-link"
                to="/"
                style={{ color: "black" }}
                onClick={handleNavCollapse}
              >
                <strong>ACCUEIL</strong>
              </Link>
            </li>
            <li className="nav-item mx-md-2">
              <Link
                className="nav-link"
                to="/expertises"
                style={{ color: "black" }}
                onClick={handleNavCollapse}
              >
                <strong>EXPERTISES</strong>
              </Link>
            </li>
            <li className="nav-item mx-md-2">
              <Link
                className="nav-link"
                to="/offres-de-services"
                style={{ color: "black" }}
                onClick={handleNavCollapse}
              >
                <strong>OFFRES DE SERVICES</strong>
              </Link>
            </li>
            <li className="nav-item mx-md-2">
              <Link
                className="nav-link"
                to="/contact"
                style={{ color: "black" }}
                onClick={handleNavCollapse}
              >
                <strong>CONTACT</strong>
              </Link>
            </li>
          </ul>
          <div className="text-center mt-3 mt-lg-0">
            <a
              href="https://www.linkedin.com/in/jeanmorvan"
              target="_blank"
              rel="noopener noreferrer"
              className="d-inline-block"
            >
              <img src={linkedin} alt="linkedin logo" height="40" />
            </a>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 991.98px) {
          .sidebar-menu {
            position: fixed;
            top: 0;
            right: -250px;
            width: 250px;
            height: 100vh;
            background-color: #a3b0b1ff;
            transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
            padding: 20px;
            overflow-y: auto;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-top: 80px;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0);
            opacity: 0;
            visibility: hidden;
          }

          .sidebar-menu.expanded {
            right: 0;
            opacity: 1;
            visibility: visible;
            box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
          }

          .navbar-nav {
            width: 100%;
          }

          .nav-item {
            margin: 10px 0;
            transform: translateX(20px);
            opacity: 0;
            transition: all 0.3s ease;
            transition-delay: 0.1s;
          }

          .sidebar-menu.expanded .nav-item {
            transform: translateX(0);
            opacity: 1;
          }

          .sidebar-menu.expanded .nav-item:nth-child(2) {
            transition-delay: 0.15s;
          }

          .sidebar-menu.expanded .nav-item:nth-child(3) {
            transition-delay: 0.2s;
          }

          .sidebar-menu.expanded .nav-item:nth-child(4) {
            transition-delay: 0.25s;
          }

          .btn-close {
            opacity: 0.8;
            transition: opacity 0.2s ease;
          }

          .btn-close:hover {
            opacity: 1;
          }
        }

        @media (min-width: 992px) {
          .sidebar-menu {
            display: flex !important;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
