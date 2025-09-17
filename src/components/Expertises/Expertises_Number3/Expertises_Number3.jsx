import React from 'react';
import './Expertises_Number3.css';
import appli from '../../../assets/exp3-removebg-preview.png';
import image_mobile from '../../../assets/phone_exp3-removebg-preview1.png';
import gestion from '../../../assets/gestion_exp3-removebg-preview.png';
import interaction from '../../../assets/interaction_exp3-removebg-preview.png';
import hexagone from '../../../assets/hexagone_exp3-removebg-preview.png';
const ExpertisesNumber3 = () => {
  return (
    <section className="windev-dimensions-section">
      <div className="windev-dimensions-container">
        {/* Titre principal */}
        <h3 className="windev-title">
          <img src={appli} alt="Icône Windev" className="windev-icon" />
          Une Application, Trois Dimensions
        </h3>

        <p className="windev-intro">
          Un des avantages majeurs de Windev est sa capacité à combiner trois dimensions dans une même application :
        </p>
           
                {/* Trois dimensions */}
              <div className="windev-dimensions-grid">
                <div className="dimension-card mobile-dimension">
                  <img src={image_mobile} alt="Mobile" className="dimension-icon" />
                  <h4>WinDev Mobile pour la Mobilité</h4>
                  <p>
                    Vos commerciaux et vos ouvriers de production peuvent accéder aux données essentielles où qu'ils se trouvent.
                  </p>
                </div>

                <div className="dimension-card gestion-dimension">
                  <img src={gestion} alt="Gestion" className="dimension-icon" />
                  <h4>WinDev pour la Gestion</h4>
                  <p>
                    Nous développons des solutions de gestion pour votre entreprise.
                  </p>
                </div>

                <div className="dimension-card web-dimension">
                  <img src={interaction} alt="Interaction Web" className="dimension-icon" />
                  <h4>WebDev pour l’Interaction avec Vos Clients</h4>
                  <p>
                    Offrez une expérience web dynamique à vos utilisateurs.
                  </p>
                </div>
              </div>

              {/* Innovation */}
              <div className="windev-innovation">
                <h4>Toujours à la Pointe de l’Innovation</h4>
                <p>
                  Nous restons constamment à l’affût des nouvelles versions de Windev. Chaque année, nous participons au Tour de France de PCSoft et adoptons les dernières fonctionnalités dès leur disponibilité.
                </p>
                <img src={hexagone} alt="Innovation Hexagone" className="innovation-icon" />
              </div>
            </div>
          </section>
            );
          };

export default ExpertisesNumber3;
