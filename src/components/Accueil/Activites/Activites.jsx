import { Link } from "react-router-dom";
import CardUI from "./CardUI";

const Activites = () => {
  return (
    <div>
      {" "}
      <h2>NOS ACTIVITES</h2>
      <p>
        JM-CONTACTS propose également des services de création de sites internet
        et de référencement
      </p>
      <div>
        <h3>1- Missions</h3>
        <p>
          Chez <strong>JM-CONTACTS,</strong> notre mission principale est de
          fournir des collaborateurs qui répondent précisément aux besoins de
          nos clients. Nos domaines d'interventions:
        </p>

        <div>
          <CardUI
            image={"Ceci est l'image"}
            description={"Ceci est la description"}
          />
          <CardUI
            image={"Ceci est l'image"}
            description={"Ceci est la description"}
          />
          <CardUI
            image={"Ceci est l'image"}
            description={"Ceci est la description"}
          />
        </div>
        <p>
          Nous proposons des modèles de collaboration flexibles, travaillant au
          forfait ou en régie délocalisée, à des tarifs très compétitifs. Notre
          frandes exprérience en développement de gestion nous permet de
          connaitre et maîtriser beaucoup de métiers et de périmètres
          fonctionnels. De plus , nous sommes systématiquement à jour de toutes
          les versions nos environnements de développement, en particulier de
          Windev, Webdev et Windev Mobile.
        </p>
      </div>
      <div>
        <h3>2- Valeurs</h3>
        <p>
          Nous combinons expérience, passion et innovation pour offrir des
          services informatiques qui répondent précisément aux besoins de nos
          clients. Nous croyons que ces trois éléments sont essentiels pour
          offrir les meilleurs services possibles à nos clients{" "}
        </p>
        <div>
          <CardUI />
          <CardUI />
          <CardUI />
        </div>
      </div>
      <div>
        <h2>Avez-vous une idée de projet ?</h2>
        <p>Nos experts sont là pour vous aider</p>
        <button>
          <Link to="/contact">Contactez-nous</Link>
        </button>
      </div>
    </div>
  );
};
export default Activites;
