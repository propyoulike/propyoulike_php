// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Pages (use placeholders if the real component isn't ready)
import BuildersPage from "@/pages/BuildersPage"; // replace with real component when ready
import ProjectsPage from "@/pages/ProjectsPage";
import PropertiesPage from "@/pages/PropertiesPage";
import UsersPage from "@/pages/UsersPage";
import TransactionsPage from "@/pages/TransactionsPage";
import ServiceProvidersPage from "@/pages/ServiceProvidersPage";

// Temporary placeholders for pages
const Pages = {
  BuildersPage: BuildersPage || (() => <Placeholder name="Builders" />),
  ProjectsPage: ProjectsPage || (() => <Placeholder name="Projects" />),
  PropertiesPage: PropertiesPage || (() => <Placeholder name="Properties" />),
  UsersPage: UsersPage || (() => <Placeholder name="Users" />),
  TransactionsPage: TransactionsPage || (() => <Placeholder name="Transactions" />),
  ServiceProvidersPage: ServiceProvidersPage || (() => <Placeholder name="Service Providers" />),
};

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow container mx-auto p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/builders" />} />
            <Route path="/builders" element={<Pages.BuildersPage />} />
            <Route path="/projects" element={<Pages.ProjectsPage />} />
            <Route path="/properties" element={<Pages.PropertiesPage />} />
            <Route path="/users" element={<Pages.UsersPage />} />
            <Route path="/transactions" element={<Pages.TransactionsPage />} />
            <Route path="/service-providers" element={<Pages.ServiceProvidersPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;