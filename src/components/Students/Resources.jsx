import { useState } from "react";
import {
  FaBookOpen,
  FaExternalLinkAlt,
  FaSearch,
  FaFilter,
} from "react-icons/fa";
import resources from "../../services/resource";
const Resources = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredResources = resources.filter((resource) => {
    const matchesCategory = filter === "All" || resource.category === filter;
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const categories = [
    "All",
    "Web Development",
    "UI/UX Design",
    "Data Science",
    "Version Control",
  ];

  return (
    <div className="p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        Resources
      </h2>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search resources..."
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none shadow-sm"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <FaSearch className="absolute right-3 top-3 text-gray-500" />
        </div>

        {/* Filter Dropdown */}
        <div className="relative">
          <select
            className="px-4 py-2 rounded-lg border border-gray-300 focus:ring focus:ring-blue-300 focus:outline-none shadow-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
          <FaFilter className="absolute right-3 top-3 text-gray-500" />
        </div>
      </div>

      {/* Resource Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredResources.length > 0 ? (
          filteredResources.map((resource, index) => (
            <div
              key={index}
              className="transition-transform transform hover:scale-105 hover:shadow-2xl bg-gradient-to-r from-blue-50 via-blue-100 to-blue-200 p-4 rounded-lg shadow-md"
            >
              {/* Resource Title */}
              <div className="flex items-center mb-2">
                <FaBookOpen className="text-blue-600 mr-2" />
                <h4 className="text-xl font-semibold text-gray-800">
                  {resource.title}
                </h4>
              </div>

              {/* Resource Details */}
              <p className="text-gray-600 text-sm mb-2">
                Category:{" "}
                <span className="font-medium">{resource.category}</span>
              </p>
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {resource.description}
              </p>

              {/* Link Button */}
              <a
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
              >
                Visit Resource
                <FaExternalLinkAlt className="ml-2" />
              </a>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-3">
            No resources found for your search or selected category.
          </p>
        )}
      </div>
    </div>
  );
};

export default Resources;
