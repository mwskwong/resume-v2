import { Experience } from "@/types";

const experiences: Experience[] = [
  {
    from: new Date(2022, 9),
    to: "Present",
    jobTitle: "Frontend Engineer",
    company: "TecPal Ltd.",
    jobDuties: [
      "Decoupled Vue web apps from WordPress API to standalone RESTful API service",
      "Implemented Vue web apps features. e.g., Authorization system"
    ],
    supportingDocuments: [],
    relevantSkills: [
      "Vue",
      "Vuetify",
      "Quasar",
      "Vuex",
      "Pinia",
      "WordPress"
    ]
  },
  {
    from: new Date(2022, 4),
    to: new Date(2022, 8),
    jobTitle: "Programmer (Business and Administrative Systems)",
    company: "EDPS Limited | Seconded to Hospital Authority",
    jobDuties: [
      "Maintain, enhance, and manage ha.org.hk and several intranet web apps, serving 100+ staff and 7M+ Hong Kong residents",
      "Planned and finalized web app OS and DB migration within 1 week"
    ],
    supportingDocuments: [],
    relevantSkills: [
      "ASP",
      "jQuery",
      "Microsoft SQL Server"
    ]
  },
  {
    from: new Date(2021, 7),
    to: new Date(2022, 4),
    jobTitle: "Programmer (Database Management System)",
    company: "EDPS Limited | Seconded to Hospital Authority",
    jobDuties: [
      "Participated in conducting DB knowledge-sharing sessions for 100+ audience",
      "Initiated and maintained a Bitrix24 site to manage training materials, guidelines, and documentation, boosting working efficiency by 20%",
      "Designed and developed a DB health check system using React, Express, and MySQL to facilitate SRE and reduce system recovery time",
      "Supported and guided 10+ application teams on MySQL deployment and maintenance",
      "Designed and developed a web app using React, Express, and MySQL to visualize database CPU utilization which led to a 30% increase in productivity",
      "POC on data virtualization with Delphix DataOps platform supporting 3 types of DB and 50+ DB instances"
    ],
    supportingDocuments: [
      "haSc3RefLetter",
      "lunchAndLearn"
    ],
    relevantSkills: [
      "MySQL",
      "Microsoft SQL Server",
      "Oracle Database",
      "Sybase ASE",
      "Delphix",
      "React",
      "MUI",
      "Redux",
      "React Hook Form",
      "Prism.js",
      "Express",
      "OpenShift"
    ]
  },
  {
    from: new Date(2019, 6),
    to: new Date(2021, 7),
    jobTitle: "Junior Programmer (Database Management System)",
    company: "EDPS Limited | Seconded to Hospital Authority",
    jobDuties: [
      "Supported and guided 3+ application teams on MySQL deployment and maintenance",
      "Maintained database management web application",
      "Implemented time off application system using React, Express, and MySQL, serving 20+ team members and cut down admin work by 90%",
      "Implemented a Java-based database password management application supporting 3 types of DB",
      "POC on data virtualization with Delphix DataOps platform supporting 2 types of DB and 30+ DB instances"
    ],
    supportingDocuments: [],
    relevantSkills: [
      "MySQL",
      "Sybase ASE",
      "Delphix",
      "React",
      "MUI",
      "Redux",
      "Express"
    ]
  },
  {
    from: new Date(2018, 5),
    to: new Date(2018, 7),
    jobTitle: "Summer Internship (Software Development)",
    company: "HKU Technology Transfer Office / Versitech Limited",
    jobDuties: [
      "Design test suite for E-Form Filler in cooperation with software engineers",
      "Design and develop installer for E-Form Filler using NSIS MUI2",
      "Rework a 3-year-old MPF cross-platform mobile application using React Native to replace the legacy Apache Cordova framework"
    ],
    supportingDocuments: [],
    relevantSkills: [
      "NSIS MUI2",
      "React Native",
      "NativeBase",
      "React Navigation"
    ]
  },
  {
    from: new Date(2017, 6),
    to: new Date(2017, 8),
    jobTitle: "Student Research Assistant",
    company: "School of Public Health, HKU",
    jobDuties: [
      "Develop and design a JavaFX application to perform bioinformatics analysis"
    ],
    supportingDocuments: [
      "hkuMedRaRefLetter"
    ],
    relevantSkills: [
      "JavaFX"
    ]
  },
  {
    from: new Date(2017, 0),
    to: new Date(2017, 3),
    jobTitle: "Teaching Assistant",
    company: "Faculty of Engineering, HKU",
    jobDuties: [
      "Instruct over 20 students during tutorial sessions of a C++ programming course"
    ],
    supportingDocuments: [
      "hkuEngTaRefLetter"
    ],
    relevantSkills: [
      "C++"
    ]
  }
];

export default experiences;