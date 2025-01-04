/* eslint-disable react/prop-types */

import { FaCalendarAlt, FaUser } from "react-icons/fa";
import { Heading3 } from "./common/Headings";
import Text from "./common/Text";
import Button from "./common/Button";

const BlogCard = ({ blog: { title, image, author, date, description } }) => {
  const img =
    // eslint-disable-next-line no-constant-binary-expression
    `http://localhost:5000/${image.filename}` ||
    `https://via.placeholder.com/300?text=${title}`;
  return (
    <div className="transition-transform transform hover:scale-105 hover:shadow-2xl bg-white p-4 rounded-lg shadow-md">
      {/* Blog Image */}
      <img
        src={img}
        alt={title}
        className="w-full h-40 object-cover rounded-t-lg mb-4"
      />

      {/* Blog Title */}
      <Heading3>{title}</Heading3>

      {/* Blog Metadata */}
      <div className="text-gray-600 text-sm flex items-center mb-2">
        <FaUser className="mr-2" />
        {author.name}
        <span className="mx-2">|</span>
        <FaCalendarAlt className="mr-2" />
        {date &&
          new Date(date).toLocaleDateString("en-US", {
            year: "numeric",
            month: "short",
            day: "2-digit",
          })}
      </div>

      {/* Blog Description */}
      <Text>{description}</Text>

      {/* Read More Button */}
      <Button onClick={() => alert(`Reading more about: ${title}`)}>
        Read More
      </Button>
    </div>
  );
};

export default BlogCard;
