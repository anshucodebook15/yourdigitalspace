import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import YDSAppRouter from "./app/v2/routes/router";

// import YDSAppRouter from "./app/routes/YDSapprouter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <YDSAppRouter />
  </StrictMode>
);
