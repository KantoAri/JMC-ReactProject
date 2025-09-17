import { Link } from "react-router-dom";
import backgroundImg from "../../../assets/background.jpeg";
import { FaChevronCircleRight } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div>
      <div
        className="container-fluid  position-relative pt-3"
        style={{
          backgroundImage: `linear-gradient( #31a9ce85, #61d6faab), url(${backgroundImg})`,
          backgroundSize: "cover",
          height: "105vh",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          border: "0",
        }}
      >
        <div className="container">
          <div className="row py-5 my-5">
            <div className="col-md-5 text-left p-4 rounded text-white">
              <div style={{ paddingBottom: "20px" }}>
                <h1
                  className="display-2 fw-bold position-relative text-white"
                  style={{ paddingBottom: "15px" }}
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

              <p className="mb-4">
                Votre partenaire pour la sous-traitance de vos développements
                informatiques, Windev, Webdev et Windev Mobile
              </p>
              <p className="mb-5">
                Au service des SSII et éditeurs francophones
              </p>

              <button
                className="btn btn-lg px-5 py-3"
                style={{ backgroundColor: "#fa9805ff" }}
              >
                <FaChevronCircleRight className="me-2 text-white" />
                <Link
                  to="/contact"
                  className="text-decoration-none text-white"
                  style={{ fontSize: "1rem" }}
                >
                  Parlons De Votre Projet
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>{" "}
      <div>
        <h2>Qui sommes-nous ?</h2>
        <div>
          <div>
            JM-CONTACTS est une référence dans le domaine de la sous-traitance
            en développement informatique de gestion (Applicatif classique ou
            Web). Depuis sa création en janvier 2000 à Madagascar, JM Contacts
            s'est établie comme une société de référence dans le domaine du
            développement informatique, en particulier dans les technologies PC
            SOFT. Madagascar a un potentiel unique en tant que hub technologique
            pour les professionnels francophones. Notre implantation dans cette
            île dynamique nous permet de bénéficier d'un environnement riche en
            talents et favorable à l'innovation.
          </div>
          <div>
            <img src="" alt="" />
          </div>
          <p>
            Nous mettons à disposition de nos clients des collaborateurs dédiés
            : Chefs de projets, développeurs séniors et développeurs juniors.
            Ils sont le pilier de notre succès et capitalisent sur des années
            d'expérience et de passion pour le développement informatique de
            gestion. Avec une expertise éprouvée dans les technologies PCSoft
            (Windev, Windev Mobile et Webdev), JM-Contacts a su bâtir une
            réputation solide. La confiance que nos clients placent en nous est
            le fruit de notre engagement continu envers la qualité et notre
            capacité à fournir des solutions innovantes et adaptées à leurs
            besoins. En tant que partenaire fiable, JM Contacts reste dédié à
            l'excellence et à la satisfaction de ses clients. De plus, la
            sous-traitance à distance (offshore) apporte des avantages au
            fonctionnemen des SSII et des éditeurs de progiciels, en passant de
            la culture orale à la culture de l'écrit, ce qui est très bénéfique
            en termes de traçabilité et de qualité. *Les marques "PC SOFT" et
            "WINDEV" sont des marques déposées de la société PC SOFT.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
