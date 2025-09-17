import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div>
      <div>
        <h1>JM-Contacts</h1>

        <p>
          Votre partenaire pour la sous-traitance de vos développements
          informatiques, <br /> Windev, Webdev et Windev Mobile <br />
          <p>Au service des SSII et éditeurs francophones</p>
        </p>

        <button>
          <Link to="/contact">Parlons De Votre Projet</Link>
        </button>
      </div>
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
        </div>

        <p>
          Nous mettons à disposition de nos clients des collaborateurs dédiés :
          Chefs de projets, développeurs séniors et développeurs juniors. Ils
          sont le pilier de notre succès et capitalisent sur des années
          d'expérience et de passion pour le développement informatique de
          gestion. Avec une expertise éprouvée dans les technologies PCSoft
          (Windev, Windev Mobile et Webdev), JM-Contacts a su bâtir une
          réputation solide. La confiance que nos clients placent en nous est le
          fruit de notre engagement continu envers la qualité et notre capacité
          à fournir des solutions innovantes et adaptées à leurs besoins. En
          tant que partenaire fiable, JM Contacts reste dédié à l'excellence et
          à la satisfaction de ses clients. De plus, la sous-traitance à
          distance (offshore) apporte des avantages au fonctionnemen des SSII et
          des éditeurs de progiciels, en passant de la culture orale à la
          culture de l'écrit, ce qui est très bénéfique en termes de traçabilité
          et de qualité. *Les marques "PC SOFT" et "WINDEV" sont des marques
          déposées de la société PC SOFT.
        </p>
      </div>
    </div>
  );
};
export default HeroSection;
