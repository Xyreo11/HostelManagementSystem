import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">Hostel Management System</div>
      <div className="navbar-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/contact">Contact Us</Link>
        <Link to="/raise-complaint">Raise a Complaint</Link>
        <Link to="/view-complaints">Complaints</Link>
      </div>
    </nav>
  );
};

export default Navbar;