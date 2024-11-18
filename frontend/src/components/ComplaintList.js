import React, { useEffect, useState, useCallback } from 'react';
import { fetchComplaints } from '../api/complaintAPI';
import ComplaintCard from './ComplaintCard';
import ComplaintFilters from './ComplaintFilters';
import './ComplaintList.css';

const ComplaintList = () => {
  const [complaints, setComplaints] = useState([]);
  const [filters, setFilters] = useState({ sort: 'newest', flair: '', roomNo: '', priority: '' });

  const fetchFilteredComplaints = useCallback(async () => {
    try {
      const data = await fetchComplaints(filters);
      setComplaints(data);
    } catch (err) {
      alert('Error fetching complaints.');
    }
  }, [filters]);

  useEffect(() => {
    fetchFilteredComplaints();
  }, [fetchFilteredComplaints]);

  const filteredComplaints = complaints.filter((complaint) => {
    if (filters.priority && complaint.status !== filters.priority) {
      return false;
    }
    if (filters.flair && complaint.flair !== filters.flair) {
      return false;
    }
    if (filters.roomNo && complaint.roomNo !== parseInt(filters.roomNo)) {
      return false;
    }
    return true;
  });

  return (
    <div className="complaint-list">
      <h2>View Complaints</h2>
      <ComplaintFilters filters={filters} setFilters={setFilters} />
      <div className="complaints-container">
        {filteredComplaints.map((complaint) => (
          <ComplaintCard key={complaint._id} complaint={complaint} onDelete={(id) => setComplaints(complaints.filter(c => c._id !== id))} />
        ))}
      </div>
    </div>
  );
};

export default ComplaintList;