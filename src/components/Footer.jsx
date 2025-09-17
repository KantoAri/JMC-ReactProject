import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.png";
import { FaPhoneAlt } from "react-icons/fa";
import { IoMail } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

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
                <FaLocationDot className="text-info me-2 fs-5" />
                <span>
                  Immeuble NIRINA 29 - 1er étage Ambohibao - ANTANANARIVO - 105
                  - BP 11034 Poste DIGUES - MADAGASCAR
                </span>
              </div>
              <div className="mb-3">
                <FaPhoneAlt className="text-info me-2 fs-5" />
                <span>(+261) 32 05 369 00</span>
              </div>
              <div className="mb-3">
                <IoMail className="text-info me-2 fs-5" />
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
              >
                <img
                  src={linkedin}
                  alt="Logo LinkedIn"
                  width="50"
                  height="50"
                />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-light my-4" />

        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0">Copyright © 2025 JM-Contacts</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
