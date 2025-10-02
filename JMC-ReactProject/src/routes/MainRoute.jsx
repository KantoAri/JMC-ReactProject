import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Homepage from "../pages/Homepage";
import Expertises from "../pages/Expertises";
import OffresDeServices from "../pages/OffresDeServices";
import Contact from "../pages/Contact";
import ContactList from "../pages/ContactList";
import Connexion from "../pages/Connexion";
import MentionLegalesPage from "../pages/MentionLegalesPage";
import Update from "../components/Contact/updateuser/Update";
import AddUser from "../components/Contact/adduser/AddUser";

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
             <Route path="/listContact" element={<ContactList />} />
             <Route path="/admin" element={<Connexion />} />
             <Route path="/update/:id" element={<Update />} />
             <Route path="/add" element={<AddUser />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
};
export default MainRoute;
