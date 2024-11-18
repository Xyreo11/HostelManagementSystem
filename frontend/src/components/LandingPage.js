import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to PESU Boys Hostel Management System</h1>
      <p>
        Managing your hostel experience just got easier. Whether you're a student or a hostel warden, our platform offers an intuitive and streamlined way to raise complaints, track issues, and stay organized. With features designed to simplify communication and enhance the management process, we aim to provide a smooth and hassle-free experience for both students and wardens. Join us in making your hostel stay more comfortable!
      </p>
      <div className="cta-buttons">
        <Link to="/raise-complaint" className="btn">Submit a Complaint</Link>
        <Link to="/view-complaints" className="btn">View Complaint List</Link>
        <Link to="/about" className="btn">Learn More</Link>
      </div>
    </div>
  );
};

export default LandingPage;