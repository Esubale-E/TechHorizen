import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import Input from "../components/common/Input";
import AppLink from "../components/common/AppLink";
import { SignButton } from "../components/common/Button";

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
    <div className="h-screen flex items-center justify-center">
      <div className="w-[400px] bg-white rounded-xl shadow-lg p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
          Create Your Account
        </h2>
        <p className="text-sm text-gray-500 mb-4 text-center">
          Join us and start your journey!
        </p>

        <form className="flex flex-col space-y-4" onSubmit={handleSignUp}>
          {/* Name Field */}
          <Input
            type="text"
            id="name"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          {/* Password Field */}
          <div className="relative">
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
                <FaEyeSlash size={20} className="mt-8 text-gray-500" />
              ) : (
                <FaEye size={20} className="mt-8 text-gray-500" />
              )}
            </div>
          </div>
          <div className="relative">
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
                <FaEyeSlash size={20} className="mt-8 text-gray-500" />
              ) : (
                <FaEye size={20} className="mt-8  text-gray-500" />
              )}
            </div>
          </div>

          <SignButton path={"/student"} label={"Sign Up"} />
        </form>

        <p className="mt-4 text-sm text-gray-700 text-center">
          Already have an account? <AppLink to="/signin">Sign In</AppLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
