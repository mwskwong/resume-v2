import { FC } from "react";

import About from "@/components/home/about";
import Contact from "@/components/home/contact";
import Education from "@/components/home/education";
import Experience from "@/components/home/experience";
import Hero from "@/components/home/hero";
import Section from "@/components/shared/Section";
import SectionProps from "@/components/shared/Section/SectionProps";
import WaveRoaring from "@/components/shared/dividers/wave-roaring";
import WaveRough from "@/components/shared/dividers/wave-rough";
import WaveSmooth from "@/components/shared/dividers/wave-smooth";
import WaveSmoothFlat from "@/components/shared/dividers/wave-smooth-flat";
import { ABOUT, CONTACT, EDUCATION, EXPERIENCE, HOME } from "@/constants/nav";
import { SectionId } from "@/types";

import Toolbar from "./toolbar";

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
      sectionVariants={{
        previous: sectionVariants.home,
        next: sectionVariants.about,
      }}
    />
    <Section variant={sectionVariants.about} id={ABOUT.id} data-cy={ABOUT.id}>
      <About />
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
      <Education />
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

export default Home;
