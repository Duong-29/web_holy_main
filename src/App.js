import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import HomePage from "./page/HomePage";
import Layout from "./components/layout/layout";
import Training from "./page/Training"
import AuthPage from "./page/AuthPage";

import AboutUs from "./page/AboutUs/AboutUs";
import ItemOverview from "./page/AboutUs/ItemOverview";
import StaffOverview from "./page/AboutUs/StaffOverview";

import ServicePage from "./page/Services/ServicePage";
import HomeCare from "./page/Services/HomeCare";
import HospitalCare from "./page/Services/HospitalCare";
import OldPersonCare from "./page/Services/OldPersonCare";

import ContactUs from "./page/ContactUs";
import NewsPage from "./page/NewsPage";
import Career from "./page/Career"
import Partner from "./page/Partner";
import PartnerDetails from "./page/PartnerDetails";
import ChangePassword from "./pageUserDropdown/ChangePassword";
import Profile from "./pageUserDropdown/Profile";

function App() {
    const location = useLocation()
    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
                <Route path="/AuthPage" element={<AuthPage />}>

                </Route>

                <Route path="/" element={<Layout />}>
                    <Route index element={<HomePage />} /> 
                    
                    <Route path="/AboutUs" element={<AboutUs />} />
                    <Route path="/AboutUs/ItemOverview" element={<ItemOverview />} />
                    <Route path="/AboutUs/StaffOverview" element={<StaffOverview />} />

                    <Route path="/Service" element={<ServicePage />} />
                    <Route path="/Service/HomeCare" element={<HomeCare />} />
                    <Route path="/Service/HospitalCare" element={<HospitalCare />} />
                    <Route path="/Service/OldPersonCare" element={<OldPersonCare />} />

                    <Route path="/Training" element={<Training />} /> 
                    <Route path="/Partner" element={<Partner />} />
                    <Route path="/Career" element={<Career />} />
                    <Route path="/News" element={<NewsPage />} />
                    <Route path="/ContactUs" element={<ContactUs />} />
                    
                    <Route path="/partner/:id" element={<PartnerDetails />} />
                    <Route path="/User/ChangePassword" element={<ChangePassword />} />
                    <Route path="/User/Profile" element={<Profile />} />
                </Route>
            </Routes>
        </AnimatePresence>
    ); 
}

export default App;
