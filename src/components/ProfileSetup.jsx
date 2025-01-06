import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./common/Button";
import Input from "./common/Input";
import userService from "../services/user-service";
import { useLocation } from "react-router-dom";
import SelectInput from "./common/SelectInput";
import colleges from "./../services/profileSetupData.js";
import { useEffect, useState } from "react";

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
  const searchParams = new URLSearchParams(useLocation().search);
  const userId = searchParams.get("userId");

  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [yearOptions, setYearOptions] = useState([]);

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
      year: "1",
      birthDate: "",
    },
  });

  const onSubmit = (data) => {
    console.log(data);

    userService

      .update(userId, data)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.message));

    reset();
  };

  // Handling change event for college selection
  const handleCollegeChange = (event) => {
    const selected = colleges.find(
      (college) => college.value === event.target.value
    );
    setSelectedCollege(selected);

    // Reset department and year when college is changed
    setSelectedDepartment(null);
    setYearOptions([]); // Reset year options
  };
  const handleDepartmentChange = (event) => {
    const currentDepartment = selectedCollege?.options?.find(
      (dept) => dept.value === event.target.value
    );
    setSelectedDepartment(currentDepartment);
    console.log("currentDepartment", currentDepartment);

    // If department has specific years, update year options
    setYearOptions(currentDepartment ? currentDepartment.options : []);
  };

  useEffect(() => {
    console.log("reload", yearOptions);
    console.log("Form errors:", errors);
  }, [selectedCollege, selectedDepartment, yearOptions, errors]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg w-11/12 max-w-md">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
          Profile Setup
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <SelectInput
            label="College"
            name="college"
            {...register("college")}
            options={colleges}
            value={selectedCollege?.value || ""}
            onChange={handleCollegeChange}
            errorMessage={errors.college?.message}
          />
          <SelectInput
            label="Department"
            name="department"
            {...register("department")}
            options={selectedCollege?.options || []}
            value={selectedDepartment?.value || ""}
            onChange={handleDepartmentChange}
            errorMessage={errors.department?.message}
          />
          <SelectInput
            label="Year"
            name="year"
            {...register("year")}
            options={yearOptions}
            errorMessage={errors.year?.message}
          />
          <Input
            label="Phone"
            name="phone"
            type="text"
            {...register("phone")}
            aria-invalid={!!errors.phone}
            aria-describedby="phone-error"
            errorMessage={errors.phone?.message}
          />
          {/* Birth Date Input */}
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
