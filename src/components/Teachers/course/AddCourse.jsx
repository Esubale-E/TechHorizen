import { useContext, useState } from "react";
import { Heading2 } from "../../common/Headings";
import Input from "../../common/Input";
import Button from "../../common/Button";
import courseService from "../../../services/course-service";
import AuthContext from "../../../contexts/authContext";

const AddCourse = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [duration, setDuration] = useState("");
  const [prerequisites, setPrerequisites] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const { state } = useContext(AuthContext);

  const createCourse = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setSuccessMessage("");

    if (!title || !duration) {
      setErrorMessage("Please fill in all required fields!");
      return;
    }

    const newCourse = {
      title,
      description,
      duration,
      prerequisites,
      author: [
        {
          _id: state.user._id,
          name: `${state.user.firstName} ${state.user.lastName}`,
        },
      ],
    };

    try {
      setLoading(true);
      const res = await courseService.create(newCourse);
      console.log("Course Created: ", res.data);
      setSuccessMessage("Course added successfully!");
      setTitle("");
      setDescription("");
      setDuration("");
      setPrerequisites("");
    } catch (err) {
      console.log("Error: ", err.response);
      setErrorMessage("Failed to add course. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white w-full max-w-3xl mx-auto p-8 rounded-lg shadow-lg">
      <Heading2 className="text-center text-blue-600">Add New Course</Heading2>

      {errorMessage && (
        <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
          {errorMessage}
        </div>
      )}

      {successMessage && (
        <div className="bg-green-100 text-green-700 p-4 rounded mb-4">
          {successMessage}
        </div>
      )}

      <form onSubmit={createCourse} className="space-y-6">
        <Input
          label="Course Title"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter course title"
          required
          className="w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
        />
        <div>
          <label
            htmlFor="description"
            className="block text-gray-700 font-medium"
          >
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="Enter course description"
            rows="4"
          />
        </div>
        <Input
          id="duration"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          placeholder="e.g., 10 weeks"
          required
          className="w-full border border-gray-300 rounded-lg focus:ring focus:ring-blue-400"
        />
        <div>
          <label className="block text-gray-700 font-medium">
            Prerequisites
          </label>
          <textarea
            id="prerequisites"
            value={prerequisites}
            onChange={(e) => setPrerequisites(e.target.value)}
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-400"
            placeholder="List prerequisites (optional)"
            rows="4"
          />
        </div>
        <Button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg"
        >
          {loading ? "Adding..." : "Add Course"}
        </Button>
      </form>
    </div>
  );
};

export default AddCourse;
