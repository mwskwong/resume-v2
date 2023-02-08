"use client";

import dynamic from "next/dynamic";
import { FC } from "react";

import WaveRoaring from "@/components/shared/dividers/WaveRoaring";
import WaveRough from "@/components/shared/dividers/WaveRough";
import WaveSmooth from "@/components/shared/dividers/WaveSmooth";
import WaveSmoothFlat from "@/components/shared/dividers/WaveSmoothFlat";
import Section from "@/components/shared/Section";
import SectionProps from "@/components/shared/Section/SectionProps";
import { ABOUT, CONTACT, EDUCATION, EXPERIENCE, HOME } from "@/constants/nav";
import { SectionId } from "@/types";


const Hero = dynamic(() => import("@/components/home/Hero"));
const About = dynamic(() => import("@/components/home/About"));
const Experience = dynamic(() => import("@/components/home/Experience"));
const Education = dynamic(() => import("@/components/home/Education"));
const Contact = dynamic(() => import("@/components/home/Contact"));

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
