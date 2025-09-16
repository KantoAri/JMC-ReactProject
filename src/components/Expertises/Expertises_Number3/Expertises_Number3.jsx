import React from 'react';

const ExpertisesNumber3 = () => {
  return (
    <section className="windev-dimensions-section">
      <div className="windev-dimensions-container">
        {/* Titre principal */}
        <h3 className="windev-title">Une Application, Trois Dimensions</h3>
        <p className="windev-intro">
          Un des avantages majeurs de Windev est sa capacité à combiner trois dimensions dans une même application :
        </p>

        {/* Bloc des trois dimensions */}
        <div className="windev-dimensions-grid">
          <div className="dimension-card mobile-dimension">
            {/* Icône ou image mobile */}
            <div className="dimension-icon">{/* 📱 */}</div>
            <h4>WinDev Mobile pour la Mobilité</h4>
            <p>
              Vos commerciaux et vos ouvriers de <br /> production peuvent accéder aux données <br /> essentielles ou qu'ils se trouvent.
            </p>
          </div>

          <div className="dimension-card gestion-dimension">
            {/* Icône ou image desktop */}
            <div className="dimension-icon">{/* 🖥️ */}</div>
            <h4>WinDev pour la Gestion</h4>
            <p>
              Nous développons des solutions de gestion pour votre entreprise.
            </p>
          </div>

          <div className="dimension-card web-dimension">
            {/* Icône ou image web */}
            <div className="dimension-icon">{/* 🌐 */}</div>
            <h4>WebDev pour l’Interaction avec Vos Clients</h4>
            <p>
              Offrez une expérience web dynamique à <br /> vos utilisateurs.
            </p>
          </div>
        </div>

        {/* Bloc innovation */}
        <div className="windev-innovation">
          <h4>Toujours à la Pointe de l’Innovation</h4>
          <p>
            Nous restons constamment à l’affût des nouvelles versions de Windev. Chaque année, nous participons au Tour
            de <br /> France de PCSoft et adoptons les dernières fonctionalités dès leur disponiblité.
          </p>
          {/* Icône hexagonale ici */}
          <div className="innovation-icon">{/* 🔄 */}</div>
        </div>
      </div>
    </section>
  );
};

export default ExpertisesNumber3;
