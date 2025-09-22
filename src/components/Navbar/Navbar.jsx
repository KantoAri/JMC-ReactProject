import React, { useState, useEffect } from "react";
import logoImg from "../../assets/logoreact.png";
import linkedin from "../../assets/linkedin.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth < 992); // Bootstrap lg breakpoint
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    // Initialize on mount
    handleResize();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Determine navbar position style based on screen size
  const navbarPositionStyle = isMobile ? "fixed" : "absolute";

  // Determine navbar background color based on screen size and scroll position
  const navbarBackgroundColor = isMobile && scrolled ? "#c6eef3" : "#c6eef365";

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light top-0 w-100`}
      style={{
        backgroundColor: navbarBackgroundColor,
        zIndex: "9999",
        position: navbarPositionStyle,
        transition: "background-color 0.3s ease",
      }}
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
    </nav>
  );
};

export default Navbar;
