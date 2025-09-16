import logoImg from "../assets/logoreact.png";
import linkedin from "../assets/linkedin.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <div>
        <img src={logoImg} alt="jmc logo" />
      </div>
      <div>
        <ul>
          <li>
            <Link to="/">ACCUEIL</Link>
          </li>
          <li>
            <Link to="/expertises">EXPERTISES</Link>
          </li>
          <li>
            <Link to="/offres-de-services">OFFRES DE SERVICES</Link>
          </li>
          <li>
            <Link to="/contact">CONTACT</Link>
          </li>
        </ul>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/jeanmorvan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin} alt="linkedin logo" />
        </a>
      </div>
    </nav>
  );
};
export default Navbar;
