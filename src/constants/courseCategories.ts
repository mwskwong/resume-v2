import { CourseCategory } from "@/types";

const courseCategories: CourseCategory[] = [
  {
    id: "dev",
    name: "Development"
  },
  {
    id: "db",
    name: "Database"
  },
  {
    id: "ops",
    name: "IT Operations"
  },
  {
    id: "pm",
    name: "Project Management"
  },
  {
    id: "others",
    name: "Others"
  }
];

export const getCourseCategoryById = (categoryId: CourseCategory["id"]) => {
  const courseCategory = courseCategories.find(({ id }) => id === categoryId);
  if (!courseCategory) {
    throw new TypeError(`Course category ${categoryId} must be present`);
  }

  return courseCategory;
};

export default courseCategories;