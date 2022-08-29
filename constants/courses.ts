import adminASqlDbInfra from "assets/documents/Administering a SQL Database Infrastructure.pdf";
import agileCrashCourse from "assets/documents/Agile Crash Course Agile Project Management Agile Delivery.pdf";
import agileFundamentals from "assets/documents/Agile Fundamentals Including Scrum and Kanban.pdf";
import citrix from "assets/documents/Citrix Application and Desktop Virtualization - 7.6.pdf";
import docker from "assets/documents/Docker Crash Course for busy DevOps and Developers.pdf";
import iso from "assets/documents/Information Security Awareness-ISO 27001 2013.pdf";
import linuxBootcamp from "assets/documents/Linux Administration Bootcamp Go from Beginner to Advanced.pdf";
import linuxTroubleshoot from "assets/documents/Linux Administration with Troubleshooting Skills Hands-On.pdf";
import linuxMastery from "assets/documents/Linux Mastery Master the Linux Command Line in 11.5 Hours.pdf";
import linuxShellScript from "assets/documents/Linux Shell Scripting A Project-Based Approach to Learning.pdf";
import m001 from "assets/documents/M001 MongoDB Basics.jpg";
import mysqlForDba from "assets/documents/MySQL for Database Administrators.pdf";
import openShift from "assets/documents/OpenShift for the Absolute Beginners - Hands-on.pdf";
import oracleDba from "assets/documents/Oracle DBA 11g 12c - Database Administration for Junior DBA.pdf";
import oracleTuning from "assets/documents/Oracle SQL Performance Tuning Masterclass.pdf";

export const categories = <const>["Development", "Database", "IT Operations", "Project Management", "Others"];

type Course = {
  name: string
  category: typeof categories[number]
  institution: string
  certificationUrl?: string
}

const courses: Course[] = [
  {
    name: "Administering a SQL Database Infrastructure",
    category: "Database",
    institution: "microsoft",
    certificationUrl: adminASqlDbInfra
  },
  {
    name: "Agile Crash Course: Agile Project Management; Agile Delivery",
    category: "Project Management",
    institution: "udemy",
    certificationUrl: agileCrashCourse
  },
  {
    name: "Agile Fundamentals: Including Scrum and Kanban",
    category: "Project Management",
    institution: "udemy",
    certificationUrl: agileFundamentals
  },
  {
    name: "Citrix Application and Desktop Virtualization - 7.6",
    category: "IT Operations",
    institution: "udemy",
    certificationUrl: citrix
  },
  {
    name: "Docker Crash Course for busy DevOps and Developers",
    category: "IT Operations",
    institution: "udemy",
    certificationUrl: docker
  },
  {
    name: "Foundations of EDB v13",
    category: "Database",
    institution: "enterpriseDB"
  },
  {
    name: "Information Security Awareness-ISO 27001:2013",
    category: "IT Operations",
    institution: "udemy",
    certificationUrl: iso
  },
  {
    name: "Linux Administration Bootcamp: Go from Beginner to Advanced",
    category: "IT Operations",
    institution: "udemy",
    certificationUrl: linuxBootcamp
  },
  {
    name: "Linux Administration with Troubleshooting Skills: Hands-On",
    category: "IT Operations",
    institution: "udemy",
    certificationUrl: linuxTroubleshoot
  },
  {
    name: "Linux Mastery: Master the Linux Command Line in 11.5 Hours",
    category: "IT Operations",
    institution: "udemy",
    certificationUrl: linuxMastery
  },
  {
    name: "Linux Shell Scripting: A Project-Based Approach to Learning",
    category: "IT Operations",
    institution: "udemy",
    certificationUrl: linuxShellScript
  },
  {
    name: "M001: MongoDB Basics",
    category: "Database",
    institution: "mongoDB",
    certificationUrl: m001.src
  },
  {
    name: "MySQL for Database Administrators",
    category: "Database",
    institution: "oracle",
    certificationUrl: mysqlForDba
  },
  {
    name: "OpenShift for the Absolute Beginners - Hands-on",
    category: "Others",
    institution: "udemy",
    certificationUrl: openShift
  },
  {
    name: "Oracle DBA 11g/12c - Database Administration for Junior DBA",
    category: "Database",
    institution: "udemy",
    certificationUrl: oracleDba
  },
  {
    name: "Oracle SQL Performance Tuning Masterclass",
    category: "Development",
    institution: "udemy",
    certificationUrl: oracleTuning
  },
  {
    name: "The Complete Oracle SQL Certification Course",
    category: "Development",
    institution: "udemy"
  }
];

export default courses;