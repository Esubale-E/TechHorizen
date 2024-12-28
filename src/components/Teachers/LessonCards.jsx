/* eslint-disable react/prop-types */
import { FaBook } from "react-icons/fa";
import { Heading2, Heading3 } from "../common/Headings";
import { AppText } from "../common/Text";

// const lesson = [
//   {
//     title: "HTML Basics",
//     description: "Understand the structure of web pages using HTML.",
//   },
//   {
//     title: "CSS Essentials",
//     description: "Learn how to style web pages using CSS.",
//   },
// ];

const LessonCards = ({ lesson: { title, description, file } }) => {
  console.log(file);
  return (
    <div className="m-6 p-6 w-full bg-white rounded-lg shadow-lg ">
      <div className="flex items-center justify-center mb-2">
        <Heading2>{title}</Heading2>
      </div>
      <Heading3>
        <FaBook
          size={24}
          className="text-blue-500"
          aria-label=" inline Book Icon"
        />
        {title}
      </Heading3>
      <AppText>{description}</AppText>
      {file
        ? file.map((f, i) => (
            <div key={i}>
              <img
                key={i}
                src={"http://localhost:5000/" + f.filename}
                alt="path error"
              />

              <a href={f.filename} download={f.filename}>
                Download Lesson
              </a>
            </div>
          ))
        : null}
    </div>
  );
};

export default LessonCards;
