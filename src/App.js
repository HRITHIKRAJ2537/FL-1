import React, { useState } from 'react';
import { Route, Link, Routes, useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { House, Hdd, GraphUp, Gear, InfoCircle, List } from 'react-bootstrap-icons';

import Dashboard from './components/Dashboard';
import DeviceManager from './components/DeviceManager';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import About from './components/About';
import Login from './components/EnhancedauthPage'; // New Login or Signup component
import Signup from './components/Signup';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const location = useLocation(); // Get current route

  const showSidebar = location.pathname !== '/' && location.pathname !== '/signup';
 // Don't show sidebar on "/"

  return (
    <div className="d-flex">
      {/* Sidebar (hidden on "/") */}
      {showSidebar && (
        <div className={`bg-dark text-white ${sidebarOpen ? 'w-250px' : 'w-60px'} min-vh-100 transition-width`}>
          <div className="d-flex flex-column h-100">
            <button className="btn btn-dark border-0 p-3" onClick={() => setSidebarOpen(!sidebarOpen)}>
              <List size={24} />
            </button>
            <nav className="nav flex-column mt-3">
              <Link to="/dashboard" className="nav-link text-white d-flex align-items-center">
                <House size={24} />
                {sidebarOpen && <span className="ms-3">Dashboard</span>}
              </Link>
              <Link to="/devices" className="nav-link text-white d-flex align-items-center">
                <Hdd size={24} />
                {sidebarOpen && <span className="ms-3">Devices</span>}
              </Link>
              <Link to="/analytics" className="nav-link text-white d-flex align-items-center">
                <GraphUp size={24} />
                {sidebarOpen && <span className="ms-3">Analytics</span>}
              </Link>
              <Link to="/settings" className="nav-link text-white d-flex align-items-center">
                <Gear size={24} />
                {sidebarOpen && <span className="ms-3">Settings</span>}
              </Link>
              <Link to="/about" className="nav-link text-white d-flex align-items-center">
                <InfoCircle size={24} />
                {sidebarOpen && <span className="ms-3">About</span>}
              </Link>
            </nav>
          </div>
        </div>
      )}

      {/* Header and main content wrapped in a parent div */}
      <div className="flex-grow-1">
        <header className="bg-primary text-white p-3 shadow">
          <div className="d-flex justify-content-between align-items-center">
            {/* Show sidebar button first */}
            {showSidebar && (
              <button className="btn btn-primary d-md-none" onClick={() => setSidebarOpen(!sidebarOpen)}>
                <List size={24} />
              </button>
            )}

            {/* Then the header title */}
            <h1 className="h3 mb-0">IoT Automation PRoject</h1>
          </div>
        </header>

        <main className="p-4">
          <Routes>
            {/* Route for Login/Signup page (no sidebar) */}
            <Route path="/" element={<Login />} />

            {/* Routes with sidebar */}
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/devices" element={<DeviceManager />} />
            <Route path="/analytics" element={<Analytics />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/about" element={<About />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
