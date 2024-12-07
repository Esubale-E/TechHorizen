import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const StudentRegistration = () => {
  // Validation schema
  const validationSchema = Yup.object().shape({
    id: Yup.number().required("Student ID is required"),
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    phone: Yup.string()
      .matches(
        /^(\+251|0)?(9\d{8})$/,
        "Phone number must be valid Ethiopian number"
      )
      .required("Phone number is required"),
    profilePicture: Yup.mixed()
      .required("Profile picture is required")
      .test(
        "fileSize",
        "File size is too large (max 2MB)",
        (value) => !value || (value[0] && value[0].size <= 2 * 1024 * 1024)
      )
      .test(
        "fileType",
        "Unsupported file type (only JPG, PNG, or GIF allowed)",
        (value) =>
          !value ||
          (value[0] &&
            ["image/jpeg", "image/png", "image/gif"].includes(value[0].type))
      ),

    department: Yup.string().required("Department is required"),
    college: Yup.string().required("College is required"),
    year: Yup.string()
      .oneOf(["1st", "2nd", "3rd", "4th"], "Year must be valid")
      .required("Year is required"),
    birthDate: Yup.date()
      .required("Birth date is required")
      .typeError("Must be a valid date"),
    password: Yup.string()
      .required("Password is required")
      .min(6, "Password must be at least 6 characters"),
  });

  // React Hook Form initialization
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Submit handler
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("profilePicture", data.profilePicture[0]);
    formData.append("name", data.name);
    formData.append("email", data.email);
    // Append other fields as needed

    // Example API request
    // fetch("https://api.example.com/upload", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((response) => response.json())
    //   .then((result) => console.log("Success:", result))
    //   .catch((error) => console.error("Error:", error));
    console.log("Form Submitted:", data);
    alert("Student registered successfully!");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-background dark:bg-darkBackground">
      <div className="w-[500px] bg-white dark:bg-darkBackground rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-semibold text-text dark:text-darkText mb-4 text-center">
          Student Registration
        </h2>

        <form
          className="flex flex-col space-y-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* ID Field */}
          <div>
            <label
              className="block text-sm text-text dark:text-darkText mb-2"
              htmlFor="id"
            >
              Student ID
            </label>
            <input
              type="number"
              id="id"
              {...register("id")}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary dark:bg-darkBackground dark:text-darkText dark:border-darkPrimary"
              placeholder="Enter your student ID"
            />
            <p className="text-highlight text-sm">{errors.id?.message}</p>
          </div>

          {/* Name Field */}
          <div>
            <label
              className="block text-sm text-text dark:text-darkText mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              {...register("name")}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary dark:bg-darkBackground dark:text-darkText dark:border-darkPrimary"
              placeholder="Enter your name"
            />
            <p className="text-highlight text-sm">{errors.name?.message}</p>
          </div>

          {/* Email Field */}
          <div>
            <label
              className="block text-sm text-text dark:text-darkText mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              {...register("email")}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary dark:bg-darkBackground dark:text-darkText dark:border-darkPrimary"
              placeholder="Enter your email"
            />
            <p className="text-highlight text-sm">{errors.email?.message}</p>
          </div>

          {/* Phone Field */}
          <div>
            <label
              className="block text-sm text-text dark:text-darkText mb-2"
              htmlFor="phone"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phone"
              {...register("phone")}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary dark:bg-darkBackground dark:text-darkText dark:border-darkPrimary"
              placeholder="Enter your phone number"
            />
            <p className="text-highlight text-sm">{errors.phone?.message}</p>
          </div>
          {/* Profile Picture Field */}
          <div>
            <label
              className="block text-sm text-text dark:text-darkText mb-2"
              htmlFor="profilePicture"
            >
              Profile Picture
            </label>
            <input
              type="file"
              id="profilePicture"
              {...register("profilePicture")}
              className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary dark:bg-darkBackground dark:text-darkText dark:border-darkPrimary"
              accept="image/*" // Only accept image files
            />
            <p className="text-highlight text-sm">
              {errors.profilePicture?.message}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-3 bg-primary text-white rounded-lg hover:bg-secondary transition dark:bg-darkSecondary dark:hover:bg-highlight"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentRegistration;
