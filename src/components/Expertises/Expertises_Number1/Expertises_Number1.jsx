import React from 'react';
import { Link } from 'react-router-dom';
import './Expertises_Number1.css';
import fond_expertise from '../../../assets/Fond_expertise.png';

const ExpertisesNumber1 = () => {
  return (
    <section
      className="expertises-section"
      style={{ backgroundImage: `url(${fond_expertise})` }}
    >
      {/* Overlay en frère direct du container */}
      <div className="expertises-overlay"></div>

      {/* Contenu au-dessus de l’overlay */}
      <div className="expertises-container container">
        <h2 className="expertises-title text-center text-md-start">
          <span className="exp-highlight">Ex</span>pertises
        </h2>

        <div className="expertises-description text-center text-md-start">
          <p>
            JM-Contacts excelle dans deux domaines essentiels : la maîtrise des<br />
            langages de développement de <strong>PC SOFT</strong> tels que <strong>WinDev</strong>, <strong>WinDev Mobile</strong><br />
            et <strong>WebDev</strong>, ainsi que l’expertise en <strong>développement Web</strong><br />
            (<strong>frameworks PHP</strong> et <strong>intégration CMS</strong>).
          </p>

          <p>
            Ces compétences combinées permettent à <strong>JM-Contacts</strong> de créer des<br />
            solutions logicielles robustes et performantes pour ses clients et de<br />
            les rendre visibles sur le Web.
          </p>
        </div>

        <div className="expertises-button-container text-center text-md-start">
          <Link to="/contact" className="expertises-button">
            <i className="fa-solid fa-chevron-right"></i> Parlons de votre projet
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ExpertisesNumber1;
