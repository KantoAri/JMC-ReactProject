import Activites from "../components/Accueil/Activites/Activites";
import Engagements from "../components/Accueil/Engagements/Engagements";
import AboutUs from "../components/Accueil/HeroSection/AboutUs";
import HeroSection from "../components/Accueil/HeroSection/HeroSection";

const Homepage = () => {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Activites />
      <Engagements />
    </div>
  );
};
export default Homepage;
