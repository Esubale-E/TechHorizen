import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Heading2 } from "../components/common/Headings";
import { SignButton } from "../components/common/Button";
import AppLink, { GoogleLink } from "../components/common/AppLink";
import Input from "../components/common/Input";
import userService from "../services/user-service";
import { replace, useNavigate } from "react-router-dom";
import AuthContext from "../contexts/authContext";

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

const LogIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { user, dispach } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigateToStudent = useNavigate();

  const onSubmit = (data) => {
    console.log("user data", data);
    userService
      .login(data)
      .then((res) => {
        dispach({ type: "LOGIN", user: res.data });
        navigateToStudent("/student", replace);
      })
      .catch((err) => console.log(err));
    console.log("on submit data", data);
  };

  useEffect(() => {
    console.log("Updated user state:", user);
  }, [user]);

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-[400px] bg-white rounded-xl shadow-lg p-6">
        <Heading2>Log In</Heading2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            errorMessage={errors.email?.message}
            className={errors.email ? "border-red-500" : ""}
          />

          {/* Password Field */}
          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password")}
              errorMessage={errors.password?.message}
              className={errors.password ? "border-red-500" : ""}
            />
            <div
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
          </div>

          {/* Submit Button */}
          <SignButton label="Log In" />
          <GoogleLink />
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Don’t have an account? <AppLink to="/signup">Sign Up</AppLink>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
