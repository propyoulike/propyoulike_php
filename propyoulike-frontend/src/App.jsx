import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import BuildersPage from "./pages/BuildersPage";
import ProjectsPage from "./pages/ProjectsPage";
import PropertiesPage from "./pages/PropertiesPage";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/builders" />} />
            <Route path="/builders" element={<BuildersPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/properties" element={<PropertiesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;