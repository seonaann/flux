import { useState } from "react";
import Intro from "./components/Fluxinto";
import FluxLandingPage from "./components/Landing";
import Login from "./components/Login";
import FluxDashboard from "./components/FluxDashboard";

function App() {
  const [page, setPage] = useState("intro");

  return (
    <>
      {page === "intro" && (
        <Intro goNext={() => setPage("landing")} />
      )}

      {page === "landing" && (
        <FluxLandingPage goToLogin={() => setPage("login")} />
      )}

      {page === "login" && (
        <Login goToDashboard={() => setPage("dashboard")} />
      )}

      {page === "dashboard" && (
        <FluxDashboard goToLanding={() => setPage("landing")} />
      )}
    </>
  );
}

export default App;
