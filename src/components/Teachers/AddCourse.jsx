import { useState } from "react";
import { FaPlusCircle } from "react-icons/fa"; // Add Course icon

// eslint-disable-next-line react/prop-types
const AddCourse = ({ onAddCourse }) => {
  const [courseName, setCourseName] = useState("");
  const [duration, setDuration] = useState("");
  const [status, setStatus] = useState("Active");
  const [author, setAuthor] = useState("");
  const [progress, setProgress] = useState("0%");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!courseName || !duration || !author) {
      alert("Please fill in all fields.");
      return;
    }

    const newCourse = {
      id: Date.now(), // Unique id based on timestamp
      name: courseName,
      duration,
      status,
      progress,
      author,
      enrolledStudents: [],
    };

    onAddCourse(newCourse); // Add the course to the list
    resetForm();
  };

  const resetForm = () => {
    setCourseName("");
    setDuration("");
    setStatus("Active");
    setAuthor("");
    setProgress("0%");
  };

  return (
    <div className="absolute top-0 left-0 z-50 w-full bg-background flex justify-center ">
      <div className=" p-6 bg-white rounded-lg shadow-lg h-svh ">
        <h2 className="text-3xl font-bold mb-6 text-gray-800 text-center">
          <FaPlusCircle className="inline-block mr-2 text-blue-600" />
          Add a New Course
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="courseName" className="block text-gray-700">
              Course Name
            </label>
            <input
              id="courseName"
              type="text"
              value={courseName}
              onChange={(e) => setCourseName(e.target.value)}
              className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div>
            <label htmlFor="duration" className="block text-gray-700">
              Duration
            </label>
            <input
              id="duration"
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div>
            <label htmlFor="author" className="block text-gray-700">
              Author/Instructor
            </label>
            <input
              id="author"
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="mt-1 block w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              onClick={onAddCourse}
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-200"
            >
              Add Course
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCourse;
