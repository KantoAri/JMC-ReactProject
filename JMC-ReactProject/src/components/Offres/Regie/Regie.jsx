

import styles from "./Regie.module.css";
import "../offre.css";
import React, { useState } from "react";

const items = [
  {
    title: "Qu’est-ce que c’est ?",
    description: "Vous avez besoin de deux développeurs pour une durée indéterminée? Pas de problème. JM-Contacts met à votre disposition deux développeurs expérimentés, encadrés par un chef de projet (pour le suivi \"client\" et le suivi interne). La régie correspond à la garantie de moyens."
  },
  {
    title: "Pourquoi choisir la régie délocalisée ?",
    description: [
      "Rapidité : Besoin d’un développeur rapidement ? Nous pouvons vous en fournir un en moins de 15 jours.",
      "Simplicité de mise en oeuvre : Pas besoin de rédiger un cahier des charges long et détaillé, pour chiffrer préalablement un forfait : Adopter la méthode \"Agile\" de la régie.",
      "Simplicité de démarrage : Oubliez les processus de recrutement longs et coûteux.",
      "Flexibilité : Vous choisissez la durée de la collaboration. Vous pouvez arrêter quand vous le souhaitez, avec un simple préavis de un ou deux mois.",
      "Efficacité : Nos développeurs sont formés et opérationnels immédiatement.",
      "Encadrement: Nos développeurs sont toujours encadrés par un chef de projet.",
      "Maîtrise des coûts : Vous ne savez pas si vous aurez toujours besoin de ce développeur dans deux ans ? Pas de soucis, vous pouvez arrêter quand vous le souhaitez."
    ]
  },
  {
    title: "Comment ça marche ?",
    description: "Vous nous contactez, nous discutons de vos besoins et nous vous proposons les profils les plus adaptés. Une fois l’accord conclu, le projet peut commencer immédiatement."
  },
  {
    title: "Essayez la régie sans aucun risque",
    description: "Vous démarrez par une \"période d’essai\" de 2 mois</strong> pendant lesquels vous pouvez arrêter à tout moment, sans préavis. Si vous Arrêtez en cours de mois, vous n’êtes pas facturé (Vous ne payez que les mois terminés)."
  },
  {
    title: "Pourquoi choisir JM-Contacts ?",
    description: "Nos coûts sont compétitifs, tous nos informaticiens sont francophones, chaque développeur (ou chaque équipe de développeurs) est encadré."
  }
];

const Regie = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
  <section>
  <div className={styles.regieFlexColumn}>
      <div className={styles.regieHeaderRow}>
        <div className={styles.regieTileanddescription}>
          <h2 className={styles.RegieMainTitle}>1. LA REGIE DELOCALISEE</h2>
          <h3>Découvrez la flexibilité de la régie délocalisée avec JM-Contacts !</h3>
          <p>
            Vous avez un besoin « longue durée » (plusieurs mois) en développement informatique ? JM-Contacts vous propose une solution flexible et économique : La régie délocalisée.
          </p>
        </div>
        <div>
          <img src="https://jm-contacts.net/wp-content/uploads/2024/04/La_regie_delocalisee.-removebg-preview-300x300.png" alt="Régie délocalisée" />
        </div>
      </div>
      <div>
        <ul className={styles.regieAccordionList}>
          {items.map((item, idx) => (
            <li key={idx}>
              <button type="button" className={styles.regieButton} onClick={() => handleToggle(idx)}>
                <span style={{ float: 'left' }}>{item.title}</span>
                <span className={styles.regiePlusIcon}>+</span>
              </button>
              {openIndex === idx && (
                <div>
                  {Array.isArray(item.description) ? (
                    <ul>
                      {item.description.map((el, i) => (
                        <li key={i}>{el}</li>
                      ))}
                    </ul>
                  ) : (
                    <p>{item.description}</p>
                  )}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
  );
};

export default Regie;
