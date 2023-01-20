import adminASqlDbInfra from "@/assets/documents/Administering a SQL Database Infrastructure.pdf";
import agileCrashCourse from "@/assets/documents/Agile Crash Course Agile Project Management Agile Delivery.pdf";
import agileFundamentals from "@/assets/documents/Agile Fundamentals Including Scrum and Kanban.pdf";
import citrix from "@/assets/documents/Citrix Application and Desktop Virtualization - 7.6.pdf";
import docker from "@/assets/documents/Docker Crash Course for busy DevOps and Developers.pdf";
import iso from "@/assets/documents/Information Security Awareness-ISO 27001 2013.pdf";
import introToNumPy from "@/assets/documents/Introduction to NumPy.pdf";
import linuxBootcamp from "@/assets/documents/Linux Administration Bootcamp Go from Beginner to Advanced.pdf";
import linuxTroubleshoot from "@/assets/documents/Linux Administration with Troubleshooting Skills Hands-On.pdf";
import linuxMastery from "@/assets/documents/Linux Mastery Master the Linux Command Line in 11.5 Hours.pdf";
import linuxShellScript from "@/assets/documents/Linux Shell Scripting A Project-Based Approach to Learning.pdf";
import m001 from "@/assets/documents/M001 MongoDB Basics.jpg";
import mysqlForDba from "@/assets/documents/MySQL for Database Administrators.pdf";
import openShift from "@/assets/documents/OpenShift for the Absolute Beginners - Hands-on.pdf";
import oracleDba from "@/assets/documents/Oracle DBA 11g 12c - Database Administration for Junior DBA.pdf";
import oracleTuning from "@/assets/documents/Oracle SQL Performance Tuning Masterclass.pdf";

import coursesConstants, { categories, CourseConstants } from "./_courses";

type Course = CourseConstants & {
  certificationUrl?: string
}

const certifications: Record<string, string> = {
  "Administering a SQL Database Infrastructure": adminASqlDbInfra,
  "Agile Crash Course: Agile Project Management; Agile Delivery": agileCrashCourse,
  "Agile Fundamentals: Including Scrum and Kanban": agileFundamentals,
  "Citrix Application and Desktop Virtualization - 7.6": citrix,
  "Docker Crash Course for busy DevOps and Developers": docker,
  "Information Security Awareness-ISO 27001:2013": iso,
  "Introduction to NumPy": introToNumPy,
  "Linux Administration Bootcamp: Go from Beginner to Advanced": linuxBootcamp,
  "Linux Administration with Troubleshooting Skills: Hands-On": linuxTroubleshoot,
  "Linux Mastery: Master the Linux Command Line in 11.5 Hours": linuxMastery,
  "Linux Shell Scripting: A Project-Based Approach to Learning": linuxShellScript,
  "M001: MongoDB Basics": m001.src,
  "MySQL for Database Administrators": mysqlForDba,
  "OpenShift for the Absolute Beginners - Hands-on": openShift,
  "Oracle DBA 11g/12c - Database Administration for Junior DBA": oracleDba,
  "Oracle SQL Performance Tuning Masterclass": oracleTuning
};

const courses: Course[] = coursesConstants.map(course => ({ ...course, certificationUrl: certifications[course.name] }));

courses.sort((c1, c2) => {
  if (c1.name < c2.name) return -1;
  if (c1.name > c2.name) return 1;
  return 0;
});

export default courses;
export { categories };