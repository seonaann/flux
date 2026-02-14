import { useState } from "react";

import Intro from "./components/Fluxinto";
import FluxLandingPage from "./components/Landing";
import Login from "./components/Login";
import FluxDashboard from "./components/FluxDashboard";

// ✅ New Pages
import Energy from "./components/Energy";
import Billing from "./components/Billing";
import Alerts from "./components/Alerts";
import Carbonfootprint from "./components/Carbonfootprint";

function App() {
  const [page, setPage] = useState("intro");

  return (
    <>
      {/* Intro Page */}
      {page === "intro" && (
        <Intro goNext={() => setPage("landing")} />
      )}

      {/* Landing Page */}
      {page === "landing" && (
        <FluxLandingPage goToLogin={() => setPage("login")} />
      )}

      {/* Login Page */}
      {page === "login" && (
        <Login goToDashboard={() => setPage("dashboard")} />
      )}

      {/* Dashboard Page */}
      {page === "dashboard" && (
        <FluxDashboard
          goToLanding={() => setPage("landing")}
          goToEnergy={() => setPage("energy")}
          goToBilling={() => setPage("billing")}
          goToAlerts={() => setPage("alerts")}
          goToCarbon={() => setPage("carbon")}
        />
      )}

      {/* Sidebar Navigation Pages */}
      {page === "energy" && <Energy />}
      {page === "billing" && <Billing />}
      {page === "alerts" && <Alerts />}
      {page === "carbon" && <Carbonfootprint />}
    </>
  );
}

export default App;
