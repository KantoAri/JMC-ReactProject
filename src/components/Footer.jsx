import { Link } from "react-router-dom";
import linkedin from "../assets/linkedin.png";

const Footer = () => {
  return (
    <div>
      <div>
        <h3>Nous contacter</h3>
        <ul>
          <li>
            Immeuble NIRINA 29 - 1er étage Ambohibao - ANTANANARIVO - 105 - BP
            11034 Poste DIGUES - MADAGASCAR
          </li>
          <li>(+ 261) 32 05 369 00</li>
          <li>j.morvan@jm-contacts.com</li>
        </ul>
      </div>
      <div>
        <h3>Autres informations</h3>
        <p>
          <Link to="/mentions-legales">Mentions légales</Link>
        </p>
      </div>
      <div>
        <h3>Réseau social</h3>
        <div>
          <a
            href="https://www.linkedin.com/in/jeanmorvan"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedin} alt="linkedin logo" />
          </a>
        </div>
      </div>
    </div>
  );
};
export default Footer;
