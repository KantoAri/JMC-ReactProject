import styles from "./Forfait.module.css";
import React, { useState } from "react";

const items = [
  {
    title: "Qu’est-ce que c’est ?",
    description: [
      "JM-Contacts propose une offre de service en forfait pour les projets informatiques initialement cadrés et chiffrés. La charge globale étant connue à l’avance, le développeur est mandaté pour un nombre de jours initialement connu. Le forfait correspond à la garantie de résultats",
      "Bien entendu, si le projet s’allonge, un avenant au contrat permettra de prolonger le forfait."
    ]
  },
  {
    title: "Pourquoi choisir le mode en forfait ?",
    description: "Le choix du forfait est judicieux car il permet de connaître à l’avance le coût global des prestations et la date de finalisation du contrat. Ces éléments sont contractuels."
  },
  {
    title: "Comment ça marche ?",
    description: {
      paragraph: "Après analyse de votre besoin, un devis détaillé est établi. Le projet démarre dès validation, avec un suivi régulier jusqu’à la livraison finale.",
      list: [
        "Analyse du besoin",
        "Établissement du devis",
        "Suivi régulier du projet",
        "Livraison finale"
      ]
    }
  }
];

const Forfait = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section>
      <div className={styles.forfaitFlexColumn}>
        <div className={styles.forfaitHeaderRow}>
          <div className={styles.forfaitHeaderImage}>
            <img src="https://jm-contacts.net/wp-content/uploads/2024/04/forfait-removebg-preview-300x300.png" alt="Forfait" />
          </div>
          <div className={styles.forfaitHeaderContent}>
            <h2 className={styles.ForfaitMainTitle}>2. LE FORFAIT</h2>
            <ul className={styles.forfaitAccordionList}>
              {items.map((item, idx) => (
                <li key={idx}>
                  <button type="button" className={styles.forfaitButton} onClick={() => handleToggle(idx)}>
                    <span>{item.title}</span>
                    <span className={styles.forfaitPlusIcon}>+</span>
                  </button>
                  {openIndex === idx && (
                    <div>
                      {Array.isArray(item.description) ? (
                        item.description.map((desc, i) => <p key={i}>{desc}</p>)
                      ) : typeof item.description === 'object' && item.description !== null ? (
                        <>
                          <p>{item.description.paragraph}</p>
                          <ul>
                            {item.description.list.map((el, i) => (
                              <li key={i}>{el}</li>
                            ))}
                          </ul>
                        </>
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
        <div>
          <p>
            JM Contacts met l’accent sur la réactivité. La méthode de lancement de projet peut être mise en œuvre très rapidement, et la signature de la convention de collaboration peut intervenir dans un délai allant de quelques heures à quelques jours, selon la taille du projet et le nombre de questions échangées.
          </p>
        </div>
      </div>
    </section>
  );
    };

    export default Forfait;
