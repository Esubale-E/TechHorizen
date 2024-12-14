import { useState } from "react";
import PropTypes from "prop-types";
import { Heading2 } from "./../common/Headings";
import Input from "./../common/Input";
import { FaTimes } from "react-icons/fa";
import Button from "./../common/Button";

const AddCourse = ({ onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [prerequisites, setPrerequisites] = useState("");
  const [lessons, setLessons] = useState([]);
  const [lessonTitle, setLessonTitle] = useState("");

  const handleAddLesson = () => {
    if (lessonTitle.trim()) {
      setLessons([...lessons, { title: lessonTitle }]);
      setLessonTitle("");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !duration) {
      alert("Please fill in all required fields!");
      return;
    }

    const newCourse = {
      title,
      description,
      duration,
      prerequisites,
      lessons,
    };

    // Handle adding the course to your courses list (e.g., API or state update)
    console.log("New Course Added:", newCourse);

    // Clear the form and close modal
    setTitle("");
    setDescription("");
    setDuration("");
    setPrerequisites("");
    setLessons([]);
  };

  return (
    <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="bg-white relative w-full max-w-md p-6 rounded-lg shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
        >
          <FaTimes size={24} />
        </button>
        <Heading2>Add New Course</Heading2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            label="Course Title"
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter course title"
            required
          />
          <div>
            <label
              htmlFor="description"
              className="block text-gray-700 font-medium"
            >
              Description <span className="text-red-500">*</span>
            </label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter course description"
              rows="4"
              required
            />
          </div>
          <div className="flex gap-4">
            <Input
              type="text"
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., 10 weeks"
              required
            />
            <Input
              label=" Prerequisites (Optional)"
              type="text"
              id="prerequisites"
              value={prerequisites}
              onChange={(e) => setPrerequisites(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="e.g., Basic JavaScript knowledge"
            />
          </div>
          <div>
            <label
              htmlFor="lessons"
              className="block text-gray-700 font-medium"
            ></label>
            <div className="flex items-center space-x-2">
              <input
                label="Lessons (Optional)"
                type="text"
                id="lessons"
                value={lessonTitle}
                onChange={(e) => setLessonTitle(e.target.value)}
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter lesson title"
              />
              <button
                type="button"
                onClick={handleAddLesson}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Add
              </button>
            </div>
            <ul className="mt-2 list-disc pl-5 text-gray-700">
              {lessons.map((lesson, index) => (
                <li key={index}>{lesson.title}</li>
              ))}
            </ul>
          </div>
          <div>
            <Button type="submit">Add Course</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddCourse.propTypes = {
  onAddCourse: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AddCourse;
