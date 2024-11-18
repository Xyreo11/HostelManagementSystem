// models/Complaint.js
const mongoose = require('mongoose');

const complaintSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  roomNo: { type: Number, required: true },
  flair: { type: String, enum: ['Electrical', 'Carpentry', 'Plumbing', 'Others'], required: true },
  complaintText: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  status: { 
    type: String, 
    enum: ['Pending', 'Completed', 'High Priority'], 
    default: 'Pending' 
  },
});

module.exports = mongoose.model('Complaint', complaintSchema);
