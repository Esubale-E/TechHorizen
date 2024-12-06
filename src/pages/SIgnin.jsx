import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi"; // Import the Eye icons from React Icons

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
    // Clear previous error messages
    setError("");

    // Add sign-in logic here (e.g., API call)
    if (email === "" || password === "") {
      setError("Please fill in both fields.");
      return;
    }

    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <div
      className="h-screen flex items-center justify-center"
      style={{ background: "linear-gradient(135deg, #6a11cb, #2575fc)" }}
    >
      <div className="w-[350px] bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Sign in to your account
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form className="flex flex-col " onSubmit={handleSignIn}>
          <div className="mb-4">
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

          <div className="mb-4 relative">
            <label
              className="block text-sm text-gray-700 mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-2 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? (
                <FiEyeOff className="mt-8  text-gray-600" />
              ) : (
                <FiEye className="mt-8  text-gray-600" />
              )}
            </button>
          </div>

          <button
            className="w-full py-2 text-lg font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 ease-in-out transform hover:scale-105"
            type="submit"
            style={{
              background: "linear-gradient(135deg, #6a11cb, #2575fc)",
              border: "none",
            }}
          >
            Sign In
          </button>

          <p className="mt-2 text-sm text-gray-600 text-center">
            <a
              href="#"
              className="text-purple-600 hover:text-indigo-600 transition-all duration-300 ease-in-out"
            >
              Forgot Password?
            </a>
          </p>
        </form>

        <p className="mt-4 text-sm text-gray-700 text-center">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-purple-600 hover:text-indigo-600 transition-all duration-300 ease-in-out"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
