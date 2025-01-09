import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import * as yup from "yup";
import Input from "../components/common/Input";
import userService from "../services/user-service";
import AuthContext from "../contexts/authContext";
import { ErrText } from "../components/common/Text";
import { Heading2 } from "../components/common/Headings";
import { SignButton } from "../components/common/Button";
import AppLink, { GoogleLink } from "../components/common/AppLink";

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
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { dispatch } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const navigateTo = useNavigate();

  const onSubmit = (data) => {
    setIsLoading(true);
    userService
      .login(data)
      .then((res) => {
        dispatch({ type: "LOGIN", user: res.data });
        if (res.data.college) {
          if (res.data.role === "student")
            navigateTo("/student", { replace: true });
          else navigateTo("/teacher", { replace: true });
        } else {
          navigateTo(`/profilesetup/?userid=${res.data._id}`);
        }
      })
      .catch((err) => {
        console.log(err);
        setErrorMessage("Invalid email or password. Please try again.");
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="w-full max-w-[400px] bg-white rounded-xl shadow-lg p-6">
        <Heading2>Log In</Heading2>
        {errorMessage && <ErrText>{errorMessage}</ErrText>}

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Email Field */}
          <Input
            label="Email"
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            errorMessage={errors.email?.message}
          />

          {/* Password Field */}
          <div className="relative">
            <Input
              label="Password"
              type={showPassword ? "text" : "password"}
              placeholder="Enter your password"
              {...register("password")}
              errorMessage={errors.password?.message}
            />
            <div
              className="absolute right-3 top-9 cursor-pointer"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "Hide password" : "Show password"}
              title={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
          </div>

          <div className="flex">
            <SignButton
              label={isLoading ? "Logging In..." : "Log In"}
              disabled={isLoading}
            />
            <GoogleLink />
          </div>
        </form>
        <p className="mt-4 text-sm text-gray-600 text-center">
          Don’t have an account? <AppLink to="/join/signup">Sign Up</AppLink>
        </p>
      </div>
    </div>
  );
};

export default LogIn;
