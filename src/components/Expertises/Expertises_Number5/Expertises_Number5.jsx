import React from 'react';
import './Expertises_Number5.css';
const ExpertisesNumber5 = () => {
  return (
    <section className="cms-section">
      <div className="cms-container">
        {/* Titre principal */}
        <h3 className="cms-title">JM-Contacts et l’intégration de sites Web CMS</h3>

        {/* Introduction */}
        <p className="cms-intro">
          Nous intervenons principalement sur les CMS <strong>WordPress</strong>, pour les sites vitrines et les blogs ; et le CMS <strong>Prestashop</strong> pour <br/>
          les boutiques E-Commerce.
        </p>

        {/* Liste des services */}
        <p className="cms-intro-list">
            Nous couvrons tous les dommaines de l'intégration :
        </p>
        <ul className="cms-services-list">
          <li>
            <strong>Découpage, traitement et optimisation d’images.</strong><br />
            Nous puvons travailler à partir de fichiers images de création graphique (Photoshop, Illustrator…).
          </li>
          <li>
            <strong>Création de feuille de style CSS</strong>
          </li>
          <li>
            <strong>Optimisations des « metrics »</strong><br />
            (Poids des pages, taille et emplacement des scripts, optimisation des entités…)
          </li>
          <li>
            <strong>Mise en forme de contenu</strong><br />
            (Structuration en balises H, saisie des balises d'attributs textes,...)
          </li>
        </ul>

        {/* Note finale */}
        <p className="cms-note">
          N’hésitez pas à explorer <strong>l’optimisation pour le référencement</strong> (SEO), <strong>le référencement « off-site »</strong> ( net-linking ), <strong>l’animation des réseaux sociaux</strong><br/>
           (Community Management),... pour améliorer la visiblité de vos sites web et applications en ligne.
        </p>
      </div>
    </section>
  );
};

export default ExpertisesNumber5;
