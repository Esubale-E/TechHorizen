import { useContext, useRef, useState } from "react";
import blogService from "../../services/blog-service";
import AuthContext from "./../../contexts/authContext";

const AddBlog = () => {
  const imageRef = useRef();
  const [textRow, setTextRow] = useState(3);
  const { state } = useContext(AuthContext);
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    detail: "",
    tag: "",
    date: new Date().toISOString(),
    author: {
      _id: state.user._id,
    },
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const submitData = new FormData();
      submitData.append("title", formData.title);
      submitData.append("category", formData.category);
      submitData.append("detail", formData.detail);
      submitData.append("tag", formData.tag);
      submitData.append("author[_id]", formData.author._id);
      submitData.append("image", formData.image);

      blogService
        .createWithFile(submitData)
        .then((res) => {
          console.log("New blog created:", res.data);
          setFormData({
            ...formData,
            title: "",
            category: "",
            detail: "",
            tag: "",
            image: null,
          });
          if (imageRef.current) {
            imageRef.current.value = ""; // Reset the file input
          }
        })
        .catch((err) => {
          console.error("Error creating blog:", err);
        });
    } catch (error) {
      console.error("Error creating blog:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto md:my-5 md:mx-10 p-6 bg-white rounded-lg shadow-md flex flex-col gap-4"
    >
      <h1 className="text-2xl font-bold text-center text-gray-800">
        Create a New Blog Post
      </h1>

      {/* Title Field */}
      <div>
        <label
          htmlFor="title"
          className="block text-sm font-medium text-gray-700"
        >
          Title:
        </label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          minLength="3"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Category Field */}
      <div>
        <label
          htmlFor="category"
          className="block text-sm font-medium text-gray-700"
        >
          Category:
        </label>
        <input
          type="text"
          id="category"
          name="category"
          value={formData.category}
          onChange={handleChange}
          required
          minLength="3"
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Detail Field */}
      <div>
        <label
          htmlFor="detail"
          className="block text-sm font-medium text-gray-700"
        >
          Detail:
        </label>
        <textarea
          id="detail"
          name="detail"
          value={formData.detail}
          onChange={handleChange}
          onFocus={() => setTextRow(6)}
          required
          minLength="10"
          rows={textRow}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500 resize-none"
        />
      </div>

      {/* Tag Field */}
      <div>
        <label
          htmlFor="tag"
          className="block text-sm font-medium text-gray-700"
        >
          Tag:
        </label>
        <input
          type="text"
          id="tag"
          name="tag"
          value={formData.tag}
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Image Upload */}
      <div>
        <label
          htmlFor="image"
          className="block text-sm font-medium text-gray-700"
        >
          Upload Image:
        </label>
        <input
          ref={imageRef}
          type="file"
          id="image"
          name="image"
          accept="image/*"
          onChange={handleChange}
          className="w-full mt-1 p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
      >
        Submit
      </button>
    </form>
  );
};

export default AddBlog;
