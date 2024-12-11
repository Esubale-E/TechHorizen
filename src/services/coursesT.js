const courses = [
  {
    id: 1,
    name: "Introduction to Programming",
    duration: "3 months",
    status: "Active",
    progress: "60%",
    author: "Dr. Alan Turing", // Teacher name
    enrolledStudents: [
      { name: "John Doe", studentId: "S123", grade: "B" },
      { name: "Jane Smith", studentId: "S124", grade: "A" },
      { name: "Alice Johnson", studentId: "S125", grade: "C" },
    ],
  },
  {
    id: 2,
    name: "Data Structures and Algorithms",
    duration: "4 months",
    status: "Completed",
    progress: "100%",
    author: "Dr. Alan Turing", // Teacher name
    enrolledStudents: [
      { name: "Bob Brown", studentId: "S126", grade: "A" },
      { name: "Tom White", studentId: "S127", grade: "B+" },
    ],
  },
  {
    id: 3,
    name: "Database Management Systems",
    duration: "5 months",
    status: "Active",
    progress: "40%",
    author: "Dr. Alan Turing", // Teacher name
    enrolledStudents: [
      { name: "Mary Black", studentId: "S128", grade: "B" },
      { name: "David Blue", studentId: "S129", grade: "C+" },
    ],
  },
  {
    id: 4,
    name: "Web Development with JavaScript",
    duration: "6 months",
    status: "Active",
    progress: "80%",
    author: "Dr. Alan Turing", // Teacher name
    enrolledStudents: [
      { name: "Emma Green", studentId: "S130", grade: "A-" },
      { name: "Michael Red", studentId: "S131", grade: "B+" },
      { name: "Liam Yellow", studentId: "S132", grade: "A" },
    ],
  },
  {
    id: 5,
    name: "Computer Networks",
    duration: "3 months",
    status: "Completed",
    progress: "100%",
    author: "Dr. Alan Turing", // Teacher name
    enrolledStudents: [
      { name: "Sophia Gray", studentId: "S133", grade: "A" },
      { name: "Lucas Violet", studentId: "S134", grade: "B" },
    ],
  },
  {
    id: 6,
    name: "Artificial Intelligence",
    duration: "4 months",
    status: "Active",
    progress: "50%",
    author: "Dr. Alan Turing", // Teacher name
    enrolledStudents: [
      { name: "Alice White", studentId: "S135", grade: "B+" },
      { name: "Jack Green", studentId: "S136", grade: "C" },
    ],
  },
  {
    id: 7,
    name: "Machine Learning",
    duration: "5 months",
    status: "Completed",
    progress: "100%",
    author: "Dr. Alan Turing", // Teacher name
    enrolledStudents: [
      { name: "Grace Brown", studentId: "S137", grade: "A" },
      { name: "Daniel White", studentId: "S138", grade: "A-" },
    ],
  },
  {
    id: 8,
    name: "Mobile App Development",
    duration: "3 months",
    status: "Active",
    progress: "30%",
    author: "Dr. Alan Turing", // Teacher name
    enrolledStudents: [
      { name: "Sophia Gold", studentId: "S139", grade: "B" },
      { name: "Liam Black", studentId: "S140", grade: "C+" },
    ],
  },
  {
    id: 9,
    name: "Cloud Computing",
    duration: "2 months",
    status: "Completed",
    progress: "100%",
    author: "Dr. Alan Turing", // Teacher name
    enrolledStudents: [
      { name: "Liam White", studentId: "S141", grade: "A" },
      { name: "Emma Black", studentId: "S142", grade: "B+" },
    ],
  },
  {
    id: 10,
    name: "Cybersecurity Fundamentals",
    duration: "3 months",
    status: "Active",
    progress: "20%",
    author: "Dr. Alan Turing", // Teacher name
    enrolledStudents: [
      { name: "Oliver Purple", studentId: "S143", grade: "C+" },
      { name: "Charlotte Red", studentId: "S144", grade: "B" },
    ],
  },
  {
    id: 11,
    name: "DevOps and Automation",
    duration: "4 months",
    status: "Active",
    progress: "60%",
    author: "Dr. Alan Turing", // Teacher name
    enrolledStudents: [
      { name: "Emily Grey", studentId: "S145", grade: "A" },
      { name: "David Blue", studentId: "S146", grade: "B+" },
    ],
  },
  {
    id: 12,
    name: "Blockchain Technology",
    duration: "5 months",
    status: "Active",
    progress: "50%",
    author: "Dr. Alan Turing", // Teacher name
    enrolledStudents: [
      { name: "Sophia Brown", studentId: "S147", grade: "A-" },
      { name: "Michael Green", studentId: "S148", grade: "B+" },
    ],
  },
  {
    id: 14,
    name: "Advanced JavaScript Programming",
    duration: "3 months",
    status: "Active",
    progress: "70%",
    author: "Dr. Grace Hopper", // New teacher
    enrolledStudents: [
      { name: "Alice Johnson", studentId: "S149", grade: "B+" },
      { name: "John Smith", studentId: "S150", grade: "A" },
    ],
  },
  {
    id: 15,
    name: "React.js for Web Development",
    duration: "4 months",
    status: "Active",
    progress: "40%",
    author: "Prof. Tim Berners-Lee", // New teacher
    enrolledStudents: [
      { name: "Sophia Gold", studentId: "S151", grade: "B" },
      { name: "Lucas Violet", studentId: "S152", grade: "A-" },
    ],
  },
  {
    id: 16,
    name: "Introduction to Data Science",
    duration: "5 months",
    status: "Completed",
    progress: "100%",
    author: "Dr. Katharine Johnson", // New teacher
    enrolledStudents: [
      { name: "Emily Brown", studentId: "S153", grade: "A" },
      { name: "Michael Red", studentId: "S154", grade: "A-" },
    ],
  },
  {
    id: 17,
    name: "Advanced Cloud Computing with AWS",
    duration: "6 months",
    status: "Active",
    progress: "50%",
    author: "Dr. Werner Vogels", // New teacher
    enrolledStudents: [
      { name: "David Blue", studentId: "S155", grade: "B+" },
      { name: "Grace Green", studentId: "S156", grade: "A-" },
    ],
  },
  {
    id: 18,
    name: "Full Stack Web Development",
    duration: "5 months",
    status: "Active",
    progress: "60%",
    author: "Prof. Sheryl Sandberg", // New teacher
    enrolledStudents: [
      { name: "Emma Black", studentId: "S157", grade: "A-" },
      { name: "Liam Yellow", studentId: "S158", grade: "B+" },
    ],
  },
  {
    id: 19,
    name: "Ethical Hacking and Penetration Testing",
    duration: "3 months",
    status: "Completed",
    progress: "100%",
    author: "Dr. Kevin Mitnick", // New teacher
    enrolledStudents: [
      { name: "Charlotte Red", studentId: "S159", grade: "A" },
      { name: "Oliver Purple", studentId: "S160", grade: "B+" },
    ],
  },
  {
    id: 20,
    name: "Android App Development",
    duration: "4 months",
    status: "Active",
    progress: "30%",
    author: "Dr. Andrei Alexandrescu", // New teacher
    enrolledStudents: [
      { name: "Sophia Blue", studentId: "S161", grade: "C+" },
      { name: "Emily White", studentId: "S162", grade: "B" },
    ],
  },
  {
    id: 21,
    name: "Game Development with Unity",
    duration: "5 months",
    status: "Active",
    progress: "40%",
    author: "Prof. John Carmack", // New teacher
    enrolledStudents: [
      { name: "Jack Green", studentId: "S163", grade: "B" },
      { name: "Sophia Yellow", studentId: "S164", grade: "A" },
    ],
  },
  {
    id: 22,
    name: "DevOps for Developers",
    duration: "3 months",
    status: "Completed",
    progress: "100%",
    author: "Dr. Gene Kim", // New teacher
    enrolledStudents: [
      { name: "Lucas Brown", studentId: "S165", grade: "A-" },
      { name: "Daniel Blue", studentId: "S166", grade: "B" },
    ],
  },
  {
    id: 23,
    name: "Blockchain Development with Ethereum",
    duration: "6 months",
    status: "Active",
    progress: "50%",
    author: "Prof. Vitalik Buterin", // New teacher
    enrolledStudents: [
      { name: "Mary Green", studentId: "S167", grade: "A-" },
      { name: "Oliver White", studentId: "S168", grade: "B+" },
    ],
  },
];

export default courses;
