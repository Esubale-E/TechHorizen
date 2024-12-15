import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Heading2 } from "../components/common/Headings";
import { ErrText, Label } from "./SignUp";
import { SignButton } from "../components/common/Button";
import AppLink from "../components/common/AppLink";

// Validation schema using Yup
const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
});

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = (data) => {
    alert("Sign-in successful!");
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[400px] bg-white rounded-xl shadow-lg p-6">
        <Heading2> Sign In to Your Account</Heading2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <Label hFor="email" label=" Email" />
            <input
              id="email"
              {...register("email")}
              type="email"
              className="w-full py-2 px-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
            {errors.email && <ErrText>{errors.email.message}</ErrText>}
          </div>
          <div className="relative">
            <Label hFor="password" label="Password" />
            <input
              id="password"
              {...register("password")}
              type={showPassword ? "text" : "password"}
              className="w-full py-2 px-3 border rounded-xl focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
            />
            <div
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
            {errors.password && <ErrText>{errors.password.message}</ErrText>}
          </div>
          <SignButton label="Sign In" />
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Don’t have an account? <AppLink to="/signup">Sign Up</AppLink>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
