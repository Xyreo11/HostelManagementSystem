import React, { useState, useEffect } from 'react';
import { submitComplaint } from '../api/complaintAPI';
import './RaiseComplaint.css';

const RaiseComplaint = () => {
  const token = localStorage.getItem('token');
  const user = token ? JSON.parse(atob(token.split('.')[1])) : null;

  const [formData, setFormData] = useState({
    studentName: user ? user.name : '',
    roomNo: user ? user.roomNo : '',
    flair: '',
    complaintText: '',
  });

  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        studentName: user.name,
        roomNo: user.roomNo,
      }));
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await submitComplaint(formData);
      alert('Complaint submitted successfully.');
      setFormData({ studentName: user.name, roomNo: user.roomNo, flair: '', complaintText: '' });
    } catch (err) {
      alert('Error submitting complaint.');
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="raise-complaint">
      <h2>Raise a Complaint</h2>
      <form onSubmit={handleSubmit}>
        <label>Student Name:</label>
        <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} readOnly />
        <label>Room No:</label>
        <input type="number" name="roomNo" value={formData.roomNo} onChange={handleChange} readOnly />
        <label>Category:</label>
        <select name="flair" value={formData.flair} onChange={handleChange} required>
          <option value="">Select a category</option>
          <option value="Electrical">Electrical</option>
          <option value="Carpentry">Carpentry</option>
          <option value="Plumbing">Plumbing</option>
          <option value="Others">Others</option>
        </select>
        <label>Complaint:</label>
        <textarea name="complaintText" value={formData.complaintText} onChange={handleChange} required />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RaiseComplaint;