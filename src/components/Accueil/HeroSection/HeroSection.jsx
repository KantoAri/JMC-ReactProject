import "../acceuil.css";
import img from "../../../assets/topng.png";
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
          backgroundImage: `linear-gradient( #31a9ce85, #61d6faab), url(${backgroundImg})`,
          backgroundSize: "cover",
          minHeight: "100vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "0",
        }}
      >
        <div className="container">
          <div className="row py-md-5 py-3 my-md-5 my-2">
            <div className="col-lg-6 col-md-8 col-12 text-left p-md-4 p-3 rounded text-white">
              <div className="mb-3 mb-md-5">
                <h1
                  className="display-2 display-md-3 display-lg-2 fw-bold position-relative text-white"
                  style={{ paddingBottom: "20px" }}
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

      <div className="container py-4 py-md-5">
        <div className="row">
          <div className="col-lg-20  col-12 mb-4">
            <h2 className="titleh2 text-left mb-4 position-relative">
              Qui sommes-nous ?
              <span
                style={{
                  position: "absolute",
                  bottom: "-10px",
                  left: 0,
                  width: "9rem",
                  height: "5px",
                  backgroundColor: "#fa9805ff",
                }}
              ></span>
            </h2>

            <div
              className="text-us flex-column flex-md-row d-md-flex  "
              style={{ height: "17rem" }}
            >
              <div className=" me-md-4 mb-md-0">
                <p>
                  <strong style={{ color: "#333", fontWeight: "700" }}>
                    JM-CONTACTS
                  </strong>{" "}
                  est une référence dans le domaine de la sous-traitance en
                  développement informatique de gestion (Applicatif classique ou
                  Web). <br /> Depuis sa création en janvier 2000 à Madagascar,
                  JM Contacts s'est établie comme une société de référence dans
                  le domaine du développement informatique, en particulier dans
                  les technologies{" "}
                  <a
                    href="https://www.pcsoft.fr"
                    style={{ color: "#4da6ff", textDecoration: "none" }}
                    onMouseOver={(e) => {
                      e.target.style.color = "#0066cc";
                      e.target.style.textDecoration = "underline";
                    }}
                    onMouseOut={(e) => {
                      e.target.style.color = "#4da6ff";
                      e.target.style.textDecoration = "none";
                    }}
                  >
                    PC SOFT.
                  </a>
                  <br />
                  Madagascar a un potentiel unique en tant que hub technologique
                  pour les professionnels francophones. Notre implantation dans
                  cette île dynamique nous permet de bénéficier d'un
                  environnement riche en talents et favorable à l'innovation.
                </p>
              </div>
              <div className=" pl-6 d-none d-md-block">
                <img src={img} alt="" height="250rem" width="380rem" />
              </div>
            </div>
            <div className="text-us ">
              <p>
                Nous mettons à disposition de nos clients des collaborateurs
                dédiés : Chefs de projets, développeurs séniors et développeurs
                juniors. Ils sont le pilier de notre succès et capitalisent sur
                des années d'expérience et de passion pour le développement
                informatique de gestion. Avec une expertise éprouvée dans les
                technologies PCSoft (Windev, Windev Mobile et Webdev),
                JM-Contacts a su bâtir une réputation solide. La confiance que
                nos clients placent en nous est le fruit de notre engagement
                continu envers la qualité et notre capacité à fournir des
                solutions innovantes et adaptées à leurs besoins. En tant que
                partenaire fiable, JM Contacts reste dédié à l'excellence et à
                la satisfaction de ses clients. De plus, la sous-traitance à
                distance (offshore) apporte des avantages au fonctionnement des
                SSII et des éditeurs de progiciels, en passant de la culture
                orale à la culture de l'écrit, ce qui est très bénéfique en
                termes de traçabilité et de qualité.
              </p>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
