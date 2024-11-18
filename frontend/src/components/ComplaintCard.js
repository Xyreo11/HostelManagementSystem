import React, { useState } from 'react';
import { updateComplaintStatus, deleteComplaint } from '../api/complaintAPI';
import './ComplaintCard.css';

const ComplaintCard = ({ complaint, onDelete }) => {
  const [priority, setPriority] = useState(complaint.status);
  const [showConfirm, setShowConfirm] = useState(false);

  const handlePriorityChange = async (newPriority) => {
    try {
      await updateComplaintStatus(complaint._id, newPriority);
      setPriority(newPriority);
    } catch (err) {
      alert('Error updating complaint status.');
    }
  };

  const handleDelete = async () => {
    try {
      await deleteComplaint(complaint._id);
      onDelete(complaint._id);
    } catch (err) {
      alert('Error deleting complaint.');
    }
  };

  const getPriorityClass = () => {
    switch (priority) {
      case 'Completed':
        return 'completed';
      case 'High Priority':
        return 'high-priority';
      default:
        return 'pending';
    }
  };

  return (
    <div className={`complaint-card ${getPriorityClass()}`}>
      <div className="card-header">
        <h4>{complaint.studentName}</h4>
        <span>{complaint.flair}</span>
        <span className="delete-icon" onClick={() => setShowConfirm(true)}>🗑️</span>
      </div>
      <p><strong>Room No:</strong> {complaint.roomNo}</p>
      <p><strong>Complaint:</strong> {complaint.text}</p>
      <p className="timestamp"><strong>Raised on:</strong> {new Date(complaint.createdAt).toLocaleString()}</p>
      <div className="priority-buttons">
        <button onClick={() => handlePriorityChange('Pending')}>Pending</button>
        <button onClick={() => handlePriorityChange('Completed')}>Completed</button>
        <button onClick={() => handlePriorityChange('High Priority')}>High Priority</button>
      </div>
      {showConfirm && (
        <div className="confirm-popup">
          <p>Are you sure you want to permanently delete this complaint?</p>
          <button onClick={handleDelete}>Proceed</button>
          <button onClick={() => setShowConfirm(false)}>Cancel</button>
        </div>
      )}
    </div>
  );
};

export default ComplaintCard;