
import styles from "./Mini_projet.module.css";
import React, { useState } from "react";

const items = [
  {
    title: "Avantages",
    list: [
      "Demande et réalisation rapides",
      "Qualité éprouvée",
      "Tarif compétitif"
    ]
  },
  {
    title: "Description du besoin",
    list: [
      "Pas de cahier des charges pour la migration d’une application existante.",
      "Une simple description suffit pour un nouveau développement."
    ]
  },
  {
    title: "Devis gratuit",
    list: [
      "De 500 € à 2500€ Tarif forfaitaire",
      "Étude immédiate des éléments transmis.",
      "Réponse sous 24 heures."
    ]
  },
  {
    title: "Fonctionnalités standard",
    list: [
      "Gestion d’utilisateurs",
      "Écran de paramétrage évolutif",
      "Gestion multi-langues de l’interface",
      "Gestion des connexions",
      "Interface principale avec menus et barre d’outils"
    ]
  },
  {
    title: "Contexte de votre besoin",
    list: [
      "Petit logiciel de gestion",
      "Migration d’un fichier Excel complexe",
      "Professionnalisation d’une application MS Access",
      "Refonte d’une ancienne application Visual Basic ou Delphi"
    ]
  },
  {
    title: "Processus de projet",
    list: [
      "Prise de contact",
      "Cotation et devis",
      "Réalisation",
      "Recette",
      "Fin du projet et début de la période de garantie"
    ]
  },
  {
    title: "Ergonomie des interfaces standard",
    list: [
      "Développement selon une ergonomie fiable et intuitive.",
      "Gabarits évolutifs et ouverts."
    ]
  }
];

const Mini_projet = () => {
  return (
  <section>
    <div className={styles.miniProjetFlexColumn}>
      <div className={styles.miniProjetHeaderRow}>
        <div className={styles.miniProjetHeaderColumn}>
          <h2 className={styles.miniProjetMainTitle}>3. LE MINI-PROJET</h2>
          <h3 className={styles.miniProjetSubtitle}>Forfait Mini-Projet Windev par JM-Contacts</h3>
          <p>
            JM-Contacts propose désormais un forfait « Mini-projet » pour les petits projets (5-20 jours de développement). Ce forfait économique couvre tous vos besoins en logiciels de gestion.
          </p>
        </div>
        <img src="https://jm-contacts.net/wp-content/uploads/2024/04/Mini-Projet_Windev_-removebg-preview-300x300.png" alt="Mini-projet" />
      </div>
      <ul className={styles.miniProjetItemsRow}>
        {items.map((item, idx) => (
          <li key={idx}>
            <h4 className={styles.miniProjetItemTitle}>{item.title}</h4>
            <ul>
              {item.list.map((el, i) => (
                <li key={i}>
                  {typeof el === 'string' && el.includes('De 500 € à 2500€') ? (
                    <b>{el}</b>
                  ) : el}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  </section>
  );
};

export default Mini_projet;
