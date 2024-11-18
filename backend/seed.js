const mongoose = require('mongoose');
const Student = require('./models/Student');
const Complaint = require('./models/Complaint');

const seedDatabase = async () => {
  await mongoose.connect('mongodb://localhost:27017/hostel_management', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  // Clear existing data
  await Student.deleteMany({});
  await Complaint.deleteMany({});

  // Seed students
  const students = [
    { studentName: 'John Doe', roomNo: 101 },
    { studentName: 'Jane Smith', roomNo: 102 },
    { studentName: 'Alice Johnson', roomNo: 103 },
    { studentName: 'Diana Ross', roomNo: 104 },
    { studentName: 'Eve Adams', roomNo: 105 },
  ];
  await Student.insertMany(students);

  // Generate random complaints
  const generateRandomComplaint = () => {
    const studentNames = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Diana Ross', 'Eve Adams'];
    const flairs = ['Electrical', 'Carpentry', 'Plumbing', 'Others'];
    const complaintTexts = [
      'The light in my room is not working.',
      'The sink is leaking.',
      'The door handle is broken.',
      'The lightbulb is flickering.',
      'The internet is very slow.',
    ];
    const randomIndex = (arr) => Math.floor(Math.random() * arr.length);

    return {
      studentName: studentNames[randomIndex(studentNames)],
      roomNo: Math.floor(Math.random() * 301) + 100, // Random room number between 100 and 400
      flair: flairs[randomIndex(flairs)],
      complaintText: complaintTexts[randomIndex(complaintTexts)],
      createdAt: new Date(),
      status: 'Pending',
    };
  };

  // Seed complaints
  const complaints = Array.from({ length: 150 }, generateRandomComplaint);
  await Complaint.insertMany(complaints);

  console.log('Database seeded successfully!');

  // Query the database to view the seeded data
  const allStudents = await Student.find();
  const allComplaints = await Complaint.find();
  console.log(allStudents);
  console.log(allComplaints);

  mongoose.connection.close();
};

seedDatabase();