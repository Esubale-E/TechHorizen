const studyYears = [
  { value: "", label: "Select Year" },
  { value: "1st Year", label: "1st Year" },
  { value: "2nd Year", label: "2nd Year" },
  { value: "3rd Year", label: "3rd Year" },
  { value: "4th Year", label: "4th Year" },
  { value: "5th Year", label: "5th Year" },
  { value: "6th Year", label: "6th Year" },
  { value: "7th Year", label: "7th Year" },
];

const sliceYears = (maxYear) => studyYears.slice(0, maxYear);

const colleges = [
  { value: "", label: "Select College" },
  {
    value: "engineering and technology",
    label: "Engneering & Technology",
    options: [
      { value: "", label: "Select Department" },
      {
        value: "computer science",
        label: "Computer Science",
        yearOption: sliceYears(5),
      },
      {
        value: "software engneering",
        label: "Software Engneering",
        yearOption: sliceYears(6),
      },
      {
        value: "information technology",
        label: "Information Technology",
        yearOption: sliceYears(5),
      },
      {
        value: "information system",
        label: "Information System",
        yearOption: sliceYears(5),
      },
    ],
  },
  {
    value: "medicine and health science",
    label: "Medcine & Health Science",
    options: [
      { value: "", label: "Select Department" },
      {
        value: "medicne",
        label: "Medicne",
      },
      {
        value: "health officer",
        label: "Health Officer",
      },
    ],
  },
];

export default colleges;
export { studyYears };
