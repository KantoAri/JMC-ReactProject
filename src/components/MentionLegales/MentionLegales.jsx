import backgroundImg from "../../assets/mention-legale-1024x682.webp";
import { useState, useEffect } from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaFileAlt } from "react-icons/fa";
import { FaMapMarkedAlt } from "react-icons/fa";
import { BsMenuButtonWide } from "react-icons/bs";
import { FaLaptopHouse } from "react-icons/fa";

const MentionLegales = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setAnimationComplete(true);
  }, []);

  const iconSize = 50;
  const editeurColor = "#61d8ebff";
  const hebergeurColor = "#ff8c00";

  return (
    <>
      <div
        className="container-fluid hello position-relative pt-3"
        style={{
          backgroundImage: ` linear-gradient(to right, rgba(52, 148, 206, 0.52), rgba(46, 206, 255, 0.5)), url(${backgroundImg})`,
          backgroundSize: "100% 110%",
          minHeight: "60vh",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          className="fw-bold position-relative text-white"
          style={{
            paddingBottom: "20px",
            fontSize: "5rem",
            fontSize: "clamp(3.2rem, 8vw, 4rem)",
            marginTop: "clamp(10rem, 5vw, 20rem)",
            marginLeft: "12rem",
          }}
        >
          Mentions légales{" "}
          <span
            style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              width: "8rem",
              height: "5px",
              backgroundColor: "#ffffffff",
              width: "clamp(4rem, 20vw, 8rem)",
            }}
          ></span>
        </h1>
      </div>
      <div
        className="container-fluid py-5"
        style={{
          backgroundColor: "#f8f9fa",
          borderTop: "15px solid #0084ffff",
          borderBottom: "15px solid #0084ffff",
          padding: "0 12rem",
        }}
      >
        <div className="row">
          <div className="col-md-6 pe-md-4">
            <div className="bg-white p-4 h-100 border-end border-primary border-4">
              <h2
                className=" fw-bold mb-5"
                style={{ fontSize: "3rem", color: editeurColor }}
              >
                L'EDITEUR
              </h2>

              <div className="mb-4 d-flex align-items-start">
                <div className="me-3">
                  <BsMenuButtonWide color={editeurColor} size={iconSize} />
                </div>
                <div>
                  <strong className="text-secondary">JM-CONTACTS SARL</strong>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <div className="me-3">
                  <FaMapMarkedAlt color={editeurColor} size={iconSize} />
                </div>
                <div>
                  <span className="text-secondary">
                    <strong>Lot 054 B Ter Immeuble Nirina 29, Ambohibao</strong>
                  </span>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <div className="me-3">
                  <FaPhoneSquareAlt color={editeurColor} size={iconSize} />
                </div>
                <div>
                  <span className="text-secondary">
                    <strong>02 44 10 01 02 ou (+ 261) 32 05 369 00</strong>
                  </span>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <div className="me-3">
                  <IoMdMail color={editeurColor} size={iconSize} />
                </div>
                <div>
                  <span className="text-secondary">
                    <strong>j.morvan@jm-contacts.com</strong>
                  </span>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <div className="me-3">
                  <FaFileAlt color={editeurColor} size={iconSize} />
                </div>
                <div>
                  <div>
                    <strong className="text-secondary">
                      Numéros d'enregistrements administratifs et fiscaux:
                    </strong>
                    <div className="mt-2">
                      <div className="text-secondary">NIF : 5000 428 852</div>
                      <div className="text-secondary">
                        STAT : 46512 11 2000 0 10158
                      </div>
                      <div className="text-secondary">RCS : 2000B00101</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 ps-md-4">
            <div className="bg-white p-4 h-100">
              <h2
                className="fw-bold mb-5"
                style={{ fontSize: "3rem", color: hebergeurColor }}
              >
                L'HEBERGEUR
              </h2>

              <div className="mb-4 d-flex align-items-start">
                <div className="me-3">
                  <FaLaptopHouse color={hebergeurColor} size={iconSize} />
                </div>
                <div>
                  <strong className="text-secondary">
                    o2switch-PowerBoost-v3
                  </strong>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <div className="me-3">
                  <FaMapMarkedAlt color={hebergeurColor} size={iconSize} />
                </div>
                <div>
                  <span className="text-secondary">
                    <strong>Chemin des Pardiaux 63000 Clermont-Ferrand</strong>
                  </span>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <div className="me-3">
                  <FaPhoneSquareAlt color={hebergeurColor} size={iconSize} />
                </div>
                <div>
                  <span className="text-secondary">
                    <strong>0444446040</strong>
                  </span>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <div className="me-3">
                  <IoMdMail color={hebergeurColor} size={iconSize} />
                </div>
                <div>
                  <span className="text-secondary">
                    <strong>support@o2switch.fr</strong>
                  </span>
                </div>
              </div>

              <div className="mb-4 d-flex align-items-start">
                <div className="me-3">
                  <FaFileAlt color={hebergeurColor} size={iconSize} />
                </div>
                <div>
                  <div>
                    <strong className="text-secondary">
                      Numéros d'enregistrements administratifs et fiscaux:
                    </strong>
                    <div className="mt-2">
                      <div className="text-secondary">
                        SIRET : 510 909 80700024
                      </div>
                      <div className="text-secondary">
                        RCS : Clermont-Ferrand
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MentionLegales;
