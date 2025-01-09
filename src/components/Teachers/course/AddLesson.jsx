/* eslint-disable react/prop-types */
import { useState } from "react";
import Button from "../../common/Button";
import Input from "../../common/Input";
import { Heading2 } from "../../common/Headings";
import { FaTimes } from "react-icons/fa";

const AddLesson = ({ onAddLesson, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null); // Single file

  const handleFileChange = (e) => {
    setFile(e.target.files[0]); // Store the single selected file
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !file) {
      alert("Please fill in all required fields and upload a file!");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("description", description);
    formData.append("file", file); // Use "file" to match backend field name

    onAddLesson(formData);

    // Clear the form
    setTitle("");
    setDescription("");
    setFile(null);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
      <div className="m-6 p-6 w-full max-w-lg bg-white rounded-lg shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
        >
          <FaTimes size={28} />
        </button>
        <Heading2>Add New Lesson</Heading2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter lesson title"
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
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 hover:ring-2 hover:ring-blue-500"
              placeholder="Enter lesson description"
              rows="4"
              required
            />
          </div>
          <Input
            label="Resource (required)"
            type="file"
            id="file"
            onChange={handleFileChange}
            required
          />

          {/* Submit Button */}
          <div>
            <Button type="submit">Add Lesson</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddLesson;
