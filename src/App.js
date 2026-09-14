// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Global Layout Components
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';     // Mobile menu
import Rightbar from './components/layout/Rightbar';   // Floating theme toggle/scroll top
import Footer from './components/layout/Footer';

// Import Pages
import Home from './pages/Home';
import Models from './pages/Models';   // (Optional page)
import Contact from './pages/Contact'; // (Optional page)

// Import Global Styles (if you have any)
import './App.css'; 

function App() {
  return (
    <Router>
      <div className="app">
        
        {/* These stay on EVERY page */}
        <Navbar />
        <Sidebar />
        <Rightbar />

        {/* This is where the pages swap out based on the URL */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/models" element={<Models />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        {/* Footer stays on every page */}
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;