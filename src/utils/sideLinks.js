import {
  FaBookOpen,
  FaCalendarAlt,
  FaFileAlt,
  FaPen,
  FaPlusCircle,
} from "react-icons/fa";

const sideLinks = [
  {
    link: "/courses",
    icon: FaBookOpen,
    label: "Courses",
  },
  {
    link: "/addcourse",
    icon: FaPlusCircle,
    label: "Add Course",
  },
  {
    link: "/events",
    icon: FaCalendarAlt,
    label: "Event",
  },
  {
    link: "/resources",
    icon: FaFileAlt,
    label: "Resources",
  },
  {
    link: "/blog",
    icon: FaPen,
    label: "Blog",
  },
];

const studentSideLinks = sideLinks.filter((sl) => sl.label !== "Add Course");

export default sideLinks;
export { studentSideLinks };
