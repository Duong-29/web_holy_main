import { Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import Layout from "./components/layout/layout";
import NurseDetails from "./page/NurseDetails"
import NurseList from "./page/NurseList"
import AuthPage from "./page/AuthPage";
import AboutUs from "./page/AboutUs";
import Careers from "./page/Careers";
import ContactUs from "./page/ContactUs";
import NewsPage from "./page/NewsPage";

function App() {
    return (
        <Routes>
            <Route path="/AuthPage" element={<AuthPage />}>

            </Route>

            <Route path="/" element={<Layout />}>
                <Route index element={<HomePage />} /> 
                <Route path="/nurse_list" element={<NurseList />} /> 
                <Route path="/nurses/:id" element={<NurseDetails />} />
                <Route path="/AboutUs" element={<AboutUs />} />
                <Route path="/News" element={<NewsPage />} />
                <Route path="/Careers" element={<Careers />} />
                <Route path="/ContactUs" element={<ContactUs />} />
            </Route>
        </Routes>
    ); 
}

export default App;
