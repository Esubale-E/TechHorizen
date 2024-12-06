import { useState } from "react";
import { Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // Importing icons from react-icons

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showConfirmPassword, setShowConfirmPassword] = useState(false); // State for confirm password visibility

  const handleSignUp = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)" }}
    >
      <div className="w-[400px] bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Create Your Account
        </h2>
        <p className="text-sm text-gray-500 mb-4 text-center">
          Join us and start your journey!
        </p>

        <form className="flex flex-col space-y-4" onSubmit={handleSignUp}>
          {/* Name Field */}
          <div>
            <label className="block text-sm text-gray-700 mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full p-2 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105"
              type="text"
              id="name"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-sm text-gray-700 mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full p-2 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105"
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password Field */}
          <div className="relative">
            <label
              className="block text-sm text-gray-700 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-2 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105"
              type={showPassword ? "text" : "password"} // Toggle between text and password type
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)} // Toggle password visibility
            >
              {showPassword ? (
                <FaEyeSlash size={20} className="mt-8 text-gray-500" />
              ) : (
                <FaEye size={20} className="mt-8 text-gray-500" />
              )}
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <label
              className="block text-sm text-gray-700 mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <input
              className="w-full p-2 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105"
              type={showConfirmPassword ? "text" : "password"} // Toggle between text and password type for confirm password
              id="confirmPassword"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)} // Toggle confirm password visibility
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={20} className="mt-8 text-gray-500" />
              ) : (
                <FaEye size={20} className="mt-8  text-gray-500" />
              )}
            </div>
          </div>

          {/* Submit Button */}
          <button
            className="w-full py-3 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            type="submit"
            style={{
              background: "linear-gradient(135deg, #6a11cb, #2575fc)",
              border: "none",
            }}
          >
            Sign Up
          </button>
        </form>

        <p className="mt-4 text-sm text-gray-700 text-center">
          Already have an account?{" "}
          <Link
            to="/signin"
            className="text-purple-600 hover:text-indigo-600 transition-all duration-300 ease-in-out"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
