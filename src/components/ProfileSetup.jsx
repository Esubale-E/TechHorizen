import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./common/Button";
import Input from "./common/Input";
import userService from "../services/user-service";
import { useLocation } from "react-router-dom";
import { ErrText } from "./common/Text";

const profileSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^(?:\+251|0)\d{9}$/,
      "Phone number must be a valid Ethiopian phone number"
    ),
  college: yup.string().required("College is required"),
  department: yup.string().required("Department is required"),
  year: yup.string().required("Year is required"),
  birthDate: yup
    .date()
    .required("Birthdate is required")
    .max(new Date(), "Birthdate cannot be in the future"),
});

const ProfileSetup = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");

  console.log("Extracted userId:", userId);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      phone: "",
      college: "",
      department: "",
      year: 1,
      birthDate: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    userService
      .update(userId, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.messsage));

    reset();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Profile Setup
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Phone"
            type="text"
            {...register("phone")}
            placeholder="Enter phone number"
            aria-invalid={!!errors.phone}
            aria-describedby="phone-error"
            errorMessage={errors.phone?.message}
          />
          <Input
            label="College"
            type="text"
            {...register("college")}
            placeholder="Enter college"
            aria-invalid={!!errors.college}
            aria-describedby="college-error"
            errorMessage={errors.college?.message}
          />
          <Input
            label="Department"
            type="text"
            {...register("department")}
            placeholder="Enter department"
            aria-invalid={!!errors.department}
            aria-describedby="department-error"
            errorMessage={errors.department?.message}
          />
          <div className="mb-4">
            <label className="block text-sm text-gray-700 mb-2" htmlFor="year">
              Year
            </label>
            <select
              {...register("year")}
              id="year"
              name="year"
              className="w-full py-1 px-3 text-lg border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-darkaccent hover:ring-2 hover:ring-darkaccent shadow-sm transition-all duration-300 ease-in-out transform"
              aria-invalid={!!errors.year}
              aria-describedby="year-error"
            >
              <option value="">Select Year</option>
              <option value="1">1st Year</option>
              <option value="2">2nd Year</option>
              <option value="3">3rd Year</option>
              <option value="4">4th Year</option>
              <option value="5">5th Year</option>
              <option value="5">6th Year</option>
              <option value="5">7th Year</option>
            </select>
            {errors.year && <ErrText>{errors.year.message}</ErrText>}
          </div>

          <Input
            label="Birth Date"
            type="date"
            {...register("birthDate")}
            aria-invalid={!!errors.birthDate}
            aria-describedby="birthDate-error"
            errorMessage={errors.birthDate?.message}
          />
          <div className="flex justify-end my-4">
            <Button type="submit">Save Profile</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProfileSetup;


