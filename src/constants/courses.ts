import { Course } from "@/types";

import { getBrandById } from "./brands";
import { getCourseCategoryById } from "./courseCategories";

const courses: Course[] = [
  {
    id: "adminASqlDbInfra",
    name: "Administering a SQL Database Infrastructure",
    category: getCourseCategoryById("db"),
    institution: getBrandById("microsoft")
  },
  {
    id: "agileCrashCourse",
    name: "Agile Crash Course: Agile Project Management; Agile Delivery",
    category: getCourseCategoryById("pm"),
    institution: getBrandById("udemy")
  },
  {
    id: "agileFundamentals",
    name: "Agile Fundamentals: Including Scrum and Kanban",
    category: getCourseCategoryById("pm"),
    institution: getBrandById("udemy")
  },
  {
    id: "citrix",
    name: "Citrix Application and Desktop Virtualization - 7.6",
    category: getCourseCategoryById("ops"),
    institution: getBrandById("udemy")
  },
  {
    id: "docker",
    name: "Docker Crash Course for busy DevOps and Developers",
    category: getCourseCategoryById("ops"),
    institution: getBrandById("udemy")
  },
  {
    id: "edb",
    name: "Foundations of EDB v13",
    category: getCourseCategoryById("db"),
    institution: getBrandById("enterpriseDb")
  },
  {
    id: "iso",
    name: "Information Security Awareness-ISO 27001:2013",
    category: getCourseCategoryById("ops"),
    institution: getBrandById("udemy")

  },
  {
    id: "introToNumPy",
    name: "Introduction to NumPy",
    category: getCourseCategoryById("dev"),
    institution: getBrandById("dataCamp")
  },
  {
    id: "linuxBootcamp",
    name: "Linux Administration Bootcamp: Go from Beginner to Advanced",
    category: getCourseCategoryById("ops"),
    institution: getBrandById("udemy")
  },
  {
    id: "linuxTroubleshoot",
    name: "Linux Administration with Troubleshooting Skills: Hands-On",
    category: getCourseCategoryById("ops"),
    institution: getBrandById("udemy")
  },
  {
    id: "linuxMastery",
    name: "Linux Mastery: Master the Linux Command Line in 11.5 Hours",
    category: getCourseCategoryById("ops"),
    institution: getBrandById("udemy")
  },
  {
    id: "linuxShellScript",
    name: "Linux Shell Scripting: A Project-Based Approach to Learning",
    category: getCourseCategoryById("ops"),
    institution: getBrandById("udemy")
  },
  {
    id: "m001",
    name: "M001: MongoDB Basics",
    category: getCourseCategoryById("db"),
    institution: getBrandById("mongoDb")
  },
  {
    id: "mysqlForDba",
    name: "MySQL for Database Administrators",
    category: getCourseCategoryById("db"),
    institution: getBrandById("oracle")
  },
  {
    id: "openShift",
    name: "OpenShift for the Absolute Beginners - Hands-on",
    category: getCourseCategoryById("others"),
    institution: getBrandById("udemy")
  },
  {
    id: "oracleDba",
    name: "Oracle DBA 11g/12c - Database Administration for Junior DBA",
    category: getCourseCategoryById("db"),
    institution: getBrandById("udemy")
  },
  {
    id: "oracleTuning",
    name: "Oracle SQL Performance Tuning Masterclass",
    category: getCourseCategoryById("dev"),
    institution: getBrandById("udemy")
  },
  {
    id: "oracleSql",
    name: "The Complete Oracle SQL Certificate Course",
    category: getCourseCategoryById("dev"),
    institution: getBrandById("udemy")
  },
  {
    id: "digitalMarketing",
    name: "Fundamentals of digital marketing",
    category: getCourseCategoryById("others"),
    institution: getBrandById("google")
  }
];

courses.sort((course1, course2) => {
  if (course1.name > course2.name) {
    return 1;
  }

  if (course1.name < course2.name) {
    return -1;
  }

  return 0;
});

export default courses;
