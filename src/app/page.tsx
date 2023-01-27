"use client";

import dynamic from "next/dynamic";
import { FC } from "react";

import WaveRoaring from "@/components/dividers/WaveRoaring";
import WaveRough from "@/components/dividers/WaveRough";
import WaveSmooth from "@/components/dividers/WaveSmooth";
import WaveSmoothFlat from "@/components/dividers/WaveSmoothFlat";

import useSx from "./useSx";

const Hero = dynamic(() => import("./components/Hero"));
const About = dynamic(() => import("./components/About"));
const Experience = dynamic(() => import("./components/Experience"));
const Education = dynamic(() => import("./components/Education"));
const Contact = dynamic(() => import("./components/Contact"));

const Home: FC = () => {
  const sx = useSx();

  return (
    <>
      <Hero />
      <WaveSmooth sx={sx.waveSmooth} />
      <About sx={sx.about} />
      <WaveRough sx={sx.waveRough} />
      <Experience sx={sx.experience} />
      <WaveSmoothFlat sx={sx.waveSmoothFlat} />
      <Education sx={sx.education} />
      <WaveRoaring sx={sx.waveRoaring} />
      <Contact />
    </>
  );
};

export default Home;