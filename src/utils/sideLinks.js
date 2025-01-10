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
    link: "/addEvent",
    icon: FaPlusCircle,
    label: "Add Event",
  },
  {
    link: "/resources",
    icon: FaFileAlt,
    label: "Resources",
  },
  {
    link: "/addresource",
    icon: FaPlusCircle,
    label: "Add Resource",
  },
  {
    link: "/blogs",
    icon: FaPen,
    label: "Blog",
  },
  {
    link: "/addblog",
    icon: FaPlusCircle,
    label: "Add Blog",
  },
];

const studentSideLinks = sideLinks.filter(
  (sl) =>
    sl.label !== "Add Course" &&
    sl.label !== "Add Event" &&
    sl.label !== "Add Resource"
);

export default sideLinks;
export { studentSideLinks };
