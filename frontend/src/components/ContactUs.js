import React from 'react';
import { Link } from 'react-router-dom';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h1>Contact Us</h1>
      <p>We're here to help! Whether you have a question, suggestion, or feedback, feel free to reach out to us.</p>
      <p>Email: support@hostelmanagement.com</p>
      <p>Phone Number: +91 1234567890</p>
      <p>Address: PESU BOYS HOSTEL OFFICE, PES UNIVERSITY</p>
      <br></br>
      <div className="contact-buttons">
        <Link to="/raise-complaint" className="btn">Submit a Complaint</Link>
      </div>
    </div>
  );
};

export default ContactUs;