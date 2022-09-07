export const categories = <const>["Development", "Database", "IT Operations", "Project Management", "Others"];

export type CourseConstants = {
  name: string
  category: typeof categories[number]
  institution: string,
  hasFile: boolean
}

const courses: CourseConstants[] = [
  {
    name: "Administering a SQL Database Infrastructure",
    category: "Database",
    institution: "microsoft",
    hasFile: true
  },
  {
    name: "Agile Crash Course: Agile Project Management; Agile Delivery",
    category: "Project Management",
    institution: "udemy",
    hasFile: true
  },
  {
    name: "Agile Fundamentals: Including Scrum and Kanban",
    category: "Project Management",
    institution: "udemy",
    hasFile: true
  },
  {
    name: "Citrix Application and Desktop Virtualization - 7.6",
    category: "IT Operations",
    institution: "udemy",
    hasFile: true
  },
  {
    name: "Docker Crash Course for busy DevOps and Developers",
    category: "IT Operations",
    institution: "udemy",
    hasFile: true
  },
  {
    name: "Foundations of EDB v13",
    category: "Database",
    institution: "enterpriseDB",
    hasFile: false
  },
  {
    name: "Information Security Awareness-ISO 27001:2013",
    category: "IT Operations",
    institution: "udemy",
    hasFile: true
  },
  {
    name: "Linux Administration Bootcamp: Go from Beginner to Advanced",
    category: "IT Operations",
    institution: "udemy",
    hasFile: true
  },
  {
    name: "Linux Administration with Troubleshooting Skills: Hands-On",
    category: "IT Operations",
    institution: "udemy",
    hasFile: true
  },
  {
    name: "Linux Mastery: Master the Linux Command Line in 11.5 Hours",
    category: "IT Operations",
    institution: "udemy",
    hasFile: true
  },
  {
    name: "Linux Shell Scripting: A Project-Based Approach to Learning",
    category: "IT Operations",
    institution: "udemy",
    hasFile: true

  },
  {
    name: "M001: MongoDB Basics",
    category: "Database",
    institution: "mongoDB",
    hasFile: true
  },
  {
    name: "MySQL for Database Administrators",
    category: "Database",
    institution: "oracle",
    hasFile: true

  },
  {
    name: "OpenShift for the Absolute Beginners - Hands-on",
    category: "Others",
    institution: "udemy",
    hasFile: true

  },
  {
    name: "Oracle DBA 11g/12c - Database Administration for Junior DBA",
    category: "Database",
    institution: "udemy",
    hasFile: true
  },
  {
    name: "Oracle SQL Performance Tuning Masterclass",
    category: "Development",
    institution: "udemy",
    hasFile: true
  },
  {
    name: "The Complete Oracle SQL Certification Course",
    category: "Development",
    institution: "udemy",
    hasFile: false
  }
];

export default courses;