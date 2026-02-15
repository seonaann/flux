import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

/* ✅ ADD THIS LINE */
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
