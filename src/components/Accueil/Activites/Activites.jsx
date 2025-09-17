import { Link } from "react-router-dom";
import { FaCubes } from "react-icons/fa";
import CardUI from "./CardUI";
import "./Activites.css";
const Activites = () => {
  const activitiesData = [
    {
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Le développement informatique spécifique",
      description:
        "Nous proposons des services de sous-traitance pour les professionnels de l'informatique et les SSII françaises, pour leur apporter la flexibilité nécessaire à la conduite de leurs projets.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Les Éditeurs de logiciels et progiciels",
      description:
        "Nous soutenons également les éditeurs de logiciels et progiciels, dans le cadre de leurs chantiers de développements, de migration ou la maintenance évolutive.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
      title: "Le Développement Web",
      description:
        "Nous intervenons aussi sur les développements de gestion en environnement Web, mais aussi sur l'intégration, l'optimisation et le référencement de sites Web vitrines, ou e-commerce.",
    },
  ];

  return (
    <>
      <div className="container-fluid wave-bg">
        <div className="container py-5">
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
              className=" text-light mb-5"
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
              <div
                className="card border-0 shadow-sm"
                style={{
                  backgroundColor: "white",
                  borderRadius: "15px",
                  padding: "30px",
                }}
              >
                <p
                  className="text-muted mb-0"
                  style={{
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                    textAlign: "justify",
                  }}
                >
                  Nous proposons des modèles de collaboration flexibles,
                  travaillant au forfait ou en régie délocalisée, à des tarifs
                  très compétitifs. Notre grande expérience en développement de
                  gestion nous permet de connaître et maîtriser beaucoup de
                  métiers et de périmètres fonctionnels. De plus, nous sommes
                  systématiquement à jour de toutes les versions de nos
                  environnements de développement, en particulier de{" "}
                  <strong>Windev</strong>, <strong>Webdev</strong> et{" "}
                  <strong>Windev Mobile</strong>.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <h3>2- Valeurs</h3>
          <p>
            Nous combinons expérience, passion et innovation pour offrir des
            services informatiques qui répondent précisément aux besoins de nos
            clients. Nous croyons que ces trois éléments sont essentiels pour
            offrir les meilleurs services possibles à nos clients{" "}
          </p>
        </div>
        <div>
          <h2>Avez-vous une idée de projet ?</h2>
          <p>Nos experts sont là pour vous aider</p>
          <button>
            <Link to="/contact">Contactez-nous</Link>
          </button>
        </div>
      </div>
    </>
  );
};

export default Activites;
