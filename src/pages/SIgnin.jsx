import { useState } from "react";
import { Link } from "react-router-dom";
import { FiEye, FiEyeOff } from "react-icons/fi";
import Input from "../components/common/Input";
import { SignButton } from "../components/common/Button";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");


  const handleSignIn = (e) => {
    e.preventDefault();
    setError("");
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[350px] bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
          Welcome Back
        </h2>
        <p className="text-sm text-gray-500 mb-6 text-center">
          Sign in to your account
        </p>

        {error && <p className="text-red-400 text-sm mb-4">{error}</p>}

        <form className="flex flex-col " onSubmit={handleSignIn}>
          <div className="mb-4">
            <Input
              type="email"
              id="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 relative">
            <Input
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

          <SignButton path={"/student"} label={"Sign Up"} />

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
