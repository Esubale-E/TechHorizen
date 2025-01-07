import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import AppLink, { GoogleLink } from "./../components/common/AppLink";
import { SignButton } from "../components/common/Button";
import { Heading2 } from "./../components/common/Headings";
import Input from "../components/common/Input";
import userService from "../services/user-service";
import { LightText } from "./../components/common/Text";
import { replace, useNavigate } from "react-router-dom";

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
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const toProfileDetail = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    userService
      .create({ ...data, authType: "regular" })
      .then((res) => {
        console.log("Account Created ", res.data);
        toProfileDetail(`/profilesetup/?userid=${res.data._id}`, replace);
      })
      .catch((err) => console.log("Account Not Created ", err));
    
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[400px] mt- bg-white rounded-xl shadow-lg p-6">
        <Heading2>Sign Up</Heading2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* First Name Field */}
          <Input
            label="First Name"
            name="firstName"
            placeholder="Enter your first name"
            {...register("firstName")}
            errorMessage={errors.firstName?.message}
          />

          {/* Last Name Field */}
          <Input
            label="Last Name"
            name="lastName"
            placeholder="Enter your last name"
            {...register("lastName")}
            errorMessage={errors.lastName?.message}
          />

          {/* Email Field */}
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            {...register("email")}
            errorMessage={errors.email?.message}
          />

          {/* Password Field */}
          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              {...register("password")}
              errorMessage={errors.password?.message}
            />
            <div
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
          </div>

          {/* Confirm Password Field */}
          <div className="relative">
            <Input
              label="Confirm Password"
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              placeholder="Re-enter your password"
              {...register("confirmPassword")}
              errorMessage={errors.confirmPassword?.message}
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
          </div>

          {/* Submit Button */}
          <SignButton label="Sign Up" />
          <GoogleLink />
        </form>
        <LightText>
          Already have an account? <AppLink to="/login">Log In</AppLink>
        </LightText>
      </div>
    </div>
  );
};

export default SignUp;
