import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AgencyLandingPage from "./components/AgencyOwner";
import ScaleLandingPage from "./components/Scalepage";
import TaxAdvisorLandingPage from "./components/Maverick";
import MavricktwoPage from "./components/Mavericktwo";
import Fourbuttons from "./components/Fourbuttons";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Fourbuttons />} />
        <Route path="/Agency" element={<AgencyLandingPage />} />
        <Route path="/scale" element={<ScaleLandingPage />} />
        <Route path="/maverick" element={<TaxAdvisorLandingPage />} />
        <Route path="/maverick2" element={<MavricktwoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
