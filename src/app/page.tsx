import { TypeBackground } from "@mui/material";

import {
  getCourses,
  getEducations,
  getExperiences,
  getPersonalPhoto,
  getPlatformProfiles,
  getResume,
  getSkills,
} from "@/api";
import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Education from "@/components/home/education";
import Experience from "@/components/home/experience";
import Hero from "@/components/home/hero";
import WaveRoaring from "@/components/shared/dividers/wave-roaring";
import WaveRough from "@/components/shared/dividers/wave-rough";
import WaveSmooth from "@/components/shared/dividers/wave-smooth";
import WaveSmoothFlat from "@/components/shared/dividers/wave-smooth-flat";
import Section from "@/components/shared/section";
import { about, contact, education, experience, home } from "@/constants/nav";

const sectionVariants: Record<
  "home" | "about" | "experience" | "education" | "contact",
  keyof TypeBackground
> = {
  home: "default",
  about: "primary",
  experience: "secondary",
  education: "primary",
  contact: "default",
};

export default async function Home() {
  const [
    platformProfiles,
    skills,
    experiences,
    educations,
    courses,
    resume,
    personalPhoto,
  ] = await Promise.all([
    getPlatformProfiles(),
    getSkills(),
    getExperiences(),
    getEducations(),
    getCourses(),
    getResume(),
    getPersonalPhoto(),
  ]);

  return (
    <>
      <Section variant={sectionVariants.home} fullHeight id={home.id}>
        <Hero platformProfiles={platformProfiles} resume={resume} />
      </Section>
      <WaveSmooth
        sectionVariants={{
          previous: sectionVariants.home,
          next: sectionVariants.about,
        }}
      />
      <Section variant={sectionVariants.about} id={about.id}>
        <About personalPhoto={personalPhoto} skills={skills} />
      </Section>
      <WaveRough
        sectionVariants={{
          previous: sectionVariants.about,
          next: sectionVariants.experience,
        }}
      />
      <Section variant={sectionVariants.experience} id={experience.id}>
        <Experience experiences={experiences} />
      </Section>
      <WaveSmoothFlat
        sectionVariants={{
          previous: sectionVariants.experience,
          next: sectionVariants.education,
        }}
      />
      <Section variant={sectionVariants.education} id={education.id}>
        <Education educations={educations} courses={courses} />
      </Section>
      <WaveRoaring
        sectionVariants={{
          previous: sectionVariants.education,
          next: sectionVariants.contact,
        }}
      />
      <Section variant={sectionVariants.contact} id={contact.id}>
        <Contact />
      </Section>
    </>
  );
}
