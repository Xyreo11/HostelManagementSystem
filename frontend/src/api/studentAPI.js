import axios from 'axios';

const API_BASE = 'http://localhost:5001/api/students';

export const fetchStudents = async () => {
  const response = await axios.get(API_BASE);
  return response.data;
};
