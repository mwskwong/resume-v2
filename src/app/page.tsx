import { FC } from "react";

import WaveRoaring from "@/components/dividers/WaveRoaring";
import WaveRough from "@/components/dividers/WaveRough";
import WaveSmooth from "@/components/dividers/WaveSmooth";
import WaveSmoothFlat from "@/components/dividers/WaveSmoothFlat";
import Section, { SectionProps } from "@/components/Section";
import { ABOUT, CONTACT, EDUCATION, EXPERIENCE, HOME } from "@/constants/nav";
import { SectionId } from "@/types";

import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";

const sectionVariants: Record<SectionId, SectionProps["variant"]> = {
  home: "default",
  about: "primary",
  experience: "secondary",
  education: "primary",
  contact: "default"
};

const Home: FC = () => (
  <>
    <Section variant={sectionVariants.home} fullHeight id={HOME.id}>
      <Hero />
    </Section>
    <WaveSmooth
      previousSectionVariant={sectionVariants.home}
      nextSectionVariant={sectionVariants.about}
    />
    <Section variant={sectionVariants.about} id={ABOUT.id} data-cy={ABOUT.id} >
      <About />
    </Section>
    <WaveRough
      previousSectionVariant={sectionVariants.about}
      nextSectionVariant={sectionVariants.experience}
    />
    <Section variant={sectionVariants.experience} id={EXPERIENCE.id} data-cy={EXPERIENCE.id}>
      <Experience />
    </Section>
    <WaveSmoothFlat
      previousSectionVariant={sectionVariants.experience}
      nextSectionVariant={sectionVariants.education}
    />
    <Section variant={sectionVariants.education} id={EDUCATION.id} data-cy={EDUCATION.id}>
      <Education />
    </Section>
    <WaveRoaring
      previousSectionVariant={sectionVariants.education}
      nextSectionVariant={sectionVariants.contact}
    />
    <Section variant={sectionVariants.contact} id={CONTACT.id} data-cy={CONTACT.id}>
      <Contact />
    </Section>
  </>
);

export default Home;
