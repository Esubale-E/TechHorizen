import { useContext, useRef, useState } from "react";
import blogService from "../../services/blog-service";
import AuthContext from "./../../contexts/authContext";
import Input from "../common/Input";
import Button from "../common/Button";
import { Heading2 } from "../common/Headings";

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
      <Heading2>Create a New Blog Post</Heading2>

      {/* Title Field */}
      <Input
        id="title"
        name="title"
        value={formData.title}
        onChange={handleChange}
        minLength="3"
        required
      />

      {/* Category Field */}
      <Input
        id="category"
        name="category"
        value={formData.category}
        onChange={handleChange}
        minLength="3"
        required
      />
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
          className="w-full mt-1 p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 resize-none"
        />
      </div>
      {/* Tag Field */}
      <Input
        type="text"
        id="tag"
        name="tag"
        value={formData.tag}
        onChange={handleChange}
      />
      {/* Image Upload */}
      <Input
        ref={imageRef}
        type="file"
        id="image"
        name="image"
        accept="image/*"
        onChange={handleChange}
      />
      {/* Submit Button */}
      <Button type="submit">Submit</Button>
    </form>
  );
};

export default AddBlog;
