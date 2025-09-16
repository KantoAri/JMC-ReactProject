import Activites from "../components/Accueil/Activites/Activites";
import Engagements from "../components/Accueil/Engagements/Engagements";
import HeroSection from "../components/Accueil/HeroSection/HeroSection";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <Activites />
      <Engagements />
    </div>
  );
};
export default Homepage;
