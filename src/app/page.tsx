"use client";

import { FC, lazy, Suspense } from "react";

import WaveRoaring from "@/components/shared/dividers/WaveRoaring";
import WaveRough from "@/components/shared/dividers/WaveRough";
import WaveSmooth from "@/components/shared/dividers/WaveSmooth";
import WaveSmoothFlat from "@/components/shared/dividers/WaveSmoothFlat";
import Section from "@/components/shared/Section";
import SectionProps from "@/components/shared/Section/SectionProps";
import { ABOUT, CONTACT, EDUCATION, EXPERIENCE, HOME } from "@/constants/nav";
import { SectionId } from "@/types";


const Hero = lazy(() => import("@/components/home/Hero"));
const About = lazy(() => import("@/components/home/About"));
const Experience = lazy(() => import("@/components/home/Experience"));
const Education = lazy(() => import("@/components/home/Education"));
const Contact = lazy(() => import("@/components/home/Contact"));

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
      <Suspense>
        <Hero />
      </Suspense>
    </Section>
    <WaveSmooth
      previousSectionVariant={sectionVariants.home}
      nextSectionVariant={sectionVariants.about}
    />
    <Section variant={sectionVariants.about} id={ABOUT.id} data-cy={ABOUT.id} >
      <Suspense>
        <About />
      </Suspense>
    </Section>
    <WaveRough
      previousSectionVariant={sectionVariants.about}
      nextSectionVariant={sectionVariants.experience}
    />
    <Section variant={sectionVariants.experience} id={EXPERIENCE.id} data-cy={EXPERIENCE.id}>
      <Suspense>
        <Experience />
      </Suspense>
    </Section>
    <WaveSmoothFlat
      previousSectionVariant={sectionVariants.experience}
      nextSectionVariant={sectionVariants.education}
    />
    <Section variant={sectionVariants.education} id={EDUCATION.id} data-cy={EDUCATION.id}>
      <Suspense>
        <Education />
      </Suspense>
    </Section>
    <WaveRoaring
      previousSectionVariant={sectionVariants.education}
      nextSectionVariant={sectionVariants.contact}
    />
    <Section variant={sectionVariants.contact} id={CONTACT.id} data-cy={CONTACT.id}>
      <Suspense>
        <Contact />
      </Suspense>
    </Section>
  </>
);

export default Home;
