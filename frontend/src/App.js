import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './components/LandingPage';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import RaiseComplaint from './components/RaiseComplaint';
import ComplaintList from './components/ComplaintList';
import './App.css';
import './components/RaiseComplaint.css'; // Ensure this path is correct

const App = () => {
  return (
    <>
      <Navbar />
      <div className="app-container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/raise-complaint" element={<RaiseComplaint />} />
          <Route path="/view-complaints" element={<ComplaintList />} />
        </Routes>
      </div>
    </>
  );
};

export default App;