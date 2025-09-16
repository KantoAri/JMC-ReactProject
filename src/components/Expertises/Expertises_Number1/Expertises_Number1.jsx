import React from 'react';

const ExpertisesNumber1 = () => {

  return (
    <section className="expertises-section">
      <div className="expertises-container">
        <h2 className="expertises-title">Expertises</h2>

        <div className="expertises-description">
          <p>
            JM-Contacts excelle dans deux domaines essentiels : la maîtrise des <br /> langages
            de développement de <strong>PC SOFT</strong> tels que <strong>WinDev</strong>, <strong>WinDev Mobile</strong><br />
             et <strong>WebDev</strong>, ainsi  que l’expertise en <strong>développement Web</strong> <br /> 
             (<strong>frameworks PHP</strong> et <strong>intégration CMS</strong>).
          </p>
          <p>
            Ces compétences combinées permettent à <strong>JM-Contacts</strong> de créer des <br /> solutions
            logicielles robustes et performantes pour ses clients et de <br /> les rendre visibles
            sur le Web.
          </p>
        </div>

        <div className="expertises-button-container">
            
            <button className="expertises-button">
                <i class="fa-solid fa-chevron-right"></i>
            Parlons de votre projet
            </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertisesNumber1;
