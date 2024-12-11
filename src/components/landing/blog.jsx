/* eslint-disable react/prop-types */
import { Heading2, Heading3 } from "../common/Headings";
import Text from "../common/Text";
import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { latestBlogs } from "./../../services/blog";
import TextHighlight from "./../common/TextHighlight";

const BlogSection = () => {
  return (
    <section
      id="blog"
      className="bg-background py-12 px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Heading2>Latest Blogs</Heading2>
          <Text>Stay updated with our latest articles and insights</Text>
        </div>

        {/* Blog Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {latestBlogs.map((blog, i) => (
            <BlogCard key={i} blog={blog} />
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogCard = ({ blog }) => (
  <div className="transition-transform transform hover:scale-105 hover:shadow-2xl bg-white p-4 my-4 mx-8 rounded-lg shadow-md">
    {/* Blog Image */}
    <img
      src={blog.image}
      alt={blog.title}
      className="w-full h-40 object-cover rounded-t-lg mb-4"
    />
    <Heading3>{blog.title}</Heading3>

    <div className="text-darkaccent text-sm flex items-center mb-2">
      <FaUser className="mr-2" />
      <TextHighlight>{blog.author}</TextHighlight>
      <span className="mx-2">|</span>
      <FaCalendarAlt className="mr-2" />
      <TextHighlight>{blog.date}</TextHighlight>
    </div>

    <Text>{blog.description}</Text>

    <button
      className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition duration-200"
      onClick={() => alert(`Reading more about: ${blog.title}`)}
    >
      Read More
    </button>
  </div>
);

export default BlogSection;
