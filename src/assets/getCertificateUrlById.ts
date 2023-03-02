import { Course } from "@/types";

import adminASqlDbInfra from "./documents/Administering a SQL Database Infrastructure.pdf";
import agileCrashCourse from "./documents/Agile Crash Course Agile Project Management Agile Delivery.pdf";
import agileFundamentals from "./documents/Agile Fundamentals Including Scrum and Kanban.pdf";
import citrix from "./documents/Citrix Application and Desktop Virtualization - 7.6.pdf";
import docker from "./documents/Docker Crash Course for busy DevOps and Developers.pdf";
import iso from "./documents/Information Security Awareness-ISO 27001 2013.pdf";
import introToNumPy from "./documents/Introduction to NumPy.pdf";
import linuxBootcamp from "./documents/Linux Administration Bootcamp Go from Beginner to Advanced.pdf";
import linuxTroubleshoot from "./documents/Linux Administration with Troubleshooting Skills Hands-On.pdf";
import linuxMastery from "./documents/Linux Mastery Master the Linux Command Line in 11.5 Hours.pdf";
import linuxShellScript from "./documents/Linux Shell Scripting A Project-Based Approach to Learning.pdf";
import m001 from "./documents/M001 MongoDB Basics.jpg";
import mysqlForDba from "./documents/MySQL for Database Administrators.pdf";
import openShift from "./documents/OpenShift for the Absolute Beginners - Hands-on.pdf";
import oracleDba from "./documents/Oracle DBA 11g 12c - Database Administration for Junior DBA.pdf";
import oracleTuning from "./documents/Oracle SQL Performance Tuning Masterclass.pdf";

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
  oracleTuning,
};

const getCertificateUrlById = (certificateId: Course["id"]) => {
  if (certificateId in certificates) {
    return certificates[certificateId as keyof typeof certificates];
  }

  return undefined;
};

export default getCertificateUrlById;
