/* eslint-disable react/prop-types */

const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm mx-auto bg-white shadow-lg rounded-lg overflow-hidden border">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-gray-800">
          {user.firstName} {user.lastName}
        </div>
        <p className="text-gray-700 text-sm">
          <strong>Email:</strong> {user.email}
        </p>
        <p className="text-gray-700 text-sm">
          <strong>Phone:</strong> {user.phone}
        </p>
        <p className="text-gray-700 text-sm">
          <strong>Department:</strong> {user.department}
        </p>
        <p className="text-gray-700 text-sm">
          <strong>College:</strong> {user.college}
        </p>
        <p className="text-gray-700 text-sm">
          <strong>Year:</strong> {user.year}
        </p>
        <p className="text-gray-700 text-sm">
          <strong>Birth Date:</strong>{" "}
          {new Date(user.birthDate).toLocaleDateString()}
        </p>
        <p className="text-gray-700 text-sm">
          <strong>Role:</strong> {user.role}
        </p>
        <p className="text-gray-700 text-sm">
          <strong>Enrolled Courses:</strong>{" "}
          {user.enrolledCorses?.length > 0
            ? user.enrolledCorses.join(", ")
            : "None"}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
