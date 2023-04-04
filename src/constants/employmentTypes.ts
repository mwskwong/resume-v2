import { EmploymentType } from "@/types";

const employmentTypes: EmploymentType[] = [
  {
    id: "fullTime",
    name: "Full Time",
  },
  {
    id: "partTime",
    name: "Part Time",
  },
  {
    id: "internship",
    name: "Internship",
  },
  {
    id: "contract",
    name: "Contract",
  },
];

export const getEmploymentTypeById = (
  employmentTypeId: EmploymentType["id"]
) => {
  const employmentType = employmentTypes.find(
    ({ id }) => id === employmentTypeId
  );
  if (!employmentType) {
    throw new TypeError(`${employmentTypeId} must be present`);
  }

  return employmentType;
};

export default employmentTypes;
