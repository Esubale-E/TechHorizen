import { useState } from "react";
import { FaSearch, FaFilter, FaUser, FaCalendarAlt } from "react-icons/fa";
import blogs from "../../services/blog";
const Blogs = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 3;

  const filteredBlogs = blogs.filter((blog) => {
    const matchesCategory = filter === "All" || blog.category === filter;
    const matchesSearch =
      blog.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      blog.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const displayedBlogs = filteredBlogs.slice(
    (currentPage - 1) * blogsPerPage,
    currentPage * blogsPerPage
  );

  const categories = [
    "All",
    "Technology",
    "Education",
    "Web Development",
    "Health",
  ];

  return (
    <div className="p-6 w-full bg-gray-100 rounded-lg shadow-lg">
      {/* Header */}
      <h2 className="text-4xl font-bold mb-6 text-gray-800 text-center">
        Blog Section
      </h2>

      {/* Search and Filter Section */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        {/* Search Bar */}
        <div className="relative w-full md:w-1/3">
          <input
            type="text"
            placeholder="Search blogs..."
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

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedBlogs.length > 0 ? (
          displayedBlogs.map((blog, index) => (
            <div
              key={index}
              className="transition-transform transform hover:scale-105 hover:shadow-2xl bg-white p-4 rounded-lg shadow-md"
            >
              {/* Blog Image */}
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-40 object-cover rounded-t-lg mb-4"
              />

              {/* Blog Title */}
              <h3 className="text-xl font-semibold mb-2 text-gray-800">
                {blog.title}
              </h3>

              {/* Blog Metadata */}
              <div className="text-gray-600 text-sm flex items-center mb-2">
                <FaUser className="mr-2" />
                {blog.author}
                <span className="mx-2">|</span>
                <FaCalendarAlt className="mr-2" />
                {blog.date}
              </div>

              {/* Blog Description */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">
                {blog.description}
              </p>

              {/* Read More Button */}
              <button
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
                onClick={() => alert(`Reading more about: ${blog.title}`)}
              >
                Read More
              </button>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center col-span-3">
            No blogs found for your search or selected category.
          </p>
        )}
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center mt-6 space-x-2">
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              className={`px-4 py-2 rounded-lg shadow-md transition duration-200 ${
                currentPage === i + 1
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-800 hover:bg-blue-300"
              }`}
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blogs;
