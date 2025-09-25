import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage";
import Expertises from "../pages/Expertises";
import OffresDeServices from "../pages/OffresDeServices";
import Contact from "../pages/Contact";
import MentionLegalesPage from "../pages/MentionLegalesPage";

const MainRoute = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/expertises" element={<Expertises />} />
            <Route path="/offres-de-services" element={<OffresDeServices />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/mentions-legales" element={<MentionLegalesPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
export default MainRoute;
