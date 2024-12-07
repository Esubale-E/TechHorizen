import PropTypes from "prop-types";
import { FaUser } from "react-icons/fa";
import studentd from "../services/studentData";

const StudentProfile = ({ studentData: student = studentd[1] }) => {
  const formattedDate = new Date(student.birthDate).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <div className=" absolute top-10 right-8 bg-background dark:bg-darkBackground text-text dark:text-darkText pb-2 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-white dark:bg-darkBackground rounded-lg shadow-lg p-8">
        {/* Profile Picture and Name */}
        <div className="flex items-center justify-around flex-col mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mb-4">
            {<FaUser size={130} /> || (
              <img
                src={student.profilePicture}
                alt={`${student.name}'s profile`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="ms-8">
            <h2 className="text-2xl font-bold text-primary dark:text-highlight mb-2">
              {student.name}
            </h2>
            <p className="text-lg text-secondary dark:text-darkSecondary">
              {student.department}, {student.year} Year
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          {/* Personal Details */}
          <div>
            <h3 className="text-1xl font-semibold text-primary dark:text-highlight mb-4">
              Personal Details
            </h3>
            <p className="text-sm">
              <span className="font-bold">ID:</span> {student.id}
            </p>
            <p className="text-sm">
              <span className="font-bold">Email:</span> {student.email}
            </p>
            <p className="text-sm">
              <span className="font-bold">Phone:</span> {student.phone}
            </p>
            <p className="text-sm">
              <span className="font-bold">Birth Date:</span> {formattedDate}
            </p>
          </div>

          {/* Academic Information */}
          <div>
            <h3 className="text-2xl font-semibold text-primary dark:text-highlight mb-4">
              Academic Information
            </h3>
            <p>
              <span className="font-bold">Department:</span>{" "}
              {student.department}
            </p>
            <p>
              <span className="font-bold">College:</span> {student.college}
            </p>
            <p>
              <span className="font-bold">Year:</span> {student.year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;

// Prop Validation
StudentProfile.propTypes = {
  studentData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    profilePicture: PropTypes.string.isRequired,
    department: PropTypes.string.isRequired,
    college: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    birthDate: PropTypes.string.isRequired, // Use ISO format for dates
    password: PropTypes.string.isRequired, // Should be encrypted in production
  }).isRequired,
};

export { StudentProfile };
