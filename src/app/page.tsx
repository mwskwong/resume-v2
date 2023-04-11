import {
  getCourses,
  getEducations,
  getExperiences,
  getPlatformProfiles,
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
import SectionProps from "@/components/shared/section/section-props";
import { ABOUT, CONTACT, EDUCATION, EXPERIENCE, HOME } from "@/constants/nav";
import { SectionId } from "@/types";

import TestPdf from "./test-pdf";

const sectionVariants: Record<SectionId, SectionProps["variant"]> = {
  home: "default",
  about: "primary",
  experience: "secondary",
  education: "primary",
  contact: "default",
};

export default async function Home() {
  const [platformProfiles, skills, experiences, educations, courses] =
    await Promise.all([
      getPlatformProfiles(),
      getSkills(),
      getExperiences(),
      getEducations(),
      getCourses(),
    ]);

  return (
    <>
      <Section variant={sectionVariants.home} fullHeight id={HOME.id}>
        <Hero platformProfiles={platformProfiles} />
      </Section>
      <WaveSmooth
        sectionVariants={{
          previous: sectionVariants.home,
          next: sectionVariants.about,
        }}
      />
      <div style={{ width: 100 }}>
        <TestPdf />
      </div>
      <Section variant={sectionVariants.about} id={ABOUT.id} data-cy={ABOUT.id}>
        <About skills={skills} />
      </Section>
      <WaveRough
        sectionVariants={{
          previous: sectionVariants.about,
          next: sectionVariants.experience,
        }}
      />
      <Section
        variant={sectionVariants.experience}
        id={EXPERIENCE.id}
        data-cy={EXPERIENCE.id}
      >
        <Experience />
      </Section>
      <WaveSmoothFlat
        sectionVariants={{
          previous: sectionVariants.experience,
          next: sectionVariants.education,
        }}
      />
      <Section
        variant={sectionVariants.education}
        id={EDUCATION.id}
        data-cy={EDUCATION.id}
      >
        <Education educations={educations} courses={courses} />
      </Section>
      <WaveRoaring
        sectionVariants={{
          previous: sectionVariants.education,
          next: sectionVariants.contact,
        }}
      />
      <Section
        variant={sectionVariants.contact}
        id={CONTACT.id}
        data-cy={CONTACT.id}
      >
        <Contact />
      </Section>
    </>
  );
}
