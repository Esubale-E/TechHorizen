import { useEffect, useState } from "react";
import { FaSearch, FaFilter, FaPen } from "react-icons/fa";
import BlogCard from "./BlogCard";
import { Heading2 } from "./common/Headings";
import AppLink from "./common/AppLink";
import blogService from "../services/blog-service";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [isLoadding, setIsLoadding] = useState(true);

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

  useEffect(() => {
    blogService
      .getAll()
      .then((res) => {
        setBlogs(res.data);
        setIsLoadding(false);
      })
      .catch((err) => {
        setError(err.message);
      });
  }, []);

  if (isLoadding) return <div>Loading...</div>;

  if (error) return <div className="text-red-500">{error}</div>;

  return (
    <div className="p-6 w-full bg-gray-100 rounded-lg shadow-lg">
      <Heading2> Blog Section</Heading2>
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
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

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
          <div className="relative w-full md:w-1/3">
            <AppLink to="/teacher/addblog">Post</AppLink>
            <FaPen className="absolute right-3 top-3 text-gray-500" />
          </div>
        </div>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {displayedBlogs.length > 0 ? (
          displayedBlogs.map((blog, index) => (
            <BlogCard key={index} blog={blog} />
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
