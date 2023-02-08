import dynamic from "next/dynamic";
import { FC } from "react";

import WaveRoaring from "@/components/shared/dividers/WaveRoaring";
import WaveRough from "@/components/shared/dividers/WaveRough";
import WaveSmooth from "@/components/shared/dividers/WaveSmooth";
import WaveSmoothFlat from "@/components/shared/dividers/WaveSmoothFlat";
import Section from "@/components/shared/Section";
import { ABOUT, CONTACT, EDUCATION, EXPERIENCE, HOME } from "@/constants/nav";

import useSx from "./useSx";

const Hero = dynamic(() => import("@/components/home/Hero"));
const About = dynamic(() => import("@/components/home/About"));
const Experience = dynamic(() => import("@/components/home/Experience"));
const Education = dynamic(() => import("@/components/home/Education"));
const Contact = dynamic(() => import("@/components/home/Contact"));

const Home: FC = () => {
  const sx = useSx();

  return (
    <>
      <Section fullHeight id={HOME.id}>
        <Hero />
      </Section>
      <WaveSmooth sx={sx.waveSmooth} />
      <Section variant="primary" id={ABOUT.id} data-cy={ABOUT.id} >
        <About />
      </Section>
      <WaveRough sx={sx.waveRough} />
      <Section variant="secondary" id={EXPERIENCE.id} data-cy={EXPERIENCE.id}>
        <Experience />
      </Section>
      <WaveSmoothFlat sx={sx.waveSmoothFlat} />
      <Section variant="primary" id={EDUCATION.id} data-cy={EDUCATION.id}>
        <Education/>
      </Section>
      <WaveRoaring sx={sx.waveRoaring} />
      <Section id={CONTACT.id} data-cy={CONTACT.id}>
        <Contact />
      </Section>
    </>
  );
};

export default Home;
