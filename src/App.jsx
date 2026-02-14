import { useState, useEffect } from "react";
import FluxIntro from "./components/Intro";
import Login from "./components/Login";

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 4000); // 4 seconds

    return () => clearTimeout(timer);
  }, []);

  return showIntro ? <FluxIntro /> : <Login />;
}

export default App;
