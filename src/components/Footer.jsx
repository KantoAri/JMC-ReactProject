import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-light py-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-md-4 mb-4">
            <h5
              className="mb-3 position-relative d-inline-block"
              style={{ paddingBottom: "15px", fontSize: "1.15rem" }}
            >
              <strong>Nous contacter</strong>
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "4rem",
                  height: "5px",
                  backgroundColor: "#ffc107",
                }}
              ></span>
            </h5>

            <div className="mt-3">
              <div className="mb-3">
                <i className="fas fa-map-marker-alt text-info me-2"></i>
                <span>
                  Immeuble NIRINA 29 - 1er étage
                  <br />
                  Ambohibao - ANTANANARIVO - 105 -<br />
                  BP 11034 Poste DIGUES - MADAGASCAR
                </span>
              </div>
              <div className="mb-3">
                <i className="fas fa-phone text-info me-2"></i>
                <span>(+261) 32 05 369 00</span>
              </div>
              <div className="mb-3">
                <i className="fas fa-envelope text-info me-2"></i>
                <span>j.morvan@jm-contacts.com</span>
              </div>
            </div>
          </div>

          <div className="col-12 col-md-4 mb-4">
            <h5
              className="mb-3 position-relative d-inline-block"
              style={{ paddingBottom: "15px", fontSize: "1.15rem" }}
            >
              <strong>Autres informations </strong>
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "4rem",
                  height: "5px",
                  backgroundColor: "#ffc107",
                }}
              ></span>
            </h5>
            <div className="mt-3">
              <Link
                to="/mentions-legales"
                className="text-light text-decoration-none"
              >
                Mentions légales
              </Link>
            </div>
          </div>

          <div className="col-12 col-md-3 mb-4">
            <h5
              className="mb-3 position-relative d-inline-block"
              style={{ paddingBottom: "15px", fontSize: "1.15rem" }}
            >
              <strong>Réseau social</strong>
              <span
                style={{
                  position: "absolute",
                  bottom: 0,
                  left: 0,
                  width: "4rem",
                  height: "5px",
                  backgroundColor: "#ffc107",
                }}
              ></span>
            </h5>
            <div className="mt-3">
              <a
                href="https://www.linkedin.com/in/jeanmorvan"
                target="_blank"
                rel="noopener noreferrer"
                className="d-inline-block p-2 bg-info rounded"
              >
                <img
                  src={linkedin}
                  alt="Logo LinkedIn"
                  width="40"
                  height="40"
                />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />

        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0 text-muted">Copyright © 2025 JM-Contacts</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
