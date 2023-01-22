"use client";

import { FC } from "react";

import WaveRough from "@/components/dividers/WaveRough";
import WaveSmooth from "@/components/dividers/WaveSmooth";

import About from "./components/About";
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
    </>
  );
};

export default Home;