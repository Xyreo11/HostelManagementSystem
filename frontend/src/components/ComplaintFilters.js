import React from 'react';
import './ComplaintFilters.css';

const ComplaintFilters = ({ filters, setFilters }) => {
  const handleSortChange = (e) => {
    setFilters({ ...filters, sort: e.target.value });
  };

  const handleFlairChange = (e) => {
    setFilters({ ...filters, flair: e.target.value });
  };

  const handleRoomChange = (e) => {
    setFilters({ ...filters, roomNo: e.target.value });
  };

  const handlePriorityChange = (e) => {
    setFilters({ ...filters, priority: e.target.value });
  };

  return (
    <div className="complaint-filters">
      <select value={filters.sort} onChange={handleSortChange}>
        <option value="newest">Newest First</option>
        <option value="oldest">Oldest First</option>
      </select>

      <input
        type="text"
        placeholder="Filter by Room No"
        value={filters.roomNo}
        onChange={handleRoomChange}
      />

      <select value={filters.flair} onChange={handleFlairChange}>
        <option value="">All Categories</option>
        <option value="Electrical">Electrical</option>
        <option value="Carpentry">Carpentry</option>
        <option value="Plumbing">Plumbing</option>
        <option value="Others">Others</option>
      </select>

      <select value={filters.priority} onChange={handlePriorityChange}>
        <option value="">All Priorities</option>
        <option value="Pending">Pending</option>
        <option value="Completed">Completed</option>
        <option value="High Priority">High Priority</option>
      </select>
    </div>
  );
};

export default ComplaintFilters;