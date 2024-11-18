import axios from 'axios';

const API_BASE = 'http://localhost:5001/api/complaints';

export const submitComplaint = async (data) => {
  const response = await axios.post(`${API_BASE}/submit`, data);
  return response.data;
};

export const fetchComplaints = async (filters) => {
  const response = await axios.get(API_BASE, { params: filters });
  return response.data;
};

export const updateComplaintStatus = async (id, status) => {
  const response = await axios.patch(`${API_BASE}/${id}`, { status });
  return response.data;
};

export const deleteComplaint = async (id) => {
  const response = await axios.delete(`${API_BASE}/${id}`);
  return response.data;
};