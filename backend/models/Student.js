// models/Student.js
const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  studentName: { type: String, required: true },
  roomNo: { type: Number, required: true },
  isEmployee: { type: Boolean, required: true, default: false }, // To differentiate admins
});

module.exports = mongoose.model('Student', studentSchema);
