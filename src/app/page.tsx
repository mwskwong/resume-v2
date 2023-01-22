"use client";

import { FC } from "react";

import WaveRoaring from "@/components/dividers/WaveRoaring";
import WaveRough from "@/components/dividers/WaveRough";
import WaveSmooth from "@/components/dividers/WaveSmooth";
import WaveSmoothFlat from "@/components/dividers/WaveSmoothFlat";

import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import useSx from "./useSx";

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