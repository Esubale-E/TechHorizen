/* eslint-disable react/prop-types */

import {
  FaCalendarAlt,
  FaChevronCircleLeft,
  FaChevronCircleRight,
  FaTimes,
  FaUser,
} from "react-icons/fa";
import { Heading2, Heading3 } from "./common/Headings";
import Text from "./common/Text";
import { PureButton } from "./common/Button";

const BlogModal = ({
  blog: { title, image, author, date, detail },
  onClose,
  onNext,
  onPrevious,
}) => {
  const img = image.filename
    ? `http://localhost:5000/${image.filename}`
    : `https://via.placeholder.com/300?text=${title}`;

  return (
    <div
      onClick={(e) => {
        e.preventDefault();
        if (e.target.classList.contains("my-overlay")) onClose();
      }}
      className="my-overlay fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-4/5 h-4/5  overflow-hidden overflow-y-scroll">
        <div className="flex flex-col md:flex-row gap-6 ">
        {/* Blog header */}
          <div className="flex-col w-full max-w-lg  max-h-lg gap-5">
            <Heading2>{title}</Heading2>
            <img
              src={img}
              alt={title}
              className="w-full max-h-96 object-cover rounded-lg mb-4"
            />{" "}
            <div className="text-gray-600 text-md flex items-center mb-2">
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
          </div>
            {/* Blog detail */}
          <div className="flex-col overflow-y-scroll max-w-lg">
            <Heading3>{title}</Heading3>

            <Text>{detail}</Text>
          </div>
        </div>

        <span className="absolute top-2/4 left-3.5">
          <PureButton onClick={onPrevious}>
            <FaChevronCircleLeft size={32} color="#0037fc" />
          </PureButton>
        </span>

        <span className="absolute top-2/4 right-3 hover:text-white ">
          <PureButton onClick={onNext}>
            <FaChevronCircleRight size={32} color="#0037fc" />
          </PureButton>
        </span>

        {/* close Button */}
        <span className="absolute top-3 right-3 hover:text-white ">
          <PureButton onClick={onClose}>
            {<FaTimes size={32} color="#fff" />}
          </PureButton>
        </span>
      </div>
    </div>
  );
};

export default BlogModal;
