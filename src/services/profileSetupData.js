const studyYears = [
  { value: "", label: "Select Year" },
  { value: "1", label: "1st Year" },
  { value: "2", label: "2nd Year" },
  { value: "3", label: "3rd Year" },
  { value: "4", label: "4th Year" },
  { value: "5", label: "5th Year" },
  { value: "6", label: "6th Year" },
  { value: "7", label: "7th Year" },
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
        options: sliceYears(4),
      },
      {
        value: "software engneering",
        label: "Software Engneering",
      },
      {
        value: "information technology",
        label: "Information Technology",
      },
      {
        value: "information system",
        label: "Information System",
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
