import { useState, useEffect } from "react";
import {
  FaPhoneSquareAlt,
  FaFileAlt,
  FaMapMarkedAlt,
  FaLaptopHouse,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { FaServer } from "react-icons/fa";
import "./MentionLegales.css";

const MentionLegales = () => {
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setAnimationComplete(true);
  }, []);

  const iconSize = 50;

  return (
    <>
      <div className="mention-hero  position-relative pt-3 ">
        <h1 className="mention-title fw-bold position-relative text-white text-md-start ">
          Mentions légales
          <span className="underline-desktop d-none d-md-block"></span>
          <span className="underline-mobile d-md-none d-block "></span>
        </h1>
      </div>

      <div className="mention-content container-fluid py-5 px-md-5 px-3">
        <div
          className="row content-row"
          style={{ width: "83%", margin: "auto" }}
        >
          <div className="col-md-6 pe-md-4 mb-5 mb-md-0">
            <div className="editor-box">
              <h2 className="section-title fw-bold mb-5 text-center text-md-start editor-color">
                L'EDITEUR
              </h2>

              <div className="mb-4 d-flex flex-md-row flex-column text-center text-md-start info-row">
                <div className="me-md-3 mb-3 mb-md-0 d-flex justify-content-center icon">
                  <FaLaptopHouse color="#21b7ceff" size={iconSize} />
                </div>
                <div>
                  <strong className="text-secondary info-text">
                    JM-CONTACTS SARL
                  </strong>
                </div>
              </div>

              <div className="mb-4 d-flex flex-md-row flex-column text-center text-md-start info-row">
                <div className="me-md-3 mb-3 mb-md-0 d-flex justify-content-center icon">
                  <FaMapMarkedAlt color="#21b7ceff" size={iconSize} />
                </div>
                <div>
                  <span className="text-secondary info-text">
                    <strong>Lot 054 B Ter Immeuble Nirina 29, Ambohibao</strong>
                  </span>
                </div>
              </div>

              <div className="mb-4 d-flex flex-md-row flex-column text-center text-md-start info-row">
                <div className="me-md-3 mb-3 mb-md-0 d-flex justify-content-center icon">
                  <FaPhoneSquareAlt color="#21b7ceff" size={iconSize} />
                </div>
                <div>
                  <span className="text-secondary info-text">
                    <strong>02 44 10 01 02 ou (+ 261) 32 05 369 00</strong>
                  </span>
                </div>
              </div>

              <div className="mb-4 d-flex flex-md-row flex-column text-center text-md-start info-row">
                <div className="me-md-3 mb-3 mb-md-0 d-flex justify-content-center icon">
                  <IoMdMail color="#21b7ceff" size={iconSize} />
                </div>
                <div>
                  <span className="text-secondary info-text">
                    <strong>j.morvan@jm-contacts.com</strong>
                  </span>
                </div>
              </div>

              <div className="mb-4 d-flex flex-md-row flex-column text-center text-md-start info-row">
                <div className="me-md-3 mb-3 mb-md-0 d-flex justify-content-center icon">
                  <FaFileAlt color="#21b7ceff" size={iconSize} />
                </div>
                <div>
                  <strong className="text-secondary info-text">
                    Numéros d'enregistrements administratifs et fiscaux:
                  </strong>
                  <div className="mt-2">
                    <div className="text-secondary info-text">
                      NIF : 5000 428 852
                    </div>
                    <div className="text-secondary info-text">
                      STAT : 46512 11 2000 0 10158
                    </div>
                    <div className="text-secondary info-text">
                      RCS : 2000B00101
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-6 ps-md-4">
            <div className="hebergeur-box bg-white p-4 h-100">
              <h2 className="section-title fw-bold mb-5 text-start text-md-start hebergeur-color">
                L'HEBERGEUR
              </h2>

              <div className="mb-4 d-flex flex-md-row flex-column text-center text-md-start info-row">
                <div className="me-md-3 mb-3 mb-md-0 d-flex justify-content-center icon">
                  <FaServer color="#ff8c00" size={iconSize} />
                </div>
                <div>
                  <strong className="text-secondary info-text">
                    o2switch-PowerBoost-v3
                  </strong>
                </div>
              </div>

              <div className="mb-4 d-flex flex-md-row flex-column text-center text-md-start info-row">
                <div className="me-md-3 mb-3 mb-md-0 d-flex justify-content-center icon">
                  <FaMapMarkedAlt color="#ff8c00" size={iconSize} />
                </div>
                <div>
                  <span className="text-secondary info-text">
                    <strong>Chemin des Pardiaux 63000 Clermont-Ferrand</strong>
                  </span>
                </div>
              </div>

              <div className="mb-4 d-flex flex-md-row flex-column text-center text-md-start info-row">
                <div className="me-md-3 mb-3 mb-md-0 d-flex justify-content-center icon">
                  <FaPhoneSquareAlt color="#ff8c00" size={iconSize} />
                </div>
                <div>
                  <span className="text-secondary info-text">
                    <strong>0444446040</strong>
                  </span>
                </div>
              </div>

              <div className="mb-4 d-flex flex-md-row flex-column text-center text-md-start info-row">
                <div className="me-md-3 mb-3 mb-md-0 d-flex justify-content-center icon">
                  <IoMdMail color="#ff8c00" size={iconSize} />
                </div>
                <div>
                  <span className="text-secondary info-text">
                    <strong>support@o2switch.fr</strong>
                  </span>
                </div>
              </div>

              <div className="mb-4 d-flex flex-md-row flex-column text-center text-md-start info-row">
                <div className="me-md-3 mb-3 mb-md-0 d-flex justify-content-center icon">
                  <FaFileAlt color="#ff8c00" size={iconSize} />
                </div>
                <div>
                  <strong className="text-secondary info-text">
                    Numéros d'enregistrements administratifs et fiscaux:
                  </strong>
                  <div className="mt-2">
                    <div className="text-secondary info-text">
                      SIRET : 510 909 80700024
                    </div>
                    <div className="text-secondary info-text">
                      RCS : Clermont-Ferrand
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
