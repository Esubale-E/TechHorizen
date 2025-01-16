import {
  FaBookOpen,
  FaCalendarAlt,
  FaFileAlt,
  FaPen,
  FaPlusCircle,
} from "react-icons/fa";

const sideLinks = [
  { link: "/courses", icon: FaBookOpen, label: "Courses" },
  { link: "/events", icon: FaCalendarAlt, label: "Event" },
  { link: "/resources", icon: FaFileAlt, label: "Resources" },
  { link: "/blogs", icon: FaPen, label: "Blog" },
];

const teachersSideLinks = [
  ...sideLinks,
  { link: "/addcourse", icon: FaPlusCircle, label: "Add Course" },
  { link: "/addEvent", icon: FaPlusCircle, label: "Add Event" },
  { link: "/addresource", icon: FaPlusCircle, label: "Add Resource" },
  { link: "/addblog", icon: FaPlusCircle, label: "Add Blog" },
];

const studentsSideLinks = [
  ...sideLinks,
  { link: "/addblog", icon: FaPlusCircle, label: "Add Blog" },
];

const adminsSideLinks = [...sideLinks];

export default sideLinks;
export { studentsSideLinks, teachersSideLinks, adminsSideLinks };
