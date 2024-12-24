/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AppLink, { GoogleLink } from "./../components/common/AppLink";
import { SignButton } from "../components/common/Button";
import { Heading2 } from "./../components/common/Headings";
import userService from "../services/user-service";
import { useNavigate } from "react-router-dom";
import { LightText, ErrText } from "./../components/common/Text";

// Validation schema using Yup
const validationSchema = yup.object().shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters long")
    .required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Please confirm your password"),
});

const SignUp = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const inputstyle =
    "w-full py-1 px-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent shadow-sm transition-all duration-300 ease-in-out transform hover:scale-105";

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    const response = await userService.create(data);
    console.log(response.data);
    navigate("/student");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[400px]  mt- bg-white rounded-xl shadow-lg p-6">
        <Heading2>Sign Up</Heading2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4jk">
          <div>
            <Label hFor="firstName" label={"First Name"} />
            <input
              id="firstName"
              {...register("firstName")}
              type="text"
              className={inputstyle}
              placeholder="Enter your first name"
            />
            {errors.firstName && <ErrText>{errors.firstName.message}</ErrText>}
          </div>
          <div>
            <Label hFor="lastName" label={"Last Name"} />
            <input
              id="lastName"
              {...register("lastName")}
              type="text"
              className={inputstyle}
              placeholder="Enter your last name"
            />
            {errors.lastName && <ErrText>{errors.lastName.message}</ErrText>}
          </div>
          <div>
            <Label hFor="email" label={"Email"} />
            <input
              id="email"
              {...register("email")}
              type="email"
              className={inputstyle}
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
              className={inputstyle}
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
          <div className="relative">
            <Label hFor="confirmPassword" label="Confirm Password" />
            <input
              id="confirmPassword"
              {...register("confirmPassword")}
              type={showConfirmPassword ? "text" : "password"}
              className={inputstyle}
              placeholder="Re-enter your password"
            />
            <div
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={20} />
              ) : (
                <FaEye size={20} />
              )}
            </div>
            {errors.confirmPassword && (
              <ErrText> {errors.confirmPassword.message}</ErrText>
            )}
          </div>
          <SignButton label={"Sign Up"} />
          <GoogleLink />
        </form>
        <LightText>
          Already have an account? <AppLink to="/signin">Sign In</AppLink>
        </LightText>
      </div>
    </div>
  );
};

export default SignUp;

export const Label = ({ hFor, label }) => (
  <label htmlFor={hFor} className="block text-sm text-gray-700 mb-2">
    {label}
  </label>
);
