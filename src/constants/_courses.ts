export const categories = <const>["Development", "Database", "IT Operations", "Project Management", "Others"];

export type CourseConstants = {
  name: string
  category: typeof categories[number]
  institution: string
}

const courses: CourseConstants[] = [
  {
    name: "Administering a SQL Database Infrastructure",
    category: "Database",
    institution: "microsoft"
  },
  {
    name: "Agile Crash Course: Agile Project Management; Agile Delivery",
    category: "Project Management",
    institution: "udemy"
  },
  {
    name: "Agile Fundamentals: Including Scrum and Kanban",
    category: "Project Management",
    institution: "udemy"
  },
  {
    name: "Citrix Application and Desktop Virtualization - 7.6",
    category: "IT Operations",
    institution: "udemy"
  },
  {
    name: "Docker Crash Course for busy DevOps and Developers",
    category: "IT Operations",
    institution: "udemy"
  },
  {
    name: "Foundations of EDB v13",
    category: "Database",
    institution: "enterpriseDb"
  },
  {
    name: "Information Security Awareness-ISO 27001:2013",
    category: "IT Operations",
    institution: "udemy"
  },
  {
    name: "Introduction to NumPy",
    category: "Development",
    institution: "dataCamp"
  },
  {
    name: "Linux Administration Bootcamp: Go from Beginner to Advanced",
    category: "IT Operations",
    institution: "udemy"
  },
  {
    name: "Linux Administration with Troubleshooting Skills: Hands-On",
    category: "IT Operations",
    institution: "udemy"
  },
  {
    name: "Linux Mastery: Master the Linux Command Line in 11.5 Hours",
    category: "IT Operations",
    institution: "udemy"
  },
  {
    name: "Linux Shell Scripting: A Project-Based Approach to Learning",
    category: "IT Operations",
    institution: "udemy"

  },
  {
    name: "M001: MongoDB Basics",
    category: "Database",
    institution: "mongoDb"
  },
  {
    name: "MySQL for Database Administrators",
    category: "Database",
    institution: "oracle"

  },
  {
    name: "OpenShift for the Absolute Beginners - Hands-on",
    category: "Others",
    institution: "udemy"

  },
  {
    name: "Oracle DBA 11g/12c - Database Administration for Junior DBA",
    category: "Database",
    institution: "udemy"
  },
  {
    name: "Oracle SQL Performance Tuning Masterclass",
    category: "Development",
    institution: "udemy"
  },
  {
    name: "The Complete Oracle SQL Certification Course",
    category: "Development",
    institution: "udemy"
  },
  {
    name: "Fundamentals of digital marketing",
    category: "Others",
    institution: "google"
  }
];

export default courses;
