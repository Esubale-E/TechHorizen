import { useContext, useState } from "react";
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
import { useNavigate } from "react-router-dom";
import AuthContext from "../contexts/authContext";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [generalError, setGeneralError] = useState(null);
  const { state, dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    setGeneralError(null);

    userService
      .create({
        ...data,
        authType: "regular",
        role: state?.user?.role === "teacher" ? "teacher" : "student",
      })
      .then((res) => {
        console.log("Account Created ", res.data);
        dispatch({ type: "LOGIN", user: res.data });
        if (state.user.role === "teacher")
          navigate(`/join/teacherprofilesetup/?userid=${res.data._id}`, {
            replace: true,
          });
        else
          navigate(`/join/profilesetup/?userid=${res.data._id}`, {
            replace: true,
          });
      })
      .catch((err) => {
        console.error("Account Not Created ", err.data);
        setGeneralError("Failed to create account. Please try again.");
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-sm w-full bg-white rounded-xl shadow-lg p-6">
        <Heading2>Sign Up</Heading2>
        {generalError && (
          <p className="text-red-600 text-center">{generalError}</p>
        )}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <Input
            label="First Name"
            name="firstName"
            placeholder="Enter your first name"
            {...register("firstName")}
            errorMessage={errors.firstName?.message}
          />
          <Input
            label="Last Name"
            name="lastName"
            placeholder="Enter your last name"
            {...register("lastName")}
            errorMessage={errors.lastName?.message}
          />
          <Input
            label="Email"
            type="email"
            name="email"
            placeholder="Enter your email"
            {...register("email")}
            errorMessage={errors.email?.message}
          />
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
              aria-label={showPassword ? "Hide password" : "Show password"}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </div>
          </div>
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
              aria-label={
                showConfirmPassword ? "Hide password" : "Show password"
              }
            >
              {showConfirmPassword ? (
                <FaEyeSlash size={20} />
              ) : (
                <FaEye size={20} />
              )}
            </div>
          </div>
          <div className="flex justify-between">
            <SignButton label="Sign Up" disabled={isSubmitting} />
            <GoogleLink />
          </div>
        </form>
        <LightText>
          Already have an account? <AppLink to="/join/login">Log In</AppLink>
        </LightText>
      </div>
    </div>
  );
};

export default SignUp;
