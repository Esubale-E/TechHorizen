import { FaUser } from "react-icons/fa";
import { useContext } from "react";
import AuthContext from "./../../contexts/authContext";
import { Heading3 } from "../common/Headings";

const StudentProfile = () => {
  const { state } = useContext(AuthContext);
  const student = state.user;

  if (!student) return <div>Loadding ...</div>;

  const {
    firstName,
    lastName,
    year,
    profilePicture,
    birthDate,
    college,
    department,
    email,
    phone,
  } = student;

  const formattedDate = new Date(birthDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className=" absolute top-10 right-4 bg-background text-text pb-2 flex items-center justify-center">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
        {/* Profile Picture and Name */}
        <div className="flex items-center justify-around flex-col mb-8">
          <div className="w-32 h-32 rounded-full overflow-hidden shadow-md mb-4">
            {<FaUser size={130} /> || (
              <img
                src={profilePicture}
                alt={`${firstName}'s profile`}
                className="w-full h-full object-cover"
              />
            )}
          </div>
          <div className="ms-8">
            <h2 className="text-2xl font-bold text-primary mb-2">
              {firstName} {lastName}
            </h2>
            <p className="text-lg text-secondary ">
              {department}, {year} Year
            </p>
          </div>
        </div>

        {/* Details Section */}
        <div className="space-y-6">
          {/* Personal Details */}
          <div>
            <Heading3>Personal Details</Heading3>
            <p className="text-sm">
              <span className="font-bold">Email:</span> {email}
            </p>
            <p className="text-sm">
              <span className="font-bold">Phone:</span> {phone}
            </p>
            <p className="text-sm">
              <span className="font-bold">Birth Date:</span> {formattedDate}
            </p>
          </div>

          {/* Academic Information */}
          <div>
            <Heading3 className="text-2xl font-semibold text-primary mb-4">
              Academic Information
            </Heading3>
            <p>
              <span className="font-bold">Department:</span> {department}
            </p>
            <p>
              <span className="font-bold">College:</span> {college}
            </p>
            <p>
              <span className="font-bold">Year:</span> {year}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfile;
export { StudentProfile };
