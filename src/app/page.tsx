import { FC } from "react";

import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import Education from "@/components/home/Education";
import Experience from "@/components/home/Experience";
import Hero from "@/components/home/Hero";
import Section from "@/components/shared/Section";
import SectionProps from "@/components/shared/Section/SectionProps";
import WaveRoaring from "@/components/shared/dividers/WaveRoaring";
import WaveRough from "@/components/shared/dividers/WaveRough";
import WaveSmooth from "@/components/shared/dividers/WaveSmooth";
import WaveSmoothFlat from "@/components/shared/dividers/WaveSmoothFlat";
import { ABOUT, CONTACT, EDUCATION, EXPERIENCE, HOME } from "@/constants/nav";
import { SectionId } from "@/types";

import Toolbar from "./Toolbar";

const sectionVariants: Record<SectionId, SectionProps["variant"]> = {
  home: "default",
  about: "primary",
  experience: "secondary",
  education: "primary",
  contact: "default",
};

const Home: FC = () => (
  <>
    <Section variant={sectionVariants.home} fullHeight id={HOME.id}>
      <Toolbar />
      <Hero />
    </Section>
    <WaveSmooth
      previousSectionVariant={sectionVariants.home}
      nextSectionVariant={sectionVariants.about}
    />
    <Section variant={sectionVariants.about} id={ABOUT.id} data-cy={ABOUT.id}>
      <About />
    </Section>
    <WaveRough
      previousSectionVariant={sectionVariants.about}
      nextSectionVariant={sectionVariants.experience}
    />
    <Section
      variant={sectionVariants.experience}
      id={EXPERIENCE.id}
      data-cy={EXPERIENCE.id}
    >
      <Experience />
    </Section>
    <WaveSmoothFlat
      previousSectionVariant={sectionVariants.experience}
      nextSectionVariant={sectionVariants.education}
    />
    <Section
      variant={sectionVariants.education}
      id={EDUCATION.id}
      data-cy={EDUCATION.id}
    >
      <Education />
    </Section>
    <WaveRoaring
      previousSectionVariant={sectionVariants.education}
      nextSectionVariant={sectionVariants.contact}
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

export default Home;
