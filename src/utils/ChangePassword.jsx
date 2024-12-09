import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const ChangePasswordForm = () => {
  // Define validation schema with Yup
  const validationSchema = Yup.object().shape({
    currentPassword: Yup.string().required("Current password is required"),
    newPassword: Yup.string()
      .required("password is required")
      .min(6, "password must be at least 6 characters"),
    confirmPassword: Yup.string()
      .required("Confirm password is required")
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match"),
  });

  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // Submit handler
  const onSubmit = (data) => {
    console.log("Form Data:", data);
    alert("Password changed successfully!");
    reset(); // Reset form fields after successful submission
  };

  return (
    <section className="absolute top-18 right-6 flex justify-center items-center bg-background dark:bg-darkbackground">
      <div className="max-w-md mx-auto bg-white dark:bg-darkbackground shadow-md rounded-lg p-6">
        <h2 className="text-xl font-bold text-primary dark:text-darkprimary mb-6">
          Change Password
        </h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          {/* Current Password */}
          <div>
            <label
              htmlFor="currentPassword"
              className="block text-sm font-medium text-text dark:text-darktext mb-1"
            >
              Current Password
            </label>
            <input
              type="password"
              id="currentPassword"
              {...register("currentPassword")}
              className="w-full px-4 py-2 border border-gray-300 dark:border-darksecondary rounded-lg focus:ring-secondary focus:border-secondary dark:focus:ring-darksecondary dark:focus:border-darksecondary"
              placeholder="Enter your current password"
            />
            <p className="text-red-600 text-sm">
              {errors.currentPassword?.message}
            </p>
          </div>

          {/* New Password */}
          <div>
            <label
              htmlFor="newPassword"
              className="block text-sm font-medium text-text dark:text-darktext mb-1"
            >
              New Password
            </label>
            <input
              type="password"
              id="newPassword"
              {...register("newPassword")}
              className="w-full px-4 py-2 border border-gray-300 dark:border-darksecondary rounded-lg focus:ring-secondary focus:border-secondary dark:focus:ring-darksecondary dark:focus:border-darksecondary"
              placeholder="Enter your new password"
            />
            <p className="text-red-600 text-sm">
              {errors.newPassword?.message}
            </p>
          </div>

          {/* Confirm New Password */}
          <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-text dark:text-darktext mb-1"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              {...register("confirmPassword")}
              className="w-full px-4 py-2 border border-gray-300 dark:border-darksecondary rounded-lg focus:ring-secondary focus:border-secondary dark:focus:ring-darksecondary dark:focus:border-darksecondary"
              placeholder="Re-enter your new password"
            />
            <p className="text-red-600 text-sm">
              {errors.confirmPassword?.message}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-secondary dark:bg-darkprimary dark:hover:bg-darksecondary transition-colors"
          >
            Change Password
          </button>
        </form>
      </div>
    </section>
  );
};

export default ChangePasswordForm;
