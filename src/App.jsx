import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import IntroPage from './pages/IntroPage';
import HomePage from './pages/HomePage';
import CarbonPage from './pages/CarbonPage';
import DashboardPage from './pages/DashboardPage';
import DevicePage from './pages/DevicePage';
import RealtimePage from './pages/RealtimePage';
import BillingPage from './pages/BillingPage';
import AlertsPage from './pages/AlertsPage';
import SignupPage from './pages/SignupPage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<IntroPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/carbon" element={<CarbonPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/device" element={<DevicePage />} />
                <Route path="/realtime" element={<RealtimePage />} />
                <Route path="/billing" element={<BillingPage />} />
                <Route path="/alerts" element={<AlertsPage />} />
                <Route path="/signup" element={<SignupPage />} />
            </Routes>
        </Router>
    );
}

export default App;
