import React from 'react';

const ExpertisesNumber4 = () => {
  return (
    <section className="php-section">
      <div className="php-container">
        {/* Titre principal */}
        <h3 className="php-title">2. DÉVELOPPEMENT PHP</h3>

        {/* Introduction */}
        <p className="php-intro">
            <strong>JM-Contacts : Votre Partenaire Web Dynamique</strong><br />
            Chez JM-Contacts, nous proposons nos compétences en développement Web, parce que nous croyons que le <br /> dynamique d’un site web est essentielle pour répondre aux besoins de votre entreprise.<br />
            Nos domaines d’intervention vont du développement PHP, avec ou sans framework, à l’intégration CMS de sites <br /> Web « vitrines » ou E-Commerce.
        </p>


        {/* Question sur les frameworks */}
        <div className="php-framework-question">
          <h4>Faut-il choisir un framework pour le développement de gestion en PHP ?</h4>
          <div className="framework-icon">{/* Icône hexagonale FRAMEWORK ici */}</div>
        </div>

        {/* Liste des avantages */}
        <p className="framework-intro-highlight">
            L'utilisation d'un framework en PHP présente plusieurs avantages :
        </p>
        <ul className="php-framework-benefits">
          <li><strong>Gain de temps</strong> : fonctionnalités prêtes à l'emploi, développement accéléré.</li>
          <li><strong>Bonnes pratiques</strong> : encourage un code propre et lisible.</li>
          <li><strong>Collaboration facilitée</strong> : code compréhensible pour d'autres développeurs.</li>
          <li><strong>Gratuité</strong> : la majorité des frameworks PHP sont gratuits.</li>
          <li><strong>Sécurité renforcée</strong> : intégration de fonctions de sécurité robustes.</li>
          <li><strong>Communauté active</strong> : aide disponible en cas de besoin.</li>
          <li><strong>Documentation complète</strong> : Symfony et Zend offrent des ressources détaillées.</li>
        </ul>
      </div>
    </section>
  );
};

export default ExpertisesNumber4;
