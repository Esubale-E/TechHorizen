import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSignIn = (e) => {
    e.preventDefault();
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
    <div className="h-screen flex items-center justify-center bg-background dark:bg-darkbackground">
      <div className="w-[350px] bg-white dark:bg-darksecondarybackground rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-primary dark:text-darkprimary mb-4 text-center">
          Welcome Back
        </h2>
        <p className="text-sm text-text dark:text-darktext mb-6 text-center">
          Sign in to your account
        </p>

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <form className="flex flex-col" onSubmit={handleSignIn}>
          <div className="mb-4">
            <label
              className="block text-sm text-text dark:text-darktext mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full p-2 text-lg border border-gray-300 dark:border-darksecondary rounded-xl focus:outline-none focus:ring-secondary focus:border-secondary dark:focus:ring-darksecondary dark:focus:border-darksecondary shadow-sm transition-all duration-300 ease-in-out"
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
              className="block text-sm text-text dark:text-darktext mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              className="w-full p-2 text-lg border border-gray-300 dark:border-darksecondary rounded-xl focus:outline-none focus:ring-secondary focus:border-secondary dark:focus:ring-darksecondary dark:focus:border-darksecondary shadow-sm transition-all duration-300 ease-in-out"
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 dark:text-darktext"
              onClick={() => setShowPassword(!showPassword)}
              aria-label="Toggle password visibility"
            >
              {showPassword ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>

          <button
            className="w-full py-2 text-lg font-semibold text-white bg-primary dark:bg-darkprimary rounded-xl hover:bg-secondary dark:hover:bg-darksecondary transition-all duration-300 ease-in-out"
            type="submit"
          >
            <Link to={!error ? "/studentDashboard/" : ""}>Sign In</Link>
          </button>

          <p className="mt-2 text-sm text-text dark:text-darktext text-center">
            <a
              href="#"
              className="text-accent dark:text-darkaccent hover:text-secondary dark:hover:text-darksecondary transition-all duration-300 ease-in-out"
            >
              Forgot Password?
            </a>
          </p>
        </form>

        <p className="mt-4 text-sm text-text dark:text-darktext text-center">
          Don’t have an account?{" "}
          <Link
            to="/signup"
            className="text-primary dark:text-darkprimary hover:text-secondary dark:hover:text-darksecondary transition-all duration-300 ease-in-out"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
