import { useState } from "react";
import PropTypes from "prop-types";
import { Heading2 } from "./../common/Headings";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [prerequisites, setPrerequisites] = useState("");
  const [lessons, setLessons] = useState([]);
  const [lessonTitle, setLessonTitle] = useState("");
  const [isOpen, setIsOpen] = useState(false); // Modal state

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

    console.log("New Course Added:", newCourse);
    // Handle adding the course to your courses list (e.g., API or state update)

    // Clear the form and close modal
    setTitle("");
    setDescription("");
    setDuration("");
    setPrerequisites("");
    setLessons([]);
    setIsOpen(false);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null; // If the modal is not open, don't render anything

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg"
      >
        Add New Course
      </button>

      {/* Modal */}
      <div className="fixed inset-0 z-50 bg-gray-800 bg-opacity-50 flex justify-center items-center">
        <div className="bg-white w-full max-w-md p-6 rounded-lg shadow-lg">
          <Heading2>Add New Course</Heading2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Course Title */}
            <div>
              <label
                htmlFor="title"
                className="block text-gray-700 font-medium"
              >
                Course Title <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter course title"
                required
              />
            </div>

            {/* Course Description */}
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

            {/* Course Duration */}
            <div>
              <label
                htmlFor="duration"
                className="block text-gray-700 font-medium"
              >
                Duration <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., 10 weeks"
                required
              />
            </div>

            {/* Prerequisites */}
            <div>
              <label
                htmlFor="prerequisites"
                className="block text-gray-700 font-medium"
              >
                Prerequisites (Optional)
              </label>
              <input
                type="text"
                id="prerequisites"
                value={prerequisites}
                onChange={(e) => setPrerequisites(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="e.g., Basic JavaScript knowledge"
              />
            </div>

            {/* Lessons */}
            <div>
              <label
                htmlFor="lessons"
                className="block text-gray-700 font-medium"
              >
                Lessons (Optional)
              </label>
              <div className="flex items-center space-x-2">
                <input
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

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="w-full bg-green-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-700 transition-all duration-200"
              >
                Add Course
              </button>
            </div>
          </form>

          {/* Close Button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-2 right-2 text-gray-600 hover:text-gray-800"
          >
            &times;
          </button>
        </div>
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
