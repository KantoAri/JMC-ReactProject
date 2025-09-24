import "../components/Offres/offre.css";
import Introduction from "../components/Offres/Offres1/Introduction";
import Regie from "../components/Offres/Regie/Regie";
import Forfait from "../components/Offres/Forfait/Forfait";
import Mini_projet from "../components/Offres/Mini_Projet/Mini_projet";

const OffresDeServices = () => {
  return (
    <div className="offresDeServiceFlexColumn">
      <Introduction />
      <Regie />
      <Forfait />
      <Mini_projet/>
    </div>
  );
};

export default OffresDeServices;