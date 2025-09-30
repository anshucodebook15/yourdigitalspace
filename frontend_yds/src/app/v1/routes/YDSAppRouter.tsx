import "../styles/styles.css";
import { BrowserRouter as Router, Route, Routes } from "react-router";
import { Dashboard } from "../pages";
import TestLayout from "../components/main/test";
import TestLayout2 from "../components/main/test2";

// import { ThemeProvider } from "@material-tailwind/react";

const YDSApp = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/test" element={<TestLayout />} />
          <Route path="/emp" element={<TestLayout2 />} />
        </Routes>
      </Router>
    </>
  );
};

const YDSAppRouter = () => {
  return <YDSApp />;
};

export default YDSAppRouter;
