import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./common/Button.jsx";
import Input from "./common/Input.jsx";
import userService from "../services/user-service.js";
import { replace, useLocation, useNavigate } from "react-router-dom";
import SelectInput from "./common/SelectInput.jsx";
import colleges from "../services/profileSetupData.js";
import { useContext, useState } from "react";
import AuthContext from "../contexts/authContext.js";

const profileSchema = yup.object().shape({
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(/^\d{9}$/, "Phone number must be a valid Ethiopian phone number"),
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
  const userId = searchParams.get("userid");
  console.log(userId);

  const [selectedCollege, setSelectedCollege] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [yearOptions, setYearOptions] = useState([]);
  const { dispatch } = useContext(AuthContext);

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

  const navigateToStudent = useNavigate();

  const onSubmit = (data) => {
    const phoneWithCountryCode = `+251${data.phone}`;
    const updatedData = { ...data, phone: phoneWithCountryCode };

    userService
      .update(userId, updatedData)
      .then((res) => {
        reset();
        setSelectedCollege(null);
        setSelectedDepartment(null);
        setYearOptions([]);
        dispatch({ type: "LOGIN", user: res.data });
        navigateToStudent("/student", replace);
      })
      .catch(() => alert("An error occurred while updating the profile."));
  };

  const handleCollegeChange = (event) => {
    const selected = colleges.find(
      (college) => college.value === event.target.value
    );
    setSelectedCollege(selected);
    setSelectedDepartment(null);
    setYearOptions([]);
  };

  const handleDepartmentChange = (event) => {
    const currentDepartment = selectedCollege?.options?.find(
      (dept) => dept.value === event.target.value
    );
    setSelectedDepartment(currentDepartment);
    setYearOptions(currentDepartment?.yearOption || []);
  };

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
          <div className="flex items-center space-x-2">
            <Input
              label="Country Code"
              name="countryCode"
              type="text"
              value="+251"
              readOnly
              className="w-20 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-300 border border-gray-300 dark:border-gray-600"
            />
            <Input
              label="Phone"
              name="phone"
              type="text"
              {...register("phone")}
              placeholder="Enter phone number"
              errorMessage={errors.phone?.message}
            />
          </div>
          <Input
            label="Birth Date"
            name="birthDate"
            type="date"
            {...register("birthDate")}
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
``;
