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
import { Course } from "@/types";

const getCertificateUrl = (id: Course["id"]) => {
  const certificates = {
    adminASqlDbInfra,
    agileCrashCourse,
    agileFundamentals,
    citrix,
    docker,
    iso,
    introToNumPy,
    linuxBootcamp,
    linuxTroubleshoot,
    linuxMastery,
    linuxShellScript,
    m001: m001.src,
    mysqlForDba,
    openShift,
    oracleDba,
    oracleTuning
  };

  if (id in certificates) {
    return certificates[id as keyof typeof certificates];
  }

  return undefined;
};

export default getCertificateUrl;