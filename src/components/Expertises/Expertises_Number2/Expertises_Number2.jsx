import React from 'react';
import './Expertises_Number2.css';
import expertise_2 from '../../../assets/Expertise_2.png';
const ExpertisesNumber2 = () => {
  return (
   
       <section className="pcsoft-section">
            
              <h3 className="pcsoft-title">
                1. LANGA<span className="exp-highlight">GES DE</span> PC SOFT
              </h3>

            <div className="pcsoft-wrapper">
              <div className="pcsoft-image-container">
                <img src={expertise_2} alt="WinDev PC SOFT" className="pcsoft-image" />
              </div>

              <div className="pcsoft-text-container">
                <p className="pcsoft-subtitle">
                  <strong>JM-Contacts : Votre Partenaire pour des Solutions <br /> Logicielles Dynamiques</strong>
                </p>
                <div className="pcsoft-description">
                  <p>
                    Chez JM-Contacts, nous sommes passionnés par le développement de <br /> solutions
                    logicielles sur mesure pour nos clients.Que vous soyer une SSII <br /> ou un éditeur de progiciels,nous mettons
                    notre savoir-faire à votre service.
                  </p>
                  <p>
                    Nous avons  choisi d’utiliser les langages <strong>WinDev</strong>, <strong>WinDev Mobile</strong> et<br/>
                    <strong> WebDev</strong> de <strong>PC SOFT</strong> (SL5G) pour une raison simple:
                  </p>
                  <p>
                    Ce sont les outils de développement français les plus fiables, dynamiques <br /> et évolutifs.
                    De plus, l'Atelier de Génie Logiciel (AGL), WinDev vous permet de <br />créer facilement tous types d'applications, avec une  
                  <strong> productivité exceptionnelle</strong> .
                  </p>
                  <p>
                    WinDev est un outil polyvalent qui peut s’interfacer avec <strong>toutes les bases <br /> de
                    données du marché</strong>. Que vous ayez besoin d'utiliser <strong>Hyperfile</strong>, <strong>MySQL</strong>,<br />
                    <strong>SQL Server</strong> ou <strong> autre</strong>, nous maitrisons ces technologies pour répondre à vos <br />  
                    besoins spécifiques.
                  </p>
              </div>
            </div>
          </div>
        </section>

  );
};

export default ExpertisesNumber2;
