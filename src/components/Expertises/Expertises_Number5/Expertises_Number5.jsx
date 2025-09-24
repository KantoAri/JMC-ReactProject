import React from 'react';
import './Expertises_Number5.css';
import cms from '../../../assets/CMS.png';

const ExpertisesNumber5 = () => {
  return (
    <section className="cms-section">
      <div className="cms-container">

        {/* Bloc en-tête CMS (icône à gauche, texte à droite) */}
        <div className="php-block php-block--blue" role="region" aria-label="CMS integration intro">
          <div className="php-icon php-icon--left">
            <img src={cms} alt="CMS" />
          </div>

          <div className="php-text">
            <p className="para-blue">
              <strong>JM-Contacts et l’intégration de sites Web CMS</strong>
            </p>

            <p className="para-dark">
              Nous intervenons principalement sur les CMS <strong>WordPress</strong>, pour les sites vitrines et les blogs,
              et le CMS <strong>PrestaShop</strong><br/> pour les boutiques E‑Commerce.
            </p>
          </div>
        </div>

        {/* Liste des services */}
        <div className="cms-container-list">
          <p className="cms-intro-list">Nous couvrons tous les domaines de l'intégration :</p>

          <ul className="cms-services-list">
            <li>
              <strong>Découpage, traitement et optimisation d’images.</strong>
              <span className="cms-li-sub">
                Nous pouvons travailler à partir de fichiers images de création graphique (Photoshop, Illustrator, ...).
              </span>
            </li>

            <li>
              <strong>Création de feuille de style CSS</strong>
            </li>

            <li>
              <strong>Optimisations des « metrics »</strong>
              <span className="cms-li-sub">
                Poids des pages, taille et emplacement des scripts, optimisation des en-têtes, ...
              </span>
            </li>

            <li>
              <strong>Mise en forme de contenu</strong>
              <span className="cms-li-sub">
                Structuration en balises H, saisie des attributs texte, ...
              </span>
            </li>

            <li>
              <strong>...</strong>
            </li>
          </ul>

          <p className="cms-note">
            N’hésitez pas à explorer <strong>l’optimisation pour le référencement</strong> (SEO), le
            <strong> référencement « off-site »</strong> (netlinking) et
            <strong> l’animation des réseaux sociaux</strong> (community management) pour améliorer la visibilité de vos sites web
            et applications en ligne.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExpertisesNumber5;
