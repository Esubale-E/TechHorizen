import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "../components/common/Input";
import Button from "../components/common/Button";
import AppLink from "../components/common/AppLink";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    return true;
  };

  return (
    <div className="h-screen flex items-center justify-center bg-background dark:bg-darkbackground">
      <div className="w-[400px] bg-white dark:bg-darksecondarybackground rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-primary dark:text-darkprimary mb-4 text-center">
          Create Your Account
        </h2>
        <p className="text-sm text-text dark:text-darktext mb-4 text-center">
          Join us and start your journey!
        </p>

        <form className="flex flex-col space-y-4" onSubmit={handleSignUp}>
          {/* Name Field */}
          <div>
            <label
              className="block text-sm text-text dark:text-darktext mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <Input
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
            <label
              className="block text-sm text-text dark:text-darktext mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <Input
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
              className="block text-sm text-text dark:text-darktext mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <FaEyeSlash
                  size={20}
                  className="mt-8 text-gray-500 dark:text-darktext"
                />
              ) : (
                <FaEye
                  size={20}
                  className="mt-8 text-gray-500 dark:text-darktext"
                />
              )}
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <label
              className="block text-sm text-text dark:text-darktext mb-2"
              htmlFor="confirmPassword"
            >
              Confirm Password
            </label>
            <Input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              placeholder="Re-enter your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
            <div
              className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <FaEyeSlash
                  size={20}
                  className="mt-8 text-gray-500 dark:text-darktext"
                />
              ) : (
                <FaEye
                  size={20}
                  className="mt-8 text-gray-500 dark:text-darktext"
                />
              )}
            </div>
          </div>

          <Button type="submit">Sign Up</Button>
        </form>

        <p className="mt-4 text-sm text-text dark:text-darktext text-center">
          Already have an account? <AppLink to="/signin">Sign In</AppLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
