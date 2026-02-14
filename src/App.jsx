import { useState } from "react";
import FluxIntro from "./components/FluxIntro";
import FluxLandingPage from "./components/Landingpage";
import FluxAuth from "./components/Login";

function App() {
  const [page, setPage] = useState("intro");

  return (
    <>
      {page === "intro" && (
        <FluxIntro goNext={() => setPage("landing")} />
      )}

      {page === "landing" && (
        <FluxLandingPage goToLogin={() => setPage("login")} />
      )}

      {page === "login" && <FluxAuth />}
    </>
  );
}

export default App;
