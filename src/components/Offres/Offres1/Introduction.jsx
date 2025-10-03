

import { useLocation } from "react-router-dom";
import styles from "./Introduction.module.css";
import React, { useEffect, useState } from "react";

const Introduction = () => {
  const location = useLocation();
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(false);
    const timeout = setTimeout(() => setAnimate(true), 10);
    return () => clearTimeout(timeout);
  }, [location.pathname]);

  return (
    <section className={animate ? styles.introductionFlex : styles.introductionFlexNoAnim}>
      <h1>
        <span style={{ textDecoration: 'underline', textUnderlineOffset: '0.3em', textDecorationThickness: '2px', textDecorationColor: '#f59e42' }}>Of</span><span>fres de services</span>
      </h1>
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
};


export default Introduction;
