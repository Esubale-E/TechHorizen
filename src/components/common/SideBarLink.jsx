import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SidebarLink = ({ to, icon, label, isActive }) => (
  <Link
    to={to}
    className={`flex items-center py-3 px-14 rounded-lg transition duration-200 text-nowrap ${isActive(
      to
    )}`}
  >
    <span className="text-lg mr-3 text-darkaccent font-bold">{icon}</span>
    {label}
  </Link>
);

export default SidebarLink;
