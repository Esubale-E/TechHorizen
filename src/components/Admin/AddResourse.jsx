import { useState, useContext } from "react";
import { Heading2 } from "../common/Headings";
import Input from "../common/Input";
import Button from "../common/Button";
import SelectInput from "../common/SelectInput";
import TextAreaInput from "../common/TextAreaInput";
import resourceService from "../../services/resource-service";
import AuthContext from "../../contexts/authContext";
import AutoCompleteInput from "../common/AutoCompleteInput";
import {
  resourceTypeOptions,
  categoryOptions,
} from "../../services/static/resourceOptions";

const AddResource = () => {
  const { state } = useContext(AuthContext);
  const [message, setMessage] = useState("");
  const [data, setData] = useState({
    resourceType: "File",
    title: "",
    description: "",
    category: "",
    file: null,
    url: "",
    author: {
      _id: state.user._id,
    },
  });

  const resetForm = () => {
    setData({
      resourceType: "File",
      title: "",
      description: "",
      category: "",
      file: null,
      url: "",
      author: {
        _id: state.user._id,
      },
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Uploading...");

    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("type", data.resourceType);
      formData.append(
        "author",
        JSON.stringify({
          _id: state.user._id,
          name: `${state.user.firstName} ${state.user.lastName}`,
        })
      );

      if (data.resourceType === "File" || data.resourceType === "Video") {
        if (!data.file) {
          setMessage("Please select a file to upload.");
          return;
        }
        formData.append("file", data.file);
      } else if (data.resourceType === "Link") {
        if (!data.url) {
          setMessage("Please provide a valid URL.");
          return;
        }
        formData.append("url", data.url);
      }

      const response = await resourceService.createWithFile(formData);
      console.log(response.data);
      setMessage("Resource uploaded successfully!");
      resetForm();
    } catch (err) {
      console.error("Error uploading resource", err);
      setMessage(
        err.response?.data?.message || "Failed to upload the resource."
      );
    }
  };

  return (
    <div className="w-full mx-16 mt-10 p-6 bg-white rounded-lg shadow-md">
      <Heading2>Upload Resource</Heading2>
      {message && (
        <p
          className={`text-center mb-4 ${
            message.includes("successfully") ? "text-green-600" : "text-red-600"
          }`}
        >
          {message}
        </p>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Resource Type */}
        <SelectInput
          label="Resource Type"
          id="resourceType"
          name="resourceType"
          value={data.resourceType}
          onChange={handleChange}
          options={resourceTypeOptions}
        />
        {/* Resource Category */}
        <AutoCompleteInput
          label="Resource Category"
          name="category"
          value={data.category}
          onChange={handleChange}
          options={categoryOptions}
          placeholder="Start typing to search..."
        />

        {/* Title */}
        <Input
          type="text"
          id="title"
          name="title"
          label="Title"
          value={data.title}
          onChange={handleChange}
          required
        />

        {/* Description */}
        <TextAreaInput
          id="description"
          name="description"
          label="Description"
          value={data.description}
          onChange={handleChange}
          rows="4"
        />

        {/* File Input or URL */}
        {(data.resourceType === "File" || data.resourceType === "Video") && (
          <Input
            id="file"
            name="file"
            type="file"
            accept=".docx,.avi,.png,.mp4,.mkv,.pdf"
            label="File"
            onChange={handleChange}
          />
        )}
        {data.resourceType === "Link" && (
          <Input
            id="url"
            name="url"
            type="url"
            label="Resource Link"
            placeholder="https://example.com"
            value={data.url}
            onChange={handleChange}
            required
          />
        )}
        {/* Submit Button */}
        <Button type="submit">Upload Resource</Button>
      </form>
    </div>
  );
};

export default AddResource;
