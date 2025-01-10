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

  const { state } = useContext(AuthContext);

  const createCourse = (e) => {
    e.preventDefault();

    if (!title || !duration) {
      alert("Please fill in all required fields!");
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
    
    courseService
      .create(newCourse)
      .then((res) => {
        console.log("data:-", res.data);
        // Clear the form
        setTitle("");
        setDescription("");
        setDuration("");
        setPrerequisites("");
      })
      .catch((err) => console.log("error:-", err.response));
  };

  return (
    <div className="bg-white w-full p-6 rounded-lg shadow-lg">
      <Heading2>Add New Course</Heading2>

      <form onSubmit={createCourse} className="space-y-4">
        <Input
          label="Course Title"
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
            Description
          </label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
        />
        <div>
          <label className="block text-gray-700 font-medium">
            Prerequisites
          </label>
          <textarea
            id="prerequisites"
            value={prerequisites}
            onChange={(e) => setPrerequisites(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            rows="4"
          />
        </div>
        <div>
          <div className="flex items-center space-x-2"></div>
        </div>
        <Button type="submit">Add Course</Button>
      </form>
    </div>
  );
};

export default AddCourse;
