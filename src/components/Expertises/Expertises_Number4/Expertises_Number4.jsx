import React from 'react';
import './Expertises_Number4.css';
import php from '../../../assets/PHP.png';
import framework from '../../../assets/FRAMEWORK.png';

const ExpertisesNumber4 = () => {
  return (
    <section className="php-section">
      <div className="php-container">

        {/* Titre principal */}
        <h3 className="php-title">
          2. DEVEL<span className="exp-highlight">OPPE</span>MENT PHP
        </h3>

        {/* Bloc PHP (hexagone bleu à gauche, texte à droite) */}
        <div className="pair-block pair-block--blue">
          <div className="pair-block__icon">
            <img src={php} alt="PHP" />
          </div>
          <div className="pair-block__text">
            <h4 className="pair-block__heading pair-block__heading--blue">
              JM-Contacts : Votre Partenaire Web Dynamique
            </h4>
            <p className="pair-block__para">
              Chez JM-Contacts, nous proposons nos compétences en développement Web, parce que nous croyons que le
              développement d’un site Internet doit être <strong>dynamique</strong> et <strong>sur mesure</strong>.
            </p>
            <p className="pair-block__para">
              Nous utilisons différentes versions du développement <strong>PHP</strong> (avec ou sans framework),
              et assurons l’<strong>intégration CMS</strong> de sites Web « vitrines » et/ou <strong>E‑commerce</strong>.
            </p>
          </div>
        </div>

        {/* Bloc FRAMEWORK (question à gauche, hexagone orange à droite) */}
        <div className="pair-block pair-block--orange pair-block--reverse">
          <div className="pair-block__text">
            <div className="question-box">
              <br/>Faut-il choisir un framework pour le développement de gestion en PHP ?
            </div>
          </div>
          <div className="pair-block__icon">
            <img src={framework} alt="Framework" />
          </div>
        </div>

       

        {/* Avantages (cartes grises) — conforme image 2 */}
       <div className="php-benefits-grid">
            <div className="benefit-card"> 
              <h5>Gain de temps</h5>
              <p>Les frameworks offrent des fonctionalités<br/>prêtes à l'emploi, réduisant le temps de<br/>développement.</p>
            </div>
            
            <div className="php-benefits-wrapper">
              <h4 className="php-benefits-intro">
                <br/><br/>L'utilisation d'un framework en PHP présente<br/>plusieurs avantages :
              </h4>   
            </div> 
            
            <div className="benefit-card">
              <h5>Sécurité renforcée</h5>
              <p>Les frameworks intègrent des mesures de<br/>sécurité.</p>
            </div>
            
            <div className="benefit-card">
              <h5>Bonnes pratiques</h5>
              <p>Ils encouragent un code propre et lisible.</p>
            </div>
            <div className="benefit-card">
              <h5>Gratuité</h5>
              <p>Ces frameworks sont gratuits.</p>
            </div>
            <div className="benefit-card">
              <h5>Communauté active</h5>
              <p>vous trouverez de l'aide en cas de besoin.</p>
            </div>
            <div className="benefit-card">
              <h5>Collaboration facilitée</h5>
              <p>Le code est compréhensible pour d'autres<br/>développeurs.</p>
            </div>
            <div >
              
            </div>
            <div className="benefit-card">
              <h5>Documentation complète</h5>
              <p>Symphony et zend disposent de ressources<br/>détaillées.</p>
            </div>
          </div>

      </div>
    </section>
  );
};

export default ExpertisesNumber4;
