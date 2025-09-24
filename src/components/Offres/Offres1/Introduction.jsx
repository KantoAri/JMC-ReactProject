import styles from "./Introduction.module.css";
import React from "react";


const Introduction = () => (
  <section className={styles.introductionFlex}>
    <h1>Offres de services</h1>
    <p>
      En fonction des besoins de chaque client, JM Contacts adapte ses modes de services pour offrir des solutions personnalisées et efficaces :
    </p>
    <a
      href="https://jm-contacts.net/contact/"
      target="_blank"
      rel="noopener noreferrer"
      className={styles.introButton}
    >
      <span className={styles.buttonText}>Parlons De votre Projet</span>
      <span className={styles.arrowIcon}>
        <svg width="38" height="38" viewBox="0 0 18 18" fill="none">
          <path d="M7 5l4 4-4 4" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    </a>
  </section>
);

export default Introduction;
