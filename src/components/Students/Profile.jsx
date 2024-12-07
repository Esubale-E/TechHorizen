const Profile = () => {
  return (
    <div className="bg-gradient-to-r from-green-50 via-green-100 to-green-200 p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-2xl">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">Your Profile</h2>
      <div className="space-y-2 text-gray-700 leading-snug">
        <p className="text-sm">
          Name: <span className="font-semibold">John Doe</span>
        </p>
        <p className="text-sm">
          Email: <span className="font-semibold">john.doe@example.com</span>
        </p>
        <p className="text-sm">
          Enrolled Courses: <span className="font-semibold">5</span>
        </p>
      </div>
    </div>
  );
};

export default Profile;
