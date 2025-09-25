import { Link } from "react-router-dom";
import { FaCubes } from "react-icons/fa";
import CardUI from "./CardUI";
import ValueCard from "./ValueCard";
import devSpec from "../../../assets/dev-specifique.webp";
import devWeb from "../../../assets/web-dev.webp";
import editeur from "../../../assets/editeur.webp";
import exp from "../../../assets/expericence-150x150.png";
import passion from "../../../assets/passion-150x150.png";
import wavy from "../../../assets/wavy.png";
import innovation from "../../../assets/inovant-150x150.png";
import backImg from "../../../assets/header-contact-scaled-1-2048x1366.webp";
import { FaChevronCircleRight } from "react-icons/fa";
import "./Activites.css";
import "./ValueCard.css";

const Activites = () => {
  const activitiesData = [
    {
      image: devSpec,
      title: "Le développement informatique spécifique",
      description:
        "Nous proposons des services de sous-traitance pour les professionnels de l'informatique et les SSII françaises, pour leur apporter la flexibilité nécessaire à la conduite de leurs projets.",
    },
    {
      image: editeur,
      title: "Les Éditeurs de logiciels et progiciels",
      description:
        "Nous soutenons également les éditeurs de logiciels et progiciels, dans le cadre de leurs chantiers de développements, de migration ou la maintenance évolutive.",
    },
    {
      image: devWeb,
      title: "Le Développement Web",
      description:
        "Nous intervenons aussi sur les développements de gestion en environnement Web, mais aussi sur l'intégration, l'optimisation et le référencement de sites Web vitrines, ou e-commerce.",
    },
  ];

  const valuesData = [
    {
      icon: <img src={exp} alt="Expérience" />,
      title: "Expérience",
      description:
        "Avec plus de 20 années d'expérience dans le domaine de la sous-traitance en développement informatique, nous avons acquis une connaissance approfondie des défis auxquels les professionnels de ce domaine sont confrontés et des solutions qui peuvent les aider à les surmonter.",
      color: "#30cbfaff",
      height: "100px",
      width: "100px",
    },
    {
      icon: <img src={passion} alt="Passion" />,
      title: "Passion",
      description:
        "Nous aimons ce que nous faisons. Cette passion se reflète dans la qualité de notre travail et notre engagement envers la satisfaction de nos clients.",
      color: "#fd7e14",
      height: "100px",
      width: "100px",
    },
    {
      icon: <img src={innovation} alt="Innovation" />,
      title: "Innovation",
      description:
        "Nous restons constamment à l'affût des nouvelles versions de Windev, Webdev et Windev Mobile. Chaque année, nous adoptons les dernières fonctionnalités dès leur disponibilité.",
      color: "#30cbfaff",
      height: "100px",
      width: "100px",
    },
  ];

  return (
    <>
      <img
        src={wavy}
        alt=""
        style={{
          width: "100%",
          height: "auto",
        }}
      />
      <div className="wave-bg">
        <div className="container wave-bg">
          <div
            className="container"
            style={{ paddingBottom: "7rem", paddingTop: "5rem" }}
          >
            <div className="text-center mb-4">
              <h2
                className="display-5 mb-3"
                style={{
                  color: "#ffffffff",
                  fontWeight: "bold",
                  position: "relative",
                }}
              >
                NOS ACTIVITÉS
                <div
                  style={{
                    width: "120px",
                    height: "5px",
                    backgroundColor: "#fd7e14",
                    margin: "15px auto",
                    borderRadius: "2px",
                  }}
                ></div>
              </h2>
              <p
                className="text-light mb-5"
                style={{ maxWidth: "800px", margin: "0 auto" }}
              >
                <strong>JM-CONTACTS</strong> propose également des services de
                création de sites internet et de référencement
              </p>
            </div>
            <div className="mb-5">
              <div className="row align-items-center mb-4">
                <div className="col-md-2"></div>
                <div>
                  <h3
                    className="mb-3"
                    style={{
                      color: "#30cbfaff",
                      fontWeight: "600",
                      fontSize: "2rem",
                    }}
                  >
                    <FaCubes className="me-2" />
                    1- Missions
                  </h3>
                  <p
                    className="text-light"
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.7",
                    }}
                  >
                    Chez <strong>JM-CONTACTS</strong>, notre mission principale
                    est de fournir des collaborateurs qui répondent précisément
                    aux besoins de nos clients. Nos domaines d'interventions :
                  </p>
                </div>
              </div>

              <div className="row mt-5">
                {activitiesData.map((activity, index) => (
                  <CardUI
                    key={index}
                    image={activity.image}
                    title={activity.title}
                    description={activity.description}
                  />
                ))}
              </div>

              <div className="mt-5">
                <div>
                  <p
                    className="text-light mb-0"
                    style={{
                      fontSize: "1rem",
                      lineHeight: "1.8",
                      textAlign: "justify",
                    }}
                  >
                    Nous proposons des modèles de collaboration flexibles,
                    travaillant au forfait ou en régie délocalisée, à des tarifs
                    très compétitifs. Notre grande expérience en développement
                    de gestion nous permet de connaître et maîtriser beaucoup de
                    métiers et de périmètres fonctionnels. De plus, nous sommes
                    systématiquement à jour de toutes les versions de nos
                    environnements de développement, en particulier de{" "}
                    <strong>Windev</strong>, <strong>Webdev</strong> et{" "}
                    <strong>Windev Mobile</strong>.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h3
                className="mb-3"
                style={{
                  color: "#30cbfaff",
                  fontWeight: "600",
                  fontSize: "2rem",
                }}
              >
                <FaCubes className="me-2" /> 2 - Valeurs
              </h3>
              <p
                className="text-light"
                style={{
                  fontSize: "1rem",
                  lineHeight: "1.7",
                }}
              >
                Nous combinons expérience, passion et innovation pour offrir des
                services informatiques qui répondent précisément aux besoins de
                nos clients. Nous croyons que ces trois éléments sont essentiels
                pour offrir les meilleurs services possibles à nos clients{" "}
              </p>
              <div
                className="values-grid-container mt-4  "
                style={{ width: "90%", margin: "0 auto" }}
              >
                {valuesData.map((value, index) => (
                  <ValueCard
                    key={index}
                    icon={value.icon}
                    title={value.title}
                    description={value.description}
                    height={value.height}
                    width={value.width}
                  />
                ))}
              </div>
            </div>{" "}
          </div>
        </div>
        <div
          className="py-5 position-relative"
          style={{
            width: "100%",
            backgroundImage: `url(${backImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "100px ",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.6)",
            }}
          ></div>

          <div className="position-relative" style={{ zIndex: 1 }}>
            <h2 className="titleh2 text-left text-light mb-5 position-relative">
              Avez-vous une idée de projet ?
              <span
                style={{
                  position: "absolute",
                  bottom: "-20px",
                  left: 0,
                  width: "9rem",
                  height: "5px",
                  backgroundColor: "#fa9805ff",
                }}
              ></span>
            </h2>
            <p className="text-light mb-4">
              Nos experts sont là pour vous aider
            </p>
            <button className="btn btn-primary btn-lg p-3 btn-animated">
              <FaChevronCircleRight className="me-2 text-white" />
              <Link
                to="/contact"
                style={{
                  color: "white",
                  textDecoration: "none",
                  fontSize: "1.1rem",
                }}
              >
                Contactez-nous
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Activites;
