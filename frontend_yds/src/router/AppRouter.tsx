import { BrowserRouter as Router, Route, Routes } from "react-router";
import App from "../App";
import Dolci from "../pages/dolci/dolci";
import Emergent from "../pages/emergent/Emergent";
import B2b from "../pages/emergent/pages/B2b";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/emergent" element={<Emergent />} />
        <Route path="/b2b" element={<B2b />} />
        <Route path="/dolci" element={<Dolci />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
