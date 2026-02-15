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
          goToCarbon={() => setPage("carbonfootprint")}

        />
      )}

      {/* Sidebar Navigation Pages */}
      {page === "energy" && (
  <Energy goToDashboard={() => setPage("dashboard")} />
)}

      {page === "billing" && (
  <Billing goToDashboard={() => setPage("dashboard")} />
)}
     {page === "alerts" && (
  <Alerts goToDashboard={() => setPage("dashboard")} />
)}

   {page === "carbonfootprint" && (
  <Carbonfootprint goToDashboard={() => setPage("dashboard")} />
)}


    </>
  );
}

export default App;
